import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserPurchaseArgs } from "./args/GroupByUserPurchaseArgs";
import { UserPurchase } from "../../../models/UserPurchase";
import { UserPurchaseGroupBy } from "../../outputs/UserPurchaseGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPurchase)
export class GroupByUserPurchaseResolver {
  @TypeGraphQL.Query(_returns => [UserPurchaseGroupBy], {
    nullable: false
  })
  async groupByUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserPurchaseArgs): Promise<UserPurchaseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
