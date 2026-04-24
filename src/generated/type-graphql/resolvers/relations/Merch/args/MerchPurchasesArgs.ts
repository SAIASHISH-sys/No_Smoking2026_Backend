import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseOrderByWithRelationInput } from "../../../inputs/UserPurchaseOrderByWithRelationInput";
import { UserPurchaseWhereInput } from "../../../inputs/UserPurchaseWhereInput";
import { UserPurchaseWhereUniqueInput } from "../../../inputs/UserPurchaseWhereUniqueInput";
import { UserPurchaseScalarFieldEnum } from "../../../../enums/UserPurchaseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MerchPurchasesArgs {
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

  @TypeGraphQL.Field(_type => [UserPurchaseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "qty" | "size" | "status" | "razorpayOrderId" | "razorpayPaymentId" | "userId" | "merchId" | "campaignId" | "createdAt"> | undefined;
}
