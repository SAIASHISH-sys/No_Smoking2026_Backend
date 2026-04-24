import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationWhereUniqueInput } from "../../../inputs/OTPVerificationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOTPVerificationOrThrowArgs {
  @TypeGraphQL.Field(_type => OTPVerificationWhereUniqueInput, {
    nullable: false
  })
  where!: OTPVerificationWhereUniqueInput;
}
