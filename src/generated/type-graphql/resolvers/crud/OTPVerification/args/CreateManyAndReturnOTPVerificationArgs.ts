import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationCreateManyInput } from "../../../inputs/OTPVerificationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnOTPVerificationArgs {
  @TypeGraphQL.Field(_type => [OTPVerificationCreateManyInput], {
    nullable: false
  })
  data!: OTPVerificationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
