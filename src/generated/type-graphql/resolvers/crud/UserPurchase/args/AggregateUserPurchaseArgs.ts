import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseOrderByWithRelationInput } from "../../../inputs/UserPurchaseOrderByWithRelationInput";
import { UserPurchaseWhereInput } from "../../../inputs/UserPurchaseWhereInput";
import { UserPurchaseWhereUniqueInput } from "../../../inputs/UserPurchaseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserPurchaseArgs {
  @TypeGraphQL.Field(_type => UserPurchaseWhereInput, {
    nullable: true
  })
  where?: UserPurchaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserPurchaseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserPurchaseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserPurchaseWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserPurchaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
