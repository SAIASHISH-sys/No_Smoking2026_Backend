import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserPurchaseUpdateManyWithoutMerchNestedInput } from "../inputs/UserPurchaseUpdateManyWithoutMerchNestedInput";

@TypeGraphQL.InputType("MerchUpdateInput", {})
export class MerchUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseUpdateManyWithoutMerchNestedInput, {
    nullable: true
  })
  purchases?: UserPurchaseUpdateManyWithoutMerchNestedInput | undefined;
}
