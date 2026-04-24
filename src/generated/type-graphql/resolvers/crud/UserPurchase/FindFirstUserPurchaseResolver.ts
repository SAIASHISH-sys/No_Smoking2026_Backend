import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserPurchaseArgs } from "./args/FindFirstUserPurchaseArgs";
import { UserPurchase } from "../../../models/UserPurchase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPurchase)
export class FindFirstUserPurchaseResolver {
  @TypeGraphQL.Query(_returns => UserPurchase, {
    nullable: true
  })
  async findFirstUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserPurchaseArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
