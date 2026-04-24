import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateNestedManyWithoutUserInput } from "../inputs/UserPurchaseCreateNestedManyWithoutUserInput";
import { OrderStatus } from "../../enums/OrderStatus";
import { role } from "../../enums/role";

@TypeGraphQL.InputType("UserCreateInput", {})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaignId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  googleId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobileNo?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dob?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age?: number | undefined;

  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  qrtoken?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otp?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: true
  })
  paymentStatus?: "PENDING" | "COMPLETED" | "FAILED" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationrazorpayOrderId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationrazorpayPaymentId?: string | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  purchases?: UserPurchaseCreateNestedManyWithoutUserInput | undefined;
}
