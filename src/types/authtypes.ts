import { InputType, Field, ObjectType, Int } from "type-graphql";
import { User } from "../generated/type-graphql";

@InputType()
export class SignUpInput {
  @Field() email!: string;
  @Field() name!: string;
  @Field() password!: string;
  @Field() mobileNo!: string;
  @Field(() => Int) age!: number;
}

@ObjectType()
export class SignUpOutput {
  @Field() token!: string;
  @Field() role!: string;
  @Field() user!: User;
}

@InputType()
export class LoginInput {
  @Field() email!: string;
  @Field() password!: string;
}

