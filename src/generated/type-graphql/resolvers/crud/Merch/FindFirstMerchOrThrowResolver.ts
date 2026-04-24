import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMerchOrThrowArgs } from "./args/FindFirstMerchOrThrowArgs";
import { Merch } from "../../../models/Merch";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Merch)
export class FindFirstMerchOrThrowResolver {
  @TypeGraphQL.Query(_returns => Merch, {
    nullable: true
  })
  async findFirstMerchOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMerchOrThrowArgs): Promise<Merch | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).merch.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
