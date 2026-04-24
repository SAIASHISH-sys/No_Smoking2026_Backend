import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOTPVerificationOrThrowArgs } from "./args/FindUniqueOTPVerificationOrThrowArgs";
import { OTPVerification } from "../../../models/OTPVerification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OTPVerification)
export class FindUniqueOTPVerificationOrThrowResolver {
  @TypeGraphQL.Query(_returns => OTPVerification, {
    nullable: true
  })
  async getOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOTPVerificationOrThrowArgs): Promise<OTPVerification | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
