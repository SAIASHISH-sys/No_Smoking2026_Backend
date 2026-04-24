import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMerchArgs } from "./args/CreateManyAndReturnMerchArgs";
import { Merch } from "../../../models/Merch";
import { CreateManyAndReturnMerch } from "../../outputs/CreateManyAndReturnMerch";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Merch)
export class CreateManyAndReturnMerchResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMerch], {
    nullable: false
  })
  async createManyAndReturnMerch(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMerchArgs): Promise<CreateManyAndReturnMerch[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).merch.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
