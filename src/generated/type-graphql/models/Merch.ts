import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { UserPurchase } from "../models/UserPurchase";
import { MerchCount } from "../resolvers/outputs/MerchCount";

@TypeGraphQL.ObjectType("Merch", {})
export class Merch {
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

  purchases?: UserPurchase[];

  @TypeGraphQL.Field(_type => MerchCount, {
    nullable: true
  })
  _count?: MerchCount | null;
}
