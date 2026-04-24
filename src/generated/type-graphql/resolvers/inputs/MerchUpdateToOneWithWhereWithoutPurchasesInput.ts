import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchUpdateWithoutPurchasesInput } from "../inputs/MerchUpdateWithoutPurchasesInput";
import { MerchWhereInput } from "../inputs/MerchWhereInput";

@TypeGraphQL.InputType("MerchUpdateToOneWithWhereWithoutPurchasesInput", {})
export class MerchUpdateToOneWithWhereWithoutPurchasesInput {
  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  where?: MerchWhereInput | undefined;

  @TypeGraphQL.Field(_type => MerchUpdateWithoutPurchasesInput, {
    nullable: false
  })
  data!: MerchUpdateWithoutPurchasesInput;
}
