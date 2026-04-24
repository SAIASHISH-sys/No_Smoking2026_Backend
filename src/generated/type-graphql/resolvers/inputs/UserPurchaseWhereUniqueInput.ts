import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumOrderStatusFilter } from "../inputs/EnumOrderStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MerchRelationFilter } from "../inputs/MerchRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserPurchaseWhereInput } from "../inputs/UserPurchaseWhereInput";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserPurchaseWhereUniqueInput", {})
export class UserPurchaseWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayOrderId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayPaymentId?: string | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereInput], {
    nullable: true
  })
  AND?: UserPurchaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereInput], {
    nullable: true
  })
  OR?: UserPurchaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseWhereInput], {
    nullable: true
  })
  NOT?: UserPurchaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  qty?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  size?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumOrderStatusFilter, {
    nullable: true
  })
  status?: EnumOrderStatusFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  merchId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  campaignId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MerchRelationFilter, {
    nullable: true
  })
  merch?: MerchRelationFilter | undefined;
}
