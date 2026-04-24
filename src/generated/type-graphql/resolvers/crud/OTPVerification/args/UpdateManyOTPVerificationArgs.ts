import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationUpdateManyMutationInput } from "../../../inputs/OTPVerificationUpdateManyMutationInput";
import { OTPVerificationWhereInput } from "../../../inputs/OTPVerificationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOTPVerificationArgs {
  @TypeGraphQL.Field(_type => OTPVerificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: OTPVerificationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OTPVerificationWhereInput, {
    nullable: true
  })
  where?: OTPVerificationWhereInput | undefined;
}
