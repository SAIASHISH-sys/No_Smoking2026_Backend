import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserPurchaseOrThrowArgs } from "./args/FindUniqueUserPurchaseOrThrowArgs";
import { UserPurchase } from "../../../models/UserPurchase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPurchase)
export class FindUniqueUserPurchaseOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserPurchase, {
    nullable: true
  })
  async getUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserPurchaseOrThrowArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
