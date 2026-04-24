import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseAvgAggregate } from "../outputs/UserPurchaseAvgAggregate";
import { UserPurchaseCountAggregate } from "../outputs/UserPurchaseCountAggregate";
import { UserPurchaseMaxAggregate } from "../outputs/UserPurchaseMaxAggregate";
import { UserPurchaseMinAggregate } from "../outputs/UserPurchaseMinAggregate";
import { UserPurchaseSumAggregate } from "../outputs/UserPurchaseSumAggregate";
import { OrderStatus } from "../../enums/OrderStatus";

@TypeGraphQL.ObjectType("UserPurchaseGroupBy", {})
export class UserPurchaseGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  qty!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  size!: string;

  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: false
  })
  status!: "PENDING" | "COMPLETED" | "FAILED";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayOrderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayPaymentId!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  merchId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaignId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => UserPurchaseCountAggregate, {
    nullable: true
  })
  _count!: UserPurchaseCountAggregate | null;

  @TypeGraphQL.Field(_type => UserPurchaseAvgAggregate, {
    nullable: true
  })
  _avg!: UserPurchaseAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserPurchaseSumAggregate, {
    nullable: true
  })
  _sum!: UserPurchaseSumAggregate | null;

  @TypeGraphQL.Field(_type => UserPurchaseMinAggregate, {
    nullable: true
  })
  _min!: UserPurchaseMinAggregate | null;

  @TypeGraphQL.Field(_type => UserPurchaseMaxAggregate, {
    nullable: true
  })
  _max!: UserPurchaseMaxAggregate | null;
}
