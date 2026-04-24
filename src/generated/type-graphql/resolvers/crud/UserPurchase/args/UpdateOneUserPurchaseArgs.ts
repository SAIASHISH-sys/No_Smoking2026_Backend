import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseUpdateInput } from "../../../inputs/UserPurchaseUpdateInput";
import { UserPurchaseWhereUniqueInput } from "../../../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserPurchaseArgs {
  @TypeGraphQL.Field(_type => UserPurchaseUpdateInput, {
    nullable: false
  })
  data!: UserPurchaseUpdateInput;

  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;
}
