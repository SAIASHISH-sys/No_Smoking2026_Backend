import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseScalarWhereInput } from "../inputs/UserPurchaseScalarWhereInput";
import { UserPurchaseUpdateManyMutationInput } from "../inputs/UserPurchaseUpdateManyMutationInput";

@TypeGraphQL.InputType("UserPurchaseUpdateManyWithWhereWithoutUserInput", {})
export class UserPurchaseUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserPurchaseScalarWhereInput, {
    nullable: false
  })
  where!: UserPurchaseScalarWhereInput;

  @TypeGraphQL.Field(_type => UserPurchaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserPurchaseUpdateManyMutationInput;
}
