import * as TypeGraphQL from "type-graphql";

export enum role {
  USER = "USER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(role, {
  name: "role",
  description: undefined,
});
