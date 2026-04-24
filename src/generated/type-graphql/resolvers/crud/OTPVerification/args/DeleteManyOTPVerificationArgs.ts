import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationWhereInput } from "../../../inputs/OTPVerificationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOTPVerificationArgs {
  @TypeGraphQL.Field(_type => OTPVerificationWhereInput, {
    nullable: true
  })
  where?: OTPVerificationWhereInput | undefined;
}
