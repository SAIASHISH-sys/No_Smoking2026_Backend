import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationCreateInput } from "../../../inputs/OTPVerificationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOTPVerificationArgs {
  @TypeGraphQL.Field(_type => OTPVerificationCreateInput, {
    nullable: false
  })
  data!: OTPVerificationCreateInput;
}
