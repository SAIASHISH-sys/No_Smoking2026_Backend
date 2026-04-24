import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseCreateInput } from "../../../inputs/UserPurchaseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserPurchaseArgs {
  @TypeGraphQL.Field(_type => UserPurchaseCreateInput, {
    nullable: false
  })
  data!: UserPurchaseCreateInput;
}
