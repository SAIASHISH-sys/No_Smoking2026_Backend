import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchUpdateInput } from "../../../inputs/MerchUpdateInput";
import { MerchWhereUniqueInput } from "../../../inputs/MerchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMerchArgs {
  @TypeGraphQL.Field(_type => MerchUpdateInput, {
    nullable: false
  })
  data!: MerchUpdateInput;

  @TypeGraphQL.Field(_type => MerchWhereUniqueInput, {
    nullable: false
  })
  where!: MerchWhereUniqueInput;
}
