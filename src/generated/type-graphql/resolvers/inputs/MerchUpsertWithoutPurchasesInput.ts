import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchCreateWithoutPurchasesInput } from "../inputs/MerchCreateWithoutPurchasesInput";
import { MerchUpdateWithoutPurchasesInput } from "../inputs/MerchUpdateWithoutPurchasesInput";
import { MerchWhereInput } from "../inputs/MerchWhereInput";

@TypeGraphQL.InputType("MerchUpsertWithoutPurchasesInput", {})
export class MerchUpsertWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => MerchUpdateWithoutPurchasesInput, {
    nullable: false
  })
  update!: MerchUpdateWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => MerchCreateWithoutPurchasesInput, {
    nullable: false
  })
  create!: MerchCreateWithoutPurchasesInput;

  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  where?: MerchWhereInput | undefined;
}
