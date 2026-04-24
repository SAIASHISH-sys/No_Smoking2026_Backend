import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchOrderByWithAggregationInput } from "../../../inputs/MerchOrderByWithAggregationInput";
import { MerchScalarWhereWithAggregatesInput } from "../../../inputs/MerchScalarWhereWithAggregatesInput";
import { MerchWhereInput } from "../../../inputs/MerchWhereInput";
import { MerchScalarFieldEnum } from "../../../../enums/MerchScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMerchArgs {
  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  where?: MerchWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MerchOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MerchOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MerchScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "price">;

  @TypeGraphQL.Field(_type => MerchScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MerchScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
