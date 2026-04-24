import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumOrderStatusFilter } from "../inputs/NestedEnumOrderStatusFilter";
import { OrderStatus } from "../../enums/OrderStatus";

@TypeGraphQL.InputType("EnumOrderStatusFilter", {})
export class EnumOrderStatusFilter {
  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: true
  })
  equals?: "PENDING" | "COMPLETED" | "FAILED" | undefined;

  @TypeGraphQL.Field(_type => [OrderStatus], {
    nullable: true
  })
  in?: Array<"PENDING" | "COMPLETED" | "FAILED"> | undefined;

  @TypeGraphQL.Field(_type => [OrderStatus], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "COMPLETED" | "FAILED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOrderStatusFilter, {
    nullable: true
  })
  not?: NestedEnumOrderStatusFilter | undefined;
}
