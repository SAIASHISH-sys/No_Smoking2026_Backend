import * as TypeGraphQL from "type-graphql";

export enum OrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED"
}
TypeGraphQL.registerEnumType(OrderStatus, {
  name: "OrderStatus",
  description: undefined,
});
