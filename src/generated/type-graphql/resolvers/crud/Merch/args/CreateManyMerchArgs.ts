import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MerchCreateManyInput } from "../../../inputs/MerchCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMerchArgs {
  @TypeGraphQL.Field(_type => [MerchCreateManyInput], {
    nullable: false
  })
  data!: MerchCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
