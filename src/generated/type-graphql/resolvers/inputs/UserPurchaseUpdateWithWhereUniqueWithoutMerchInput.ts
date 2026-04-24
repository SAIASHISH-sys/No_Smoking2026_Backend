import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseUpdateWithoutMerchInput } from "../inputs/UserPurchaseUpdateWithoutMerchInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseUpdateWithWhereUniqueWithoutMerchInput", {})
export class UserPurchaseUpdateWithWhereUniqueWithoutMerchInput {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPurchaseUpdateWithoutMerchInput, {
    nullable: false
  })
  data!: UserPurchaseUpdateWithoutMerchInput;
}
