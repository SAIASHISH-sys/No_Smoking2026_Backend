import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  campaignId = "campaignId",
  name = "name",
  email = "email",
  password = "password",
  googleId = "googleId",
  mobileNo = "mobileNo",
  dob = "dob",
  age = "age",
  role = "role",
  qrtoken = "qrtoken",
  isVerified = "isVerified",
  otp = "otp",
  createdAt = "createdAt",
  paymentStatus = "paymentStatus",
  registrationrazorpayOrderId = "registrationrazorpayOrderId",
  registrationrazorpayPaymentId = "registrationrazorpayPaymentId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
