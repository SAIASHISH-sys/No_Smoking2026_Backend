import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnUserPurchaseArgs } from "./args/CreateManyAndReturnUserPurchaseArgs";
import { UserPurchase } from "../../../models/UserPurchase";
import { CreateManyAndReturnUserPurchase } from "../../outputs/CreateManyAndReturnUserPurchase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPurchase)
export class CreateManyAndReturnUserPurchaseResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUserPurchase], {
    nullable: false
  })
  async createManyAndReturnUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnUserPurchaseArgs): Promise<CreateManyAndReturnUserPurchase[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
