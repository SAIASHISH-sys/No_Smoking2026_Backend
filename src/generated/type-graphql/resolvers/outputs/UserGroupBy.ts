import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
import { OrderStatus } from "../../enums/OrderStatus";
import { role } from "../../enums/role";

@TypeGraphQL.ObjectType("UserGroupBy", {})
export class UserGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaignId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  googleId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobileNo!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dob!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age!: number | null;

  @TypeGraphQL.Field(_type => role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  qrtoken!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isVerified!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otp!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: false
  })
  paymentStatus!: "PENDING" | "COMPLETED" | "FAILED";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationrazorpayOrderId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  registrationrazorpayPaymentId!: string | null;

  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserAvgAggregate, {
    nullable: true
  })
  _avg!: UserAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserSumAggregate, {
    nullable: true
  })
  _sum!: UserSumAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
