import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateManyMerchInput } from "../inputs/UserPurchaseCreateManyMerchInput";

@TypeGraphQL.InputType("UserPurchaseCreateManyMerchInputEnvelope", {})
export class UserPurchaseCreateManyMerchInputEnvelope {
  @TypeGraphQL.Field(_type => [UserPurchaseCreateManyMerchInput], {
    nullable: false
  })
  data!: UserPurchaseCreateManyMerchInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
