import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationOrderByWithAggregationInput } from "../../../inputs/OTPVerificationOrderByWithAggregationInput";
import { OTPVerificationScalarWhereWithAggregatesInput } from "../../../inputs/OTPVerificationScalarWhereWithAggregatesInput";
import { OTPVerificationWhereInput } from "../../../inputs/OTPVerificationWhereInput";
import { OTPVerificationScalarFieldEnum } from "../../../../enums/OTPVerificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOTPVerificationArgs {
  @TypeGraphQL.Field(_type => OTPVerificationWhereInput, {
    nullable: true
  })
  where?: OTPVerificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OTPVerificationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"email" | "otp" | "createdAt">;

  @TypeGraphQL.Field(_type => OTPVerificationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OTPVerificationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
