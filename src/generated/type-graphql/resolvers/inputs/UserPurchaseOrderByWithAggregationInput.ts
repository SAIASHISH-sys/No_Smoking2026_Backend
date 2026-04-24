import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserPurchaseAvgOrderByAggregateInput } from "../inputs/UserPurchaseAvgOrderByAggregateInput";
import { UserPurchaseCountOrderByAggregateInput } from "../inputs/UserPurchaseCountOrderByAggregateInput";
import { UserPurchaseMaxOrderByAggregateInput } from "../inputs/UserPurchaseMaxOrderByAggregateInput";
import { UserPurchaseMinOrderByAggregateInput } from "../inputs/UserPurchaseMinOrderByAggregateInput";
import { UserPurchaseSumOrderByAggregateInput } from "../inputs/UserPurchaseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserPurchaseOrderByWithAggregationInput", {})
export class UserPurchaseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  qty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  razorpayOrderId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  razorpayPaymentId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  merchId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  campaignId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserPurchaseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserPurchaseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserPurchaseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserPurchaseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserPurchaseSumOrderByAggregateInput | undefined;
}
