import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseWhereInput } from "../../inputs/UserPurchaseWhereInput";

@TypeGraphQL.ArgsType()
export class MerchCountPurchasesArgs {
  @TypeGraphQL.Field(_type => UserPurchaseWhereInput, {
    nullable: true
  })
  where?: UserPurchaseWhereInput | undefined;
}
