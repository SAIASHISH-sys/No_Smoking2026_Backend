import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPurchasesInput } from "../inputs/UserCreateWithoutPurchasesInput";
import { UserUpdateWithoutPurchasesInput } from "../inputs/UserUpdateWithoutPurchasesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPurchasesInput", {})
export class UserUpsertWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPurchasesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: UserCreateWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
