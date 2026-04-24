import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOTPVerificationOrThrowArgs } from "./args/FindFirstOTPVerificationOrThrowArgs";
import { OTPVerification } from "../../../models/OTPVerification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OTPVerification)
export class FindFirstOTPVerificationOrThrowResolver {
  @TypeGraphQL.Query(_returns => OTPVerification, {
    nullable: true
  })
  async findFirstOTPVerificationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOTPVerificationOrThrowArgs): Promise<OTPVerification | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
