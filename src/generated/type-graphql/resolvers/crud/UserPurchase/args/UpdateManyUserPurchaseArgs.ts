import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseUpdateManyMutationInput } from "../../../inputs/UserPurchaseUpdateManyMutationInput";
import { UserPurchaseWhereInput } from "../../../inputs/UserPurchaseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserPurchaseArgs {
  @TypeGraphQL.Field(_type => UserPurchaseUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserPurchaseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserPurchaseWhereInput, {
    nullable: true
  })
  where?: UserPurchaseWhereInput | undefined;
}
