import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchCreateInput } from "../../../inputs/MerchCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMerchArgs {
  @TypeGraphQL.Field(_type => MerchCreateInput, {
    nullable: false
  })
  data!: MerchCreateInput;
}
