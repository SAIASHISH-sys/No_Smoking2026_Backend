import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserPurchaseCreateManyInput } from "../../../inputs/UserPurchaseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnUserPurchaseArgs {
  @TypeGraphQL.Field(_type => [UserPurchaseCreateManyInput], {
    nullable: false
  })
  data!: UserPurchaseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
