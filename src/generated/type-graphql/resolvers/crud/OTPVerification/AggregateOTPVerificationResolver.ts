import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOTPVerificationArgs } from "./args/AggregateOTPVerificationArgs";
import { OTPVerification } from "../../../models/OTPVerification";
import { AggregateOTPVerification } from "../../outputs/AggregateOTPVerification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OTPVerification)
export class AggregateOTPVerificationResolver {
  @TypeGraphQL.Query(_returns => AggregateOTPVerification, {
    nullable: false
  })
  async aggregateOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOTPVerificationArgs): Promise<AggregateOTPVerification> {
    return getPrismaFromContext(ctx).oTPVerification.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
