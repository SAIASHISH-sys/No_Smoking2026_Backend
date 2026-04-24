import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnOTPVerificationArgs } from "./args/CreateManyAndReturnOTPVerificationArgs";
import { OTPVerification } from "../../../models/OTPVerification";
import { CreateManyAndReturnOTPVerification } from "../../outputs/CreateManyAndReturnOTPVerification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OTPVerification)
export class CreateManyAndReturnOTPVerificationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnOTPVerification], {
    nullable: false
  })
  async createManyAndReturnOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnOTPVerificationArgs): Promise<CreateManyAndReturnOTPVerification[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
