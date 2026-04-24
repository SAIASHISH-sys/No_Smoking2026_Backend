import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MerchWhereInput } from "../inputs/MerchWhereInput";

@TypeGraphQL.InputType("MerchRelationFilter", {})
export class MerchRelationFilter {
  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  is?: MerchWhereInput | undefined;

  @TypeGraphQL.Field(_type => MerchWhereInput, {
    nullable: true
  })
  isNot?: MerchWhereInput | undefined;
}
