import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserPurchaseArgs } from "./args/AggregateUserPurchaseArgs";
import { UserPurchase } from "../../../models/UserPurchase";
import { AggregateUserPurchase } from "../../outputs/AggregateUserPurchase";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserPurchase)
export class AggregateUserPurchaseResolver {
  @TypeGraphQL.Query(_returns => AggregateUserPurchase, {
    nullable: false
  })
  async aggregateUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserPurchaseArgs): Promise<AggregateUserPurchase> {
    return getPrismaFromContext(ctx).userPurchase.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
