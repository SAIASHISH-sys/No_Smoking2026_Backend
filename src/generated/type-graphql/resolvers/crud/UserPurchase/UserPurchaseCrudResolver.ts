import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserPurchaseArgs } from "./args/AggregateUserPurchaseArgs";
import { CreateManyAndReturnUserPurchaseArgs } from "./args/CreateManyAndReturnUserPurchaseArgs";
import { CreateManyUserPurchaseArgs } from "./args/CreateManyUserPurchaseArgs";
import { CreateOneUserPurchaseArgs } from "./args/CreateOneUserPurchaseArgs";
import { DeleteManyUserPurchaseArgs } from "./args/DeleteManyUserPurchaseArgs";
import { DeleteOneUserPurchaseArgs } from "./args/DeleteOneUserPurchaseArgs";
import { FindFirstUserPurchaseArgs } from "./args/FindFirstUserPurchaseArgs";
import { FindFirstUserPurchaseOrThrowArgs } from "./args/FindFirstUserPurchaseOrThrowArgs";
import { FindManyUserPurchaseArgs } from "./args/FindManyUserPurchaseArgs";
import { FindUniqueUserPurchaseArgs } from "./args/FindUniqueUserPurchaseArgs";
import { FindUniqueUserPurchaseOrThrowArgs } from "./args/FindUniqueUserPurchaseOrThrowArgs";
import { GroupByUserPurchaseArgs } from "./args/GroupByUserPurchaseArgs";
import { UpdateManyUserPurchaseArgs } from "./args/UpdateManyUserPurchaseArgs";
import { UpdateOneUserPurchaseArgs } from "./args/UpdateOneUserPurchaseArgs";
import { UpsertOneUserPurchaseArgs } from "./args/UpsertOneUserPurchaseArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserPurchase } from "../../../models/UserPurchase";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserPurchase } from "../../outputs/AggregateUserPurchase";
import { CreateManyAndReturnUserPurchase } from "../../outputs/CreateManyAndReturnUserPurchase";
import { UserPurchaseGroupBy } from "../../outputs/UserPurchaseGroupBy";

@TypeGraphQL.Resolver(_of => UserPurchase)
export class UserPurchaseCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUserPurchase, {
    nullable: false
  })
  async aggregateUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserPurchaseArgs): Promise<AggregateUserPurchase> {
    return getPrismaFromContext(ctx).userPurchase.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserPurchaseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUserPurchase], {
    nullable: false
  })
  async createManyAndReturnUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnUserPurchaseArgs): Promise<CreateManyAndReturnUserPurchase[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserPurchase, {
    nullable: false
  })
  async createOneUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserPurchaseArgs): Promise<UserPurchase> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserPurchaseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserPurchase, {
    nullable: true
  })
  async deleteOneUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserPurchaseArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserPurchase, {
    nullable: true
  })
  async findFirstUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserPurchaseArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserPurchase, {
    nullable: true
  })
  async findFirstUserPurchaseOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserPurchaseOrThrowArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserPurchase], {
    nullable: false
  })
  async userPurchases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserPurchaseArgs): Promise<UserPurchase[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserPurchase, {
    nullable: true
  })
  async userPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserPurchaseArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UserPurchase, {
    nullable: true
  })
  async getUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserPurchaseOrThrowArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UserPurchaseGroupBy], {
    nullable: false
  })
  async groupByUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserPurchaseArgs): Promise<UserPurchaseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserPurchaseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserPurchase, {
    nullable: true
  })
  async updateOneUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserPurchaseArgs): Promise<UserPurchase | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserPurchase, {
    nullable: false
  })
  async upsertOneUserPurchase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserPurchaseArgs): Promise<UserPurchase> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userPurchase.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
