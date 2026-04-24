import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchCreateWithoutPurchasesInput } from "../inputs/MerchCreateWithoutPurchasesInput";
import { MerchWhereUniqueInput } from "../inputs/MerchWhereUniqueInput";

@TypeGraphQL.InputType("MerchCreateOrConnectWithoutPurchasesInput", {})
export class MerchCreateOrConnectWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => MerchWhereUniqueInput, {
    nullable: false
  })
  where!: MerchWhereUniqueInput;

  @TypeGraphQL.Field(_type => MerchCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: MerchCreateWithoutPurchasesInput;
}
