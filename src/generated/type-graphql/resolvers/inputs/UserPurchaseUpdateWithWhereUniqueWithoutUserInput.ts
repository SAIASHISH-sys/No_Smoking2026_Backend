import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseUpdateWithoutUserInput } from "../inputs/UserPurchaseUpdateWithoutUserInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseUpdateWithWhereUniqueWithoutUserInput", {})
export class UserPurchaseUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPurchaseUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserPurchaseUpdateWithoutUserInput;
}
