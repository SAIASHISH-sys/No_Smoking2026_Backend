import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Merch } from "../../../models/Merch";
import { UserPurchase } from "../../../models/UserPurchase";
import { MerchPurchasesArgs } from "./args/MerchPurchasesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Merch)
export class MerchRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [UserPurchase], {
    nullable: false
  })
  async purchases(@TypeGraphQL.Root() merch: Merch, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MerchPurchasesArgs): Promise<UserPurchase[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).merch.findUniqueOrThrow({
      where: {
        id: merch.id,
      },
    }).purchases({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
