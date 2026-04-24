import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateWithoutMerchInput } from "../inputs/UserPurchaseCreateWithoutMerchInput";
import { UserPurchaseUpdateWithoutMerchInput } from "../inputs/UserPurchaseUpdateWithoutMerchInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseUpsertWithWhereUniqueWithoutMerchInput", {})
export class UserPurchaseUpsertWithWhereUniqueWithoutMerchInput {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPurchaseUpdateWithoutMerchInput, {
    nullable: false
  })
  update!: UserPurchaseUpdateWithoutMerchInput;

  @TypeGraphQL.Field(_type => UserPurchaseCreateWithoutMerchInput, {
    nullable: false
  })
  create!: UserPurchaseCreateWithoutMerchInput;
}
