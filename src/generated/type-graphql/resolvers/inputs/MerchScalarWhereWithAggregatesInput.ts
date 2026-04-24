import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MerchScalarWhereWithAggregatesInput", {})
export class MerchScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MerchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MerchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MerchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MerchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MerchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MerchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  price?: FloatWithAggregatesFilter | undefined;
}
