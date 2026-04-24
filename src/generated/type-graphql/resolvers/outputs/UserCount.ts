import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountPurchasesArgs } from "./args/UserCountPurchasesArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  purchases!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "purchases",
    nullable: false
  })
  getPurchases(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPurchasesArgs): number {
    return root.purchases;
  }
}
