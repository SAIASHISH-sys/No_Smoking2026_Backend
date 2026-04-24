import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumOrderStatusWithAggregatesFilter } from "../inputs/EnumOrderStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserPurchaseScalarWhereWithAggregatesInput", {})
export class UserPurchaseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserPurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserPurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserPurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserPurchaseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  qty?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  size?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumOrderStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumOrderStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  razorpayOrderId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  razorpayPaymentId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  merchId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  campaignId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
