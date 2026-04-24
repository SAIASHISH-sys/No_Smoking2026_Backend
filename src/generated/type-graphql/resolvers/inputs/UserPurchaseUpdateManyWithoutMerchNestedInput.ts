import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateManyMerchInputEnvelope } from "../inputs/UserPurchaseCreateManyMerchInputEnvelope";
import { UserPurchaseCreateOrConnectWithoutMerchInput } from "../inputs/UserPurchaseCreateOrConnectWithoutMerchInput";
import { UserPurchaseCreateWithoutMerchInput } from "../inputs/UserPurchaseCreateWithoutMerchInput";
import { UserPurchaseScalarWhereInput } from "../inputs/UserPurchaseScalarWhereInput";
import { UserPurchaseUpdateManyWithWhereWithoutMerchInput } from "../inputs/UserPurchaseUpdateManyWithWhereWithoutMerchInput";
import { UserPurchaseUpdateWithWhereUniqueWithoutMerchInput } from "../inputs/UserPurchaseUpdateWithWhereUniqueWithoutMerchInput";
import { UserPurchaseUpsertWithWhereUniqueWithoutMerchInput } from "../inputs/UserPurchaseUpsertWithWhereUniqueWithoutMerchInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseUpdateManyWithoutMerchNestedInput", {})
export class UserPurchaseUpdateManyWithoutMerchNestedInput {
  @TypeGraphQL.Field(_type => [UserPurchaseCreateWithoutMerchInput], {
    nullable: true
  })
  create?: UserPurchaseCreateWithoutMerchInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseCreateOrConnectWithoutMerchInput], {
    nullable: true
  })
  connectOrCreate?: UserPurchaseCreateOrConnectWithoutMerchInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseUpsertWithWhereUniqueWithoutMerchInput], {
    nullable: true
  })
  upsert?: UserPurchaseUpsertWithWhereUniqueWithoutMerchInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseCreateManyMerchInputEnvelope, {
    nullable: true
  })
  createMany?: UserPurchaseCreateManyMerchInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserPurchaseUpdateWithWhereUniqueWithoutMerchInput], {
    nullable: true
  })
  update?: UserPurchaseUpdateWithWhereUniqueWithoutMerchInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseUpdateManyWithWhereWithoutMerchInput], {
    nullable: true
  })
  updateMany?: UserPurchaseUpdateManyWithWhereWithoutMerchInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserPurchaseScalarWhereInput[] | undefined;
}
