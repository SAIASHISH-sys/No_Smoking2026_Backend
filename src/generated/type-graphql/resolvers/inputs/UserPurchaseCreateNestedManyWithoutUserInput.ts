import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateManyUserInputEnvelope } from "../inputs/UserPurchaseCreateManyUserInputEnvelope";
import { UserPurchaseCreateOrConnectWithoutUserInput } from "../inputs/UserPurchaseCreateOrConnectWithoutUserInput";
import { UserPurchaseCreateWithoutUserInput } from "../inputs/UserPurchaseCreateWithoutUserInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseCreateNestedManyWithoutUserInput", {})
export class UserPurchaseCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserPurchaseCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserPurchaseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserPurchaseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserPurchaseCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: UserPurchaseWhereUniqueInput[] | undefined;
}
