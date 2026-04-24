import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMerchArgs } from "./args/AggregateMerchArgs";
import { Merch } from "../../../models/Merch";
import { AggregateMerch } from "../../outputs/AggregateMerch";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Merch)
export class AggregateMerchResolver {
  @TypeGraphQL.Query(_returns => AggregateMerch, {
    nullable: false
  })
  async aggregateMerch(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMerchArgs): Promise<AggregateMerch> {
    return getPrismaFromContext(ctx).merch.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
