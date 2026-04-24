import * as TypeGraphQL from "type-graphql";

export enum MerchScalarFieldEnum {
  id = "id",
  name = "name",
  price = "price"
}
TypeGraphQL.registerEnumType(MerchScalarFieldEnum, {
  name: "MerchScalarFieldEnum",
  description: undefined,
});
