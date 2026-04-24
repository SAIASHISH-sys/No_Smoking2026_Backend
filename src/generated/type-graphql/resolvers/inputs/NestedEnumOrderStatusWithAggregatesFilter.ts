import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumOrderStatusFilter } from "../inputs/NestedEnumOrderStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { OrderStatus } from "../../enums/OrderStatus";

@TypeGraphQL.InputType("NestedEnumOrderStatusWithAggregatesFilter", {})
export class NestedEnumOrderStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumOrderStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumOrderStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOrderStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumOrderStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOrderStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumOrderStatusFilter | undefined;
}
