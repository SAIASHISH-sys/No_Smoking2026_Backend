import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateWithoutMerchInput } from "../inputs/UserPurchaseCreateWithoutMerchInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseCreateOrConnectWithoutMerchInput", {})
export class UserPurchaseCreateOrConnectWithoutMerchInput {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPurchaseCreateWithoutMerchInput, {
    nullable: false
  })
  create!: UserPurchaseCreateWithoutMerchInput;
}
