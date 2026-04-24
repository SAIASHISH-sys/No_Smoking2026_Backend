import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateManyUserInput } from "../inputs/UserPurchaseCreateManyUserInput";

@TypeGraphQL.InputType("UserPurchaseCreateManyUserInputEnvelope", {})
export class UserPurchaseCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserPurchaseCreateManyUserInput], {
    nullable: false
  })
  data!: UserPurchaseCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
