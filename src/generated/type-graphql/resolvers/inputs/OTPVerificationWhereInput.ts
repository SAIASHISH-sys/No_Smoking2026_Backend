import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OTPVerificationWhereInput", {})
export class OTPVerificationWhereInput {
  @TypeGraphQL.Field(_type => [OTPVerificationWhereInput], {
    nullable: true
  })
  AND?: OTPVerificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationWhereInput], {
    nullable: true
  })
  OR?: OTPVerificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OTPVerificationWhereInput], {
    nullable: true
  })
  NOT?: OTPVerificationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  otp?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
