import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OTPVerificationCountOrderByAggregateInput } from "../inputs/OTPVerificationCountOrderByAggregateInput";
import { OTPVerificationMaxOrderByAggregateInput } from "../inputs/OTPVerificationMaxOrderByAggregateInput";
import { OTPVerificationMinOrderByAggregateInput } from "../inputs/OTPVerificationMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OTPVerificationOrderByWithAggregationInput", {})
export class OTPVerificationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  otp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OTPVerificationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OTPVerificationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OTPVerificationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OTPVerificationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OTPVerificationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OTPVerificationMinOrderByAggregateInput | undefined;
}
