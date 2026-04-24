import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateManyMerchInputEnvelope } from "../inputs/UserPurchaseCreateManyMerchInputEnvelope";
import { UserPurchaseCreateOrConnectWithoutMerchInput } from "../inputs/UserPurchaseCreateOrConnectWithoutMerchInput";
import { UserPurchaseCreateWithoutMerchInput } from "../inputs/UserPurchaseCreateWithoutMerchInput";
import { UserPurchaseWhereUniqueInput } from "../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.InputType("UserPurchaseCreateNestedManyWithoutMerchInput", {})
export class UserPurchaseCreateNestedManyWithoutMerchInput {
  @TypeGraphQL.Field(_type => [UserPurchaseCreateWithoutMerchInput], {
    nullable: true
  })
  create?: UserPurchaseCreateWithoutMerchInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseCreateOrConnectWithoutMerchInput], {
    nullable: true
  })
  connectOrCreate?: UserPurchaseCreateOrConnectWithoutMerchInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseCreateManyMerchInputEnvelope, {
    nullable: true
  })
  createMany?: UserPurchaseCreateManyMerchInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereUniqueInput], {
    nullable: true
  })
  connect?: UserPurchaseWhereUniqueInput[] | undefined;
}
