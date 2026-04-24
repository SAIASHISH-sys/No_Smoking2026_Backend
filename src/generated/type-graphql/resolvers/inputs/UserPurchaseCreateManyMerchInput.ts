import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderStatus } from "../../enums/OrderStatus";

@TypeGraphQL.InputType("UserPurchaseCreateManyMerchInput", {})
export class UserPurchaseCreateManyMerchInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  qty!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  size!: string;

  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: true
  })
  status?: "PENDING" | "COMPLETED" | "FAILED" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayOrderId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayPaymentId?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaignId?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
