import * as TypeGraphQL from "type-graphql";
import { UserPurchase } from "../generated/type-graphql/models/UserPurchase";
import { User } from "../generated/type-graphql/models/User";
import { RazorpayService } from "../services/razorpay";
import type { MyContext } from "../types/Context";
import { OrderStatus } from "../generated/type-graphql/enums/OrderStatus";
import { sendPaymentConfirmationMail } from "../utils/mailer";
import crypto from "crypto";

@TypeGraphQL.InputType()
class CartOrderItemInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int)
  merchId!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int)
  qty!: number;

  @TypeGraphQL.Field()
  size!: string;
}

@TypeGraphQL.ObjectType()
class CartOrderResult {
  @TypeGraphQL.Field()
  razorpayOrderId!: string;

  @TypeGraphQL.Field(() => [TypeGraphQL.Float])
  purchaseIds!: number[];

  @TypeGraphQL.Field(() => TypeGraphQL.Float)
  totalAmount!: number;
}

@TypeGraphQL.Resolver()
export class PaymentResolver {
  private razorpayService = new RazorpayService();

  /**
   * Create a Razorpay order for merchandise purchase
   */
  @TypeGraphQL.Mutation(() => String, { nullable: false })
  async createMerchPurchaseOrder(
    @TypeGraphQL.Arg("purchaseId") purchaseId: number,
    @TypeGraphQL.Arg("amount") amount: number,
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<string> {
    if (!ctx.user) {
      throw new Error("Unauthorized: User not authenticated");
    }

    try {
      // Verify purchase belongs to user
      const purchase = await ctx.prisma.userPurchase.findUnique({
        where: { id: purchaseId },
        include: { merch: true },
      });

      if (!purchase || purchase.userId !== ctx.user.id) {
        throw new Error("Purchase not found or unauthorized");
      }

      // Create Razorpay order
      const razorpayOrder = await this.razorpayService.createOrder({
        amount: Math.round(amount * 100), // Convert to paise
        currency: "INR",
        receipt: `purchase_${purchaseId}_${Date.now()}`,
        notes: {
          purchaseId: purchaseId.toString(),
          userId: ctx.user.id.toString(),
          email: ctx.user.email,
        },
      });

      // Update purchase with Razorpay order ID
      await ctx.prisma.userPurchase.update({
        where: { id: purchaseId },
        data: {
          razorpayOrderId: razorpayOrder.id,
          status: OrderStatus.PENDING,
        },
      });

      return razorpayOrder.id;
    } catch (error) {
      throw new Error(`Failed to create merchandise purchase order: ${error}`);
    }
  }

  /**
   * Verify merchandise payment and update records
   */
  @TypeGraphQL.Mutation(() => UserPurchase, { nullable: false })
  async verifyMerchPayment(
    @TypeGraphQL.Arg("purchaseId") purchaseId: number,
    @TypeGraphQL.Arg("razorpayPaymentId") razorpayPaymentId: string,
    @TypeGraphQL.Arg("razorpaySignature") razorpaySignature: string,
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<UserPurchase> {
    if (!ctx.user) {
      throw new Error("Unauthorized: User not authenticated");
    }

    try {
      // Get purchase to verify
      const purchase = await ctx.prisma.userPurchase.findUnique({
        where: { id: purchaseId },
        include: { merch: true, user: true },
      });

      if (!purchase || purchase.userId !== ctx.user.id) {
        throw new Error("Purchase not found or unauthorized");
      }

      // Verify payment signature
      const expectedSignature = crypto
        .createHmac(
          "sha256",
          process.env.RAZORPAY_SECRET || ""
        )
        .update(`${purchase.razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      if (expectedSignature !== razorpaySignature) {
        throw new Error("Invalid payment signature");
      }

      // Get payment details from Razorpay
      const payment = await this.razorpayService.getPayment(razorpayPaymentId);

      if (payment.status !== "captured") {
        throw new Error("Payment not captured");
      }

      // Update UserPurchase
      const updatedPurchase = await ctx.prisma.userPurchase.update({
        where: { id: purchaseId },
        data: {
          razorpayPaymentId: razorpayPaymentId,
          status: OrderStatus.COMPLETED,
        },
        include: {
          merch: true,
          user: true,
        },
      });

      // Send payment confirmation email
      await sendPaymentConfirmationMail(
        ctx.user.email,
        ctx.user.name,
        purchase.merch.price * purchase.qty,
        razorpayPaymentId
      );

      return updatedPurchase;
    } catch (error) {
      throw new Error(`Failed to verify merchandise payment: ${error}`);
    }
  }

  /**
   * Create a Razorpay order for registration/campaign
   */
  @TypeGraphQL.Mutation(() => String, { nullable: false })
  async createRegistrationOrder(
    @TypeGraphQL.Arg("amount") amount: number,
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<string> {
    if (!ctx.user) {
      throw new Error("Unauthorized: User not authenticated");
    }

    try {
      // Create Razorpay order for registration
      const razorpayOrder = await this.razorpayService.createOrder({
        amount: Math.round(amount * 100), // Convert to paise
        currency: "INR",
        receipt: `registration_${ctx.user.id}_${Date.now()}`,
        notes: {
          userId: ctx.user.id.toString(),
          email: ctx.user.email,
          type: "registration",
        },
      });

      return razorpayOrder.id;
    } catch (error) {
      throw new Error(`Failed to create registration order: ${error}`);
    }
  }

  /**
   * Checkout entire cart: create UserPurchase records + single Razorpay order
   */
  @TypeGraphQL.Mutation(() => CartOrderResult, { nullable: false })
  async checkoutCart(
    @TypeGraphQL.Arg("items", () => [CartOrderItemInput]) items: CartOrderItemInput[],
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<CartOrderResult> {
    if (!ctx.user) throw new Error("Unauthorized: User not authenticated");
    if (!items.length) throw new Error("Cart is empty");

    try {
      const merchIds = items.map((i) => i.merchId);
      const merches = await ctx.prisma.merch.findMany({
        where: { id: { in: merchIds } },
      });
      const priceMap = new Map(merches.map((m) => [m.id, m.price]));

      let totalAmount = 0;
      for (const item of items) {
        const price = priceMap.get(item.merchId);
        if (price === undefined) throw new Error(`Merch ${item.merchId} not found`);
        totalAmount += price * item.qty;
      }

      const purchases = await Promise.all(
        items.map((item) =>
          ctx.prisma.userPurchase.create({
            data: {
              merchId: item.merchId,
              qty: item.qty,
              size: item.size,
              userId: ctx.user!.id,
              status: OrderStatus.PENDING,
            },
          })
        )
      );

      const purchaseIds = purchases.map((p) => p.id);

      const razorpayOrder = await this.razorpayService.createOrder({
        amount: Math.round(totalAmount * 100),
        currency: "INR",
        receipt: `cart_${ctx.user.id}_${Date.now()}`,
        notes: {
          purchaseIds: purchaseIds.join(","),
          userId: ctx.user.id.toString(),
          email: ctx.user.email,
        },
      });

      return { razorpayOrderId: razorpayOrder.id, purchaseIds, totalAmount };
    } catch (error) {
      throw new Error(`Failed to checkout cart: ${error}`);
    }
  }

  /**
   * Verify cart payment and mark all purchases as completed
   */
  @TypeGraphQL.Mutation(() => Boolean, { nullable: false })
  async verifyCartPayment(
    @TypeGraphQL.Arg("purchaseIds", () => [TypeGraphQL.Float]) purchaseIds: number[],
    @TypeGraphQL.Arg("razorpayOrderId") razorpayOrderId: string,
    @TypeGraphQL.Arg("razorpayPaymentId") razorpayPaymentId: string,
    @TypeGraphQL.Arg("razorpaySignature") razorpaySignature: string,
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<boolean> {
    if (!ctx.user) throw new Error("Unauthorized: User not authenticated");

    try {
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET || "")
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      if (expectedSignature !== razorpaySignature) {
        throw new Error("Invalid payment signature");
      }

      const payment = await this.razorpayService.getPayment(razorpayPaymentId);
      if (payment.status !== "captured") throw new Error("Payment not captured");

      await ctx.prisma.userPurchase.updateMany({
        where: { id: { in: purchaseIds }, userId: ctx.user.id },
        data: { status: OrderStatus.COMPLETED },
      });

      // Store IDs on first purchase (both fields are @unique so only one record can hold them)
      await ctx.prisma.userPurchase.update({
        where: { id: purchaseIds[0] },
        data: { razorpayOrderId, razorpayPaymentId },
      });

      await sendPaymentConfirmationMail(
        ctx.user.email,
        ctx.user.name,
        payment.amount / 100,
        razorpayPaymentId
      );

      return true;
    } catch (error) {
      throw new Error(`Failed to verify cart payment: ${error}`);
    }
  }

  /**
   * Verify registration payment and update user
   */
  @TypeGraphQL.Mutation(() => User, { nullable: false })
  async verifyRegistrationPayment(
    @TypeGraphQL.Arg("razorpayOrderId") razorpayOrderId: string,
    @TypeGraphQL.Arg("razorpayPaymentId") razorpayPaymentId: string,
    @TypeGraphQL.Arg("razorpaySignature") razorpaySignature: string,
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<User> {
    if (!ctx.user) {
      throw new Error("Unauthorized: User not authenticated");
    }

    try {
      // Verify payment signature
      const expectedSignature = crypto
        .createHmac(
          "sha256",
          process.env.RAZORPAY_SECRET || ""
        )
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      if (expectedSignature !== razorpaySignature) {
        throw new Error("Invalid payment signature");
      }

      // Get payment details from Razorpay
      const payment = await this.razorpayService.getPayment(razorpayPaymentId);

      if (payment.status !== "captured") {
        throw new Error("Payment not captured");
      }

      // Update User with registration payment details and mark as COMPLETED
      const updatedUser = await ctx.prisma.user.update({
        where: { id: ctx.user.id },
        data: {
          registrationrazorpayOrderId: razorpayOrderId,
          registrationrazorpayPaymentId: razorpayPaymentId,
          paymentStatus: OrderStatus.COMPLETED,
        },
      });

      // Send payment confirmation email
      await sendPaymentConfirmationMail(
        ctx.user.email,
        ctx.user.name,
        payment.amount / 100, // Convert from paise
        razorpayPaymentId
      );

      return updatedUser;
    } catch (error) {
      throw new Error(`Failed to verify registration payment: ${error}`);
    }
  }
}
