import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseWhereUniqueInput } from "../../../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserPurchaseOrThrowArgs {
  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: false
  })
  where!: UserPurchaseWhereUniqueInput;
}
