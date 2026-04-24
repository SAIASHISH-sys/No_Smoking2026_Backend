import * as TypeGraphQL from "type-graphql";

export enum UserPurchaseScalarFieldEnum {
  id = "id",
  qty = "qty",
  size = "size",
  status = "status",
  razorpayOrderId = "razorpayOrderId",
  razorpayPaymentId = "razorpayPaymentId",
  userId = "userId",
  merchId = "merchId",
  campaignId = "campaignId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(UserPurchaseScalarFieldEnum, {
  name: "UserPurchaseScalarFieldEnum",
  description: undefined,
});
