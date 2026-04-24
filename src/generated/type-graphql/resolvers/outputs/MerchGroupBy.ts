import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchAvgAggregate } from "../outputs/MerchAvgAggregate";
import { MerchCountAggregate } from "../outputs/MerchCountAggregate";
import { MerchMaxAggregate } from "../outputs/MerchMaxAggregate";
import { MerchMinAggregate } from "../outputs/MerchMinAggregate";
import { MerchSumAggregate } from "../outputs/MerchSumAggregate";

@TypeGraphQL.ObjectType("MerchGroupBy", {})
export class MerchGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => MerchCountAggregate, {
    nullable: true
  })
  _count!: MerchCountAggregate | null;

  @TypeGraphQL.Field(_type => MerchAvgAggregate, {
    nullable: true
  })
  _avg!: MerchAvgAggregate | null;

  @TypeGraphQL.Field(_type => MerchSumAggregate, {
    nullable: true
  })
  _sum!: MerchSumAggregate | null;

  @TypeGraphQL.Field(_type => MerchMinAggregate, {
    nullable: true
  })
  _min!: MerchMinAggregate | null;

  @TypeGraphQL.Field(_type => MerchMaxAggregate, {
    nullable: true
  })
  _max!: MerchMaxAggregate | null;
}
