import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByOTPVerificationArgs } from "./args/GroupByOTPVerificationArgs";
import { OTPVerification } from "../../../models/OTPVerification";
import { OTPVerificationGroupBy } from "../../outputs/OTPVerificationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OTPVerification)
export class GroupByOTPVerificationResolver {
  @TypeGraphQL.Query(_returns => [OTPVerificationGroupBy], {
    nullable: false
  })
  async groupByOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOTPVerificationArgs): Promise<OTPVerificationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
