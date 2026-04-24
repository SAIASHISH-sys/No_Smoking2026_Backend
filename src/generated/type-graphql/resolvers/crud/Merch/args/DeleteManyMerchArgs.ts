import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchWhereInput } from "../../../inputs/MerchWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMerchArgs {
  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  where?: MerchWhereInput | undefined;
}
