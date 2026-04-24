import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OTPVerificationCountAggregate } from "../outputs/OTPVerificationCountAggregate";
import { OTPVerificationMaxAggregate } from "../outputs/OTPVerificationMaxAggregate";
import { OTPVerificationMinAggregate } from "../outputs/OTPVerificationMinAggregate";

@TypeGraphQL.ObjectType("AggregateOTPVerification", {})
export class AggregateOTPVerification {
  @TypeGraphQL.Field(_type => OTPVerificationCountAggregate, {
    nullable: true
  })
  _count!: OTPVerificationCountAggregate | null;

  @TypeGraphQL.Field(_type => OTPVerificationMinAggregate, {
    nullable: true
  })
  _min!: OTPVerificationMinAggregate | null;

  @TypeGraphQL.Field(_type => OTPVerificationMaxAggregate, {
    nullable: true
  })
  _max!: OTPVerificationMaxAggregate | null;
}
