import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateWithoutUserInput } from "../inputs/UserPurchaseCreateWithoutUserInput";
import { UserPurchaseUpdateWithoutUserInput } from "../inputs/UserPurchaseUpdateWithoutUserInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseUpsertWithWhereUniqueWithoutUserInput", {})
export class UserPurchaseUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPurchaseUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserPurchaseUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserPurchaseCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserPurchaseCreateWithoutUserInput;
}
