import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchAvgOrderByAggregateInput } from "../inputs/MerchAvgOrderByAggregateInput";
import { MerchCountOrderByAggregateInput } from "../inputs/MerchCountOrderByAggregateInput";
import { MerchMaxOrderByAggregateInput } from "../inputs/MerchMaxOrderByAggregateInput";
import { MerchMinOrderByAggregateInput } from "../inputs/MerchMinOrderByAggregateInput";
import { MerchSumOrderByAggregateInput } from "../inputs/MerchSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MerchOrderByWithAggregationInput", {})
export class MerchOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MerchCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MerchCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MerchAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MerchAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MerchMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MerchMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MerchMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MerchMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MerchSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MerchSumOrderByAggregateInput | undefined;
}
