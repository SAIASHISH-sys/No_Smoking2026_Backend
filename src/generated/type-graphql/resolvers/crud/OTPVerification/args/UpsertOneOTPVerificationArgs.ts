import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationCreateInput } from "../../../inputs/OTPVerificationCreateInput";
import { OTPVerificationUpdateInput } from "../../../inputs/OTPVerificationUpdateInput";
import { OTPVerificationWhereUniqueInput } from "../../../inputs/OTPVerificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOTPVerificationArgs {
  @TypeGraphQL.Field(_type => OTPVerificationWhereUniqueInput, {
    nullable: false
  })
  where!: OTPVerificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => OTPVerificationCreateInput, {
    nullable: false
  })
  create!: OTPVerificationCreateInput;

  @TypeGraphQL.Field(_type => OTPVerificationUpdateInput, {
    nullable: false
  })
  update!: OTPVerificationUpdateInput;
}
