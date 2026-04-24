import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OTPVerificationOrderByWithRelationInput } from "../../../inputs/OTPVerificationOrderByWithRelationInput";
import { OTPVerificationWhereInput } from "../../../inputs/OTPVerificationWhereInput";
import { OTPVerificationWhereUniqueInput } from "../../../inputs/OTPVerificationWhereUniqueInput";
import { OTPVerificationScalarFieldEnum } from "../../../../enums/OTPVerificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOTPVerificationOrThrowArgs {
  @TypeGraphQL.Field(_type => OTPVerificationWhereInput, {
    nullable: true
  })
  where?: OTPVerificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OTPVerificationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OTPVerificationWhereUniqueInput, {
    nullable: true
  })
  cursor?: OTPVerificationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"email" | "otp" | "createdAt"> | undefined;
}
