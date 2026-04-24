import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserPurchaseArgs } from "./args/CreateOneUserPurchaseArgs";
import { UserPurchase } from "../../../models/UserPurchase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPurchase)
export class CreateOneUserPurchaseResolver {
  @TypeGraphQL.Mutation(_returns => UserPurchase, {
    nullable: false
  })
  async createOneUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserPurchaseArgs): Promise<UserPurchase> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
