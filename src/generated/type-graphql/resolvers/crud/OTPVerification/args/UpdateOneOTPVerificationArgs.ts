import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationUpdateInput } from "../../../inputs/OTPVerificationUpdateInput";
import { OTPVerificationWhereUniqueInput } from "../../../inputs/OTPVerificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOTPVerificationArgs {
  @TypeGraphQL.Field(_type => OTPVerificationUpdateInput, {
    nullable: false
  })
  data!: OTPVerificationUpdateInput;

  @TypeGraphQL.Field(_type => OTPVerificationWhereUniqueInput, {
    nullable: false
  })
  where!: OTPVerificationWhereUniqueInput;
}
