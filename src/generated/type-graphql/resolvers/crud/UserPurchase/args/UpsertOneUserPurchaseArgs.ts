import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseCreateInput } from "../../../inputs/UserPurchaseCreateInput";
import { UserPurchaseUpdateInput } from "../../../inputs/UserPurchaseUpdateInput";
import { UserPurchaseWhereUniqueInput } from "../../../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserPurchaseArgs {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserPurchaseCreateInput, {
    nullable: false
  })
  create!: UserPurchaseCreateInput;

  @TypeGraphQL.Field(_type => UserPurchaseUpdateInput, {
    nullable: false
  })
  update!: UserPurchaseUpdateInput;
}
