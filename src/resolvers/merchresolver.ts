import * as TypeGraphQL from "type-graphql";
import { Merch } from "../generated/type-graphql/models/Merch";
import { UserPurchase } from "../generated/type-graphql/models/UserPurchase";
import { OrderStatus } from "../generated/type-graphql/enums/OrderStatus";
import type { MyContext } from "../types/Context";
import { User } from "src/generated/type-graphql";

@TypeGraphQL.Resolver()
export class MerchResolver {
  // Admin-only utility method to check authorization
  private checkAdminRole(ctx: MyContext): void {
    if (!ctx.user) {
      throw new Error("Unauthorized: User not authenticated");
    }
    if (ctx.user.role !== "ADMIN") {
      throw new Error("Forbidden: Admin role required");
    }
  }
  @TypeGraphQL.Query(() => [Merch], { nullable: false })
  async getAllMerch(@TypeGraphQL.Ctx() ctx: MyContext): Promise<Merch[]> {
    try {
      const merches = await ctx.prisma.merch.findMany({
        orderBy: {
          id: "asc",
        },
      });
      return merches;
    } catch (error) {
      throw new Error(`Failed to fetch merchandise: ${error}`);
    }
  }

  @TypeGraphQL.Query(() => [UserPurchase], { nullable: false })
  async getUserPurchases(
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<UserPurchase[]> {
    // Extract userId from JWT context
    if (!ctx.user) {
      throw new Error("Unauthorized: User not authenticated");
    }

    try {
      const purchases = await ctx.prisma.userPurchase.findMany({
        where: {
          userId: ctx.user.id,
        },
        include: {
          merch: true,
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return purchases;
    } catch (error) {
      throw new Error(`Failed to fetch user purchases: ${error}`);
    }
  }

  @TypeGraphQL.Query(() => [UserPurchase], { nullable: false })
  async getAllUserPurchases(
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<UserPurchase[]> {
    // Admin-only query
    this.checkAdminRole(ctx);

    try {
      const purchases = await ctx.prisma.userPurchase.findMany({
        include: {
          merch: true,
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return purchases;
    } catch (error) {
      throw new Error(`Failed to fetch all user purchases: ${error}`);
    }
  }

  @TypeGraphQL.Mutation(() => UserPurchase, { nullable: false })
  async updatePurchasePaymentStatus(
    @TypeGraphQL.Arg("purchaseId") purchaseId: number,
    @TypeGraphQL.Arg("status", () => OrderStatus) status: OrderStatus,
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<UserPurchase> {
    // Admin-only mutation
    this.checkAdminRole(ctx);

    try {
      const updatedPurchase = await ctx.prisma.userPurchase.update({
        where: {
          id: purchaseId,
        },
        data: {
          status: status
        },
        include: {
          merch: true,
          user: true,
        },
      });
      return updatedPurchase;
    } catch (error) {
      throw new Error(`Failed to update purchase payment status: ${error}`);
    }
  }


  //to set paymentstatus for registration = true
  @TypeGraphQL.Mutation(() => UserPurchase, { nullable: false })
  async updateRegistrationPaymentStatus(
    @TypeGraphQL.Arg("email") email: string,
    @TypeGraphQL.Arg("paymentStatus", () => OrderStatus) status: OrderStatus,
    @TypeGraphQL.Ctx() ctx: MyContext
  ): Promise<User> {
    // Admin-only mutation
    this.checkAdminRole(ctx);

    try {
      const updatedPayment = await ctx.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          paymentStatus: status
        },
      });
      return updatedPayment;
    } catch (error) {
      throw new Error(`Failed to update purchase payment status: ${error}`);
    }
  }
}
