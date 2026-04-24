import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseWhereInput } from "../inputs/UserPurchaseWhereInput";

@TypeGraphQL.InputType("UserPurchaseListRelationFilter", {})
export class UserPurchaseListRelationFilter {
  @TypeGraphQL.Field(_type => UserPurchaseWhereInput, {
    nullable: true
  })
  every?: UserPurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseWhereInput, {
    nullable: true
  })
  some?: UserPurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseWhereInput, {
    nullable: true
  })
  none?: UserPurchaseWhereInput | undefined;
}
