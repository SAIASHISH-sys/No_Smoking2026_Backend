import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchCountPurchasesArgs } from "./args/MerchCountPurchasesArgs";

@TypeGraphQL.ObjectType("MerchCount", {})
export class MerchCount {
  purchases!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "purchases",
    nullable: false
  })
  getPurchases(@TypeGraphQL.Root() root: MerchCount, @TypeGraphQL.Args() args: MerchCountPurchasesArgs): number {
    return root.purchases;
  }
}
