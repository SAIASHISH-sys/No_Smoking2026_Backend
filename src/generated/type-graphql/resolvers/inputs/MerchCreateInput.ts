import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserPurchaseCreateNestedManyWithoutMerchInput } from "../inputs/UserPurchaseCreateNestedManyWithoutMerchInput";

@TypeGraphQL.InputType("MerchCreateInput", {})
export class MerchCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => UserPurchaseCreateNestedManyWithoutMerchInput, {
    nullable: true
  })
  purchases?: UserPurchaseCreateNestedManyWithoutMerchInput | undefined;
}
