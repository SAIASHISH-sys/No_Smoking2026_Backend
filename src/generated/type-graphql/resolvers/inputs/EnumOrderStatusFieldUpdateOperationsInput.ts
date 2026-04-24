import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderStatus } from "../../enums/OrderStatus";

@TypeGraphQL.InputType("EnumOrderStatusFieldUpdateOperationsInput", {})
export class EnumOrderStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: true
  })
  set?: "PENDING" | "COMPLETED" | "FAILED" | undefined;
}
