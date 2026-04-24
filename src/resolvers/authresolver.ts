import { Resolver, Mutation, Query, Arg, Ctx } from "type-graphql";
import { prisma } from "../db";
import { User } from "../generated/type-graphql";
import { OrderStatus } from "../generated/type-graphql/enums/OrderStatus";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { MyContext } from "../types/Context";
import { sendOtpMail, sendWelcomeMail } from "../utils/mailer";
import { LoginInput, SignUpInput, SignUpOutput } from "../types/authtypes";

const JWT_SECRET = process.env.JWT_SECRET || "jangkunlee";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

@Resolver()
export class AuthResolver {
  private checkAdminRole(ctx: MyContext): void {
    if (!ctx.user || ctx.user.role !== "ADMIN") {
      throw new Error("Forbidden: Admin role required");
    }
  }

  @Query(() => [User], { nullable: false })
  async getAllUsers(@Ctx() ctx: MyContext): Promise<User[]> {
    this.checkAdminRole(ctx);
    const users = await ctx.prisma.user.findMany({
      include: { purchases: { include: { merch: true } } },
      orderBy: { createdAt: "desc" },
    });
    return users as unknown as User[];
  }

  @Mutation(() => User, { nullable: false })
  async updateUserPaymentStatus(
    @Arg("userId") userId: number,
    @Arg("status", () => OrderStatus) status: OrderStatus,
    @Ctx() ctx: MyContext
  ): Promise<User> {
    this.checkAdminRole(ctx);
    return ctx.prisma.user.update({
      where: { id: userId },
      data: { paymentStatus: status },
    });
  }

  // STEP 1: Send OTP (User doesn't exist yet)
  @Mutation(() => Boolean)
  async sendVerificationOtp(@Arg("email") email: string) {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) throw new Error("Email already registered");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.oTPVerification.upsert({
      where: { email },
      update: { otp, createdAt: new Date() },
      create: { email, otp }
    });

    await sendOtpMail(email, otp);
    return true;
  }

  // STEP 2: Verify OTP and return a temporary "Proof of Verification" Token
  @Mutation(() => String)
  async verifyOtp(@Arg("email") email: string, @Arg("otp") otp: string) {
    const record = await prisma.oTPVerification.findUnique({ where: { email } });
    if (!record || record.otp !== otp) throw new Error("Invalid OTP");

    await prisma.oTPVerification.delete({ where: { email } });

    // This token tells the signup mutation that this email is "verified"
    return jwt.sign({ email, verified: true }, JWT_SECRET, { expiresIn: '15m' });
  }

  // STEP 3: Final Registration using the token from Step 2
  @Mutation(() => SignUpOutput)
  async signUpUser(
    @Arg("data") data: SignUpInput,
    @Arg("verificationToken") verificationToken: string,
    @Ctx() { res }: MyContext
  ) {
    const decoded: any = jwt.verify(verificationToken, JWT_SECRET);
    if (decoded.email !== data.email) throw new Error("Token mismatch");

    const hashedPassword = await bcrypt.hash(data.password, 12);
    const count = await prisma.user.count();
    const campaignId = `SHA26FF${(count + 1).toString().padStart(5, '0')}`;

    // Check if this is an admin registration
    const isAdmin = data.email === ADMIN_EMAIL && data.password === ADMIN_PASSWORD;
    const role = isAdmin ? "ADMIN" : "USER";

    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        campaignId,
        role,
        isVerified: true,
        qrtoken: randomUUID()
      }
    });

    await sendWelcomeMail(user.email, user.name);

    const token = jwt.sign({ id: user.id, email: user.email, role }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

    return { token, role , user};
  }

  @Mutation(() => User)
  async login(@Arg("data") data: LoginInput, @Ctx() { res }: MyContext) {
     const user = await prisma.user.findUnique({ where: { email: data.email }});
     if(!user) throw new Error("User not found");
     
     if(!user.password) throw new Error("Please login with Google or set a password");
     
     const valid = await bcrypt.compare(data.password, user.password);
     if(!valid) throw new Error("Wrong password");

     const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
     res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
     return user;
  }
}

