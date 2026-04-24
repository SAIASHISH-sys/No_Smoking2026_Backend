import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchCreateInput } from "../../../inputs/MerchCreateInput";
import { MerchUpdateInput } from "../../../inputs/MerchUpdateInput";
import { MerchWhereUniqueInput } from "../../../inputs/MerchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMerchArgs {
  @TypeGraphQL.Field(_type => MerchWhereUniqueInput, {
    nullable: false
  })
  where!: MerchWhereUniqueInput;

  @TypeGraphQL.Field(_type => MerchCreateInput, {
    nullable: false
  })
  create!: MerchCreateInput;

  @TypeGraphQL.Field(_type => MerchUpdateInput, {
    nullable: false
  })
  update!: MerchUpdateInput;
}
