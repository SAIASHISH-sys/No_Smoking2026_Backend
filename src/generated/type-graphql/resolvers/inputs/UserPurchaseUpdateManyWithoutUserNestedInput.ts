import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateManyUserInputEnvelope } from "../inputs/UserPurchaseCreateManyUserInputEnvelope";
import { UserPurchaseCreateOrConnectWithoutUserInput } from "../inputs/UserPurchaseCreateOrConnectWithoutUserInput";
import { UserPurchaseCreateWithoutUserInput } from "../inputs/UserPurchaseCreateWithoutUserInput";
import { UserPurchaseScalarWhereInput } from "../inputs/UserPurchaseScalarWhereInput";
import { UserPurchaseUpdateManyWithWhereWithoutUserInput } from "../inputs/UserPurchaseUpdateManyWithWhereWithoutUserInput";
import { UserPurchaseUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserPurchaseUpdateWithWhereUniqueWithoutUserInput";
import { UserPurchaseUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserPurchaseUpsertWithWhereUniqueWithoutUserInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseUpdateManyWithoutUserNestedInput", {})
export class UserPurchaseUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserPurchaseCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserPurchaseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserPurchaseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserPurchaseUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserPurchaseCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereUniqueInput], {
    nullable: true
  })
  set?: UserPurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserPurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereUniqueInput], {
    nullable: true
  })
  delete?: UserPurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: UserPurchaseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserPurchaseUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserPurchaseUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserPurchaseScalarWhereInput[] | undefined;
}
