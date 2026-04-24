import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPurchasesInput } from "../inputs/UserUpdateWithoutPurchasesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutPurchasesInput", {})
export class UserUpdateToOneWithWhereWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPurchasesInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPurchasesInput;
}
