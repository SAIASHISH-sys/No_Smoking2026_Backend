import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchOrderByWithRelationInput } from "../../../inputs/MerchOrderByWithRelationInput";
import { MerchWhereInput } from "../../../inputs/MerchWhereInput";
import { MerchWhereUniqueInput } from "../../../inputs/MerchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMerchArgs {
  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  where?: MerchWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MerchOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MerchOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MerchWhereUniqueInput, {
    nullable: true
  })
  cursor?: MerchWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
