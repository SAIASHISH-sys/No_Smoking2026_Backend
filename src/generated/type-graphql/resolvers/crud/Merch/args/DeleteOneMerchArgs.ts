import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchWhereUniqueInput } from "../../../inputs/MerchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMerchArgs {
  @TypeGraphQL.Field(_type => MerchWhereUniqueInput, {
    nullable: false
  })
  where!: MerchWhereUniqueInput;
}
