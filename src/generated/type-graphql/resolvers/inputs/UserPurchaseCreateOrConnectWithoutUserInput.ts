import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateWithoutUserInput } from "../inputs/UserPurchaseCreateWithoutUserInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseCreateOrConnectWithoutUserInput", {})
export class UserPurchaseCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPurchaseCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserPurchaseCreateWithoutUserInput;
}
