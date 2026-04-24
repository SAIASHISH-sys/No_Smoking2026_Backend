import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOTPVerificationArgs } from "./args/AggregateOTPVerificationArgs";
import { CreateManyAndReturnOTPVerificationArgs } from "./args/CreateManyAndReturnOTPVerificationArgs";
import { CreateManyOTPVerificationArgs } from "./args/CreateManyOTPVerificationArgs";
import { CreateOneOTPVerificationArgs } from "./args/CreateOneOTPVerificationArgs";
import { DeleteManyOTPVerificationArgs } from "./args/DeleteManyOTPVerificationArgs";
import { DeleteOneOTPVerificationArgs } from "./args/DeleteOneOTPVerificationArgs";
import { FindFirstOTPVerificationArgs } from "./args/FindFirstOTPVerificationArgs";
import { FindFirstOTPVerificationOrThrowArgs } from "./args/FindFirstOTPVerificationOrThrowArgs";
import { FindManyOTPVerificationArgs } from "./args/FindManyOTPVerificationArgs";
import { FindUniqueOTPVerificationArgs } from "./args/FindUniqueOTPVerificationArgs";
import { FindUniqueOTPVerificationOrThrowArgs } from "./args/FindUniqueOTPVerificationOrThrowArgs";
import { GroupByOTPVerificationArgs } from "./args/GroupByOTPVerificationArgs";
import { UpdateManyOTPVerificationArgs } from "./args/UpdateManyOTPVerificationArgs";
import { UpdateOneOTPVerificationArgs } from "./args/UpdateOneOTPVerificationArgs";
import { UpsertOneOTPVerificationArgs } from "./args/UpsertOneOTPVerificationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { OTPVerification } from "../../../models/OTPVerification";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOTPVerification } from "../../outputs/AggregateOTPVerification";
import { CreateManyAndReturnOTPVerification } from "../../outputs/CreateManyAndReturnOTPVerification";
import { OTPVerificationGroupBy } from "../../outputs/OTPVerificationGroupBy";

@TypeGraphQL.Resolver(_of => OTPVerification)
export class OTPVerificationCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateOTPVerification, {
    nullable: false
  })
  async aggregateOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOTPVerificationArgs): Promise<AggregateOTPVerification> {
    return getPrismaFromContext(ctx).oTPVerification.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOTPVerificationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => OTPVerification, {
    nullable: false
  })
  async createOneOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneOTPVerificationArgs): Promise<OTPVerification> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyOTPVerificationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => OTPVerification, {
    nullable: true
  })
  async deleteOneOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneOTPVerificationArgs): Promise<OTPVerification | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => OTPVerification, {
    nullable: true
  })
  async findFirstOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOTPVerificationArgs): Promise<OTPVerification | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [OTPVerification], {
    nullable: false
  })
  async oTPVerifications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOTPVerificationArgs): Promise<OTPVerification[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => OTPVerification, {
    nullable: true
  })
  async oTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOTPVerificationArgs): Promise<OTPVerification | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyOTPVerificationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => OTPVerification, {
    nullable: true
  })
  async updateOneOTPVerification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneOTPVerificationArgs): Promise<OTPVerification | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).oTPVerification.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
