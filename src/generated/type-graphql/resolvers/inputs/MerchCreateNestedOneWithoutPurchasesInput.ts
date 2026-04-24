import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchCreateOrConnectWithoutPurchasesInput } from "../inputs/MerchCreateOrConnectWithoutPurchasesInput";
import { MerchCreateWithoutPurchasesInput } from "../inputs/MerchCreateWithoutPurchasesInput";
import { MerchWhereUniqueInput } from "../inputs/MerchWhereUniqueInput";

@TypeGraphQL.InputType("MerchCreateNestedOneWithoutPurchasesInput", {})
export class MerchCreateNestedOneWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => MerchCreateWithoutPurchasesInput, {
    nullable: true
  })
  create?: MerchCreateWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => MerchCreateOrConnectWithoutPurchasesInput, {
    nullable: true
  })
  connectOrCreate?: MerchCreateOrConnectWithoutPurchasesInput | undefined;

  @TypeGraphQL.Field(_type => MerchWhereUniqueInput, {
    nullable: true
  })
  connect?: MerchWhereUniqueInput | undefined;
}
