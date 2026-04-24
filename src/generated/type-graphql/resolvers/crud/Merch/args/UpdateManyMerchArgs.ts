import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchUpdateManyMutationInput } from "../../../inputs/MerchUpdateManyMutationInput";
import { MerchWhereInput } from "../../../inputs/MerchWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMerchArgs {
  @TypeGraphQL.Field(_type => MerchUpdateManyMutationInput, {
    nullable: false
  })
  data!: MerchUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  where?: MerchWhereInput | undefined;
}
