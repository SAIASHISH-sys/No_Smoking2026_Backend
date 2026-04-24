import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderStatus } from "../../enums/OrderStatus";
import { role } from "../../enums/role";

@TypeGraphQL.ObjectType("UserMaxAggregate", {})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaignId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  googleId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobileNo!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dob!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age!: number | null;

  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  role!: "USER" | "ADMIN" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  qrtoken!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isVerified!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otp!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: true
  })
  paymentStatus!: "PENDING" | "COMPLETED" | "FAILED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationrazorpayOrderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationrazorpayPaymentId!: string | null;
}
