import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Merch } from "../models/Merch";
import { User } from "../models/User";
import { OrderStatus } from "../enums/OrderStatus";

@TypeGraphQL.ObjectType("UserPurchase", {})
export class UserPurchase {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  qty!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  size!: string;

  @TypeGraphQL.Field(_type => OrderStatus, {
    nullable: false
  })
  status!: "PENDING" | "COMPLETED" | "FAILED";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayOrderId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  razorpayPaymentId?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  merchId!: number;

  merch?: Merch;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaignId?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
