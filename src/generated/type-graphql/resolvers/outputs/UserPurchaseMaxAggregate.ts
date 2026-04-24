import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderStatus } from "../../enums/OrderStatus";

@TypeGraphQL.ObjectType("UserPurchaseMaxAggregate", {})
export class UserPurchaseMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  qty!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  size!: string | null;

  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: true
  })
  status!: "PENDING" | "COMPLETED" | "FAILED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayOrderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayPaymentId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  merchId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaignId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
