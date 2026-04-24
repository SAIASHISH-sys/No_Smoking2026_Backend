import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseAvgAggregate } from "../outputs/UserPurchaseAvgAggregate";
import { UserPurchaseCountAggregate } from "../outputs/UserPurchaseCountAggregate";
import { UserPurchaseMaxAggregate } from "../outputs/UserPurchaseMaxAggregate";
import { UserPurchaseMinAggregate } from "../outputs/UserPurchaseMinAggregate";
import { UserPurchaseSumAggregate } from "../outputs/UserPurchaseSumAggregate";

@TypeGraphQL.ObjectType("AggregateUserPurchase", {})
export class AggregateUserPurchase {
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
