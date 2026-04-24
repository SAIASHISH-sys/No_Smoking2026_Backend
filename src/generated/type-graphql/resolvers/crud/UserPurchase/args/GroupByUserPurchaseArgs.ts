import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseOrderByWithAggregationInput } from "../../../inputs/UserPurchaseOrderByWithAggregationInput";
import { UserPurchaseScalarWhereWithAggregatesInput } from "../../../inputs/UserPurchaseScalarWhereWithAggregatesInput";
import { UserPurchaseWhereInput } from "../../../inputs/UserPurchaseWhereInput";
import { UserPurchaseScalarFieldEnum } from "../../../../enums/UserPurchaseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserPurchaseArgs {
  @TypeGraphQL.Field(_type => UserPurchaseWhereInput, {
    nullable: true
  })
  where?: UserPurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserPurchaseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "qty" | "size" | "status" | "razorpayOrderId" | "razorpayPaymentId" | "userId" | "merchId" | "campaignId" | "createdAt">;

  @TypeGraphQL.Field(_type => UserPurchaseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserPurchaseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
