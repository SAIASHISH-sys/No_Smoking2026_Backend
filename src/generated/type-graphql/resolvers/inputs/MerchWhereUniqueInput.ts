import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { MerchWhereInput } from "../inputs/MerchWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserPurchaseListRelationFilter } from "../inputs/UserPurchaseListRelationFilter";

@TypeGraphQL.InputType("MerchWhereUniqueInput", {})
export class MerchWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MerchWhereInput], {
    nullable: true
  })
  AND?: MerchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MerchWhereInput], {
    nullable: true
  })
  OR?: MerchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MerchWhereInput], {
    nullable: true
  })
  NOT?: MerchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  price?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseListRelationFilter, {
    nullable: true
  })
  purchases?: UserPurchaseListRelationFilter | undefined;
}
