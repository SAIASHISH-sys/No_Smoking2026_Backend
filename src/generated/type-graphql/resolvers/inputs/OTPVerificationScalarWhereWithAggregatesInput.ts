import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OTPVerificationScalarWhereWithAggregatesInput", {})
export class OTPVerificationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OTPVerificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OTPVerificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OTPVerificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OTPVerificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  otp?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
