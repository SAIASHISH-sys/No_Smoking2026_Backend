import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneOTPVerificationArgs } from "./args/UpsertOneOTPVerificationArgs";
import { OTPVerification } from "../../../models/OTPVerification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OTPVerification)
export class UpsertOneOTPVerificationResolver {
  @TypeGraphQL.Mutation(_returns => OTPVerification, {
    nullable: false
  })
  async upsertOneOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneOTPVerificationArgs): Promise<OTPVerification> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
