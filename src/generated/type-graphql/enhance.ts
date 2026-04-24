import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Merch: crudResolvers.MerchCrudResolver,
  UserPurchase: crudResolvers.UserPurchaseCrudResolver,
  OTPVerification: crudResolvers.OTPVerificationCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Merch: {
    aggregateMerch: actionResolvers.AggregateMerchResolver,
    createManyMerch: actionResolvers.CreateManyMerchResolver,
    createManyAndReturnMerch: actionResolvers.CreateManyAndReturnMerchResolver,
    createOneMerch: actionResolvers.CreateOneMerchResolver,
    deleteManyMerch: actionResolvers.DeleteManyMerchResolver,
    deleteOneMerch: actionResolvers.DeleteOneMerchResolver,
    findFirstMerch: actionResolvers.FindFirstMerchResolver,
    findFirstMerchOrThrow: actionResolvers.FindFirstMerchOrThrowResolver,
    merches: actionResolvers.FindManyMerchResolver,
    merch: actionResolvers.FindUniqueMerchResolver,
    getMerch: actionResolvers.FindUniqueMerchOrThrowResolver,
    groupByMerch: actionResolvers.GroupByMerchResolver,
    updateManyMerch: actionResolvers.UpdateManyMerchResolver,
    updateOneMerch: actionResolvers.UpdateOneMerchResolver,
    upsertOneMerch: actionResolvers.UpsertOneMerchResolver
  },
  UserPurchase: {
    aggregateUserPurchase: actionResolvers.AggregateUserPurchaseResolver,
    createManyUserPurchase: actionResolvers.CreateManyUserPurchaseResolver,
    createManyAndReturnUserPurchase: actionResolvers.CreateManyAndReturnUserPurchaseResolver,
    createOneUserPurchase: actionResolvers.CreateOneUserPurchaseResolver,
    deleteManyUserPurchase: actionResolvers.DeleteManyUserPurchaseResolver,
    deleteOneUserPurchase: actionResolvers.DeleteOneUserPurchaseResolver,
    findFirstUserPurchase: actionResolvers.FindFirstUserPurchaseResolver,
    findFirstUserPurchaseOrThrow: actionResolvers.FindFirstUserPurchaseOrThrowResolver,
    userPurchases: actionResolvers.FindManyUserPurchaseResolver,
    userPurchase: actionResolvers.FindUniqueUserPurchaseResolver,
    getUserPurchase: actionResolvers.FindUniqueUserPurchaseOrThrowResolver,
    groupByUserPurchase: actionResolvers.GroupByUserPurchaseResolver,
    updateManyUserPurchase: actionResolvers.UpdateManyUserPurchaseResolver,
    updateOneUserPurchase: actionResolvers.UpdateOneUserPurchaseResolver,
    upsertOneUserPurchase: actionResolvers.UpsertOneUserPurchaseResolver
  },
  OTPVerification: {
    aggregateOTPVerification: actionResolvers.AggregateOTPVerificationResolver,
    createManyOTPVerification: actionResolvers.CreateManyOTPVerificationResolver,
    createManyAndReturnOTPVerification: actionResolvers.CreateManyAndReturnOTPVerificationResolver,
    createOneOTPVerification: actionResolvers.CreateOneOTPVerificationResolver,
    deleteManyOTPVerification: actionResolvers.DeleteManyOTPVerificationResolver,
    deleteOneOTPVerification: actionResolvers.DeleteOneOTPVerificationResolver,
    findFirstOTPVerification: actionResolvers.FindFirstOTPVerificationResolver,
    findFirstOTPVerificationOrThrow: actionResolvers.FindFirstOTPVerificationOrThrowResolver,
    oTPVerifications: actionResolvers.FindManyOTPVerificationResolver,
    oTPVerification: actionResolvers.FindUniqueOTPVerificationResolver,
    getOTPVerification: actionResolvers.FindUniqueOTPVerificationOrThrowResolver,
    groupByOTPVerification: actionResolvers.GroupByOTPVerificationResolver,
    updateManyOTPVerification: actionResolvers.UpdateManyOTPVerificationResolver,
    updateOneOTPVerification: actionResolvers.UpdateOneOTPVerificationResolver,
    upsertOneOTPVerification: actionResolvers.UpsertOneOTPVerificationResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Merch: ["aggregateMerch", "createManyMerch", "createManyAndReturnMerch", "createOneMerch", "deleteManyMerch", "deleteOneMerch", "findFirstMerch", "findFirstMerchOrThrow", "merches", "merch", "getMerch", "groupByMerch", "updateManyMerch", "updateOneMerch", "upsertOneMerch"],
  UserPurchase: ["aggregateUserPurchase", "createManyUserPurchase", "createManyAndReturnUserPurchase", "createOneUserPurchase", "deleteManyUserPurchase", "deleteOneUserPurchase", "findFirstUserPurchase", "findFirstUserPurchaseOrThrow", "userPurchases", "userPurchase", "getUserPurchase", "groupByUserPurchase", "updateManyUserPurchase", "updateOneUserPurchase", "upsertOneUserPurchase"],
  OTPVerification: ["aggregateOTPVerification", "createManyOTPVerification", "createManyAndReturnOTPVerification", "createOneOTPVerification", "deleteManyOTPVerification", "deleteOneOTPVerification", "findFirstOTPVerification", "findFirstOTPVerificationOrThrow", "oTPVerifications", "oTPVerification", "getOTPVerification", "groupByOTPVerification", "updateManyOTPVerification", "updateOneOTPVerification", "upsertOneOTPVerification"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateMerchArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMerchArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnMerchArgs: ["data", "skipDuplicates"],
  CreateOneMerchArgs: ["data"],
  DeleteManyMerchArgs: ["where"],
  DeleteOneMerchArgs: ["where"],
  FindFirstMerchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMerchOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMerchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMerchArgs: ["where"],
  FindUniqueMerchOrThrowArgs: ["where"],
  GroupByMerchArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMerchArgs: ["data", "where"],
  UpdateOneMerchArgs: ["data", "where"],
  UpsertOneMerchArgs: ["where", "create", "update"],
  AggregateUserPurchaseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserPurchaseArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnUserPurchaseArgs: ["data", "skipDuplicates"],
  CreateOneUserPurchaseArgs: ["data"],
  DeleteManyUserPurchaseArgs: ["where"],
  DeleteOneUserPurchaseArgs: ["where"],
  FindFirstUserPurchaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserPurchaseOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserPurchaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserPurchaseArgs: ["where"],
  FindUniqueUserPurchaseOrThrowArgs: ["where"],
  GroupByUserPurchaseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserPurchaseArgs: ["data", "where"],
  UpdateOneUserPurchaseArgs: ["data", "where"],
  UpsertOneUserPurchaseArgs: ["where", "create", "update"],
  AggregateOTPVerificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOTPVerificationArgs: ["data", "skipDuplicates"],
  CreateManyAndReturnOTPVerificationArgs: ["data", "skipDuplicates"],
  CreateOneOTPVerificationArgs: ["data"],
  DeleteManyOTPVerificationArgs: ["where"],
  DeleteOneOTPVerificationArgs: ["where"],
  FindFirstOTPVerificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOTPVerificationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOTPVerificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOTPVerificationArgs: ["where"],
  FindUniqueOTPVerificationOrThrowArgs: ["where"],
  GroupByOTPVerificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOTPVerificationArgs: ["data", "where"],
  UpdateOneOTPVerificationArgs: ["data", "where"],
  UpsertOneOTPVerificationArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Merch: relationResolvers.MerchRelationsResolver,
  UserPurchase: relationResolvers.UserPurchaseRelationsResolver
};
const relationResolversInfo = {
  User: ["purchases"],
  Merch: ["purchases"],
  UserPurchase: ["user", "merch"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  Merch: ["id", "name", "price"],
  UserPurchase: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  OTPVerification: ["email", "otp", "createdAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMerch: ["_count", "_avg", "_sum", "_min", "_max"],
  MerchGroupBy: ["id", "name", "price", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserPurchase: ["_count", "_avg", "_sum", "_min", "_max"],
  UserPurchaseGroupBy: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOTPVerification: ["_count", "_min", "_max"],
  OTPVerificationGroupBy: ["email", "otp", "createdAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["purchases"],
  UserCountAggregate: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "_all"],
  UserAvgAggregate: ["id", "age"],
  UserSumAggregate: ["id", "age"],
  UserMinAggregate: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  UserMaxAggregate: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  MerchCount: ["purchases"],
  MerchCountAggregate: ["id", "name", "price", "_all"],
  MerchAvgAggregate: ["id", "price"],
  MerchSumAggregate: ["id", "price"],
  MerchMinAggregate: ["id", "name", "price"],
  MerchMaxAggregate: ["id", "name", "price"],
  UserPurchaseCountAggregate: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt", "_all"],
  UserPurchaseAvgAggregate: ["id", "qty", "userId", "merchId"],
  UserPurchaseSumAggregate: ["id", "qty", "userId", "merchId"],
  UserPurchaseMinAggregate: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  UserPurchaseMaxAggregate: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  OTPVerificationCountAggregate: ["email", "otp", "createdAt", "_all"],
  OTPVerificationMinAggregate: ["email", "otp", "createdAt"],
  OTPVerificationMaxAggregate: ["email", "otp", "createdAt"],
  CreateManyAndReturnUser: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  CreateManyAndReturnMerch: ["id", "name", "price"],
  CreateManyAndReturnUserPurchase: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt", "user", "merch"],
  CreateManyAndReturnOTPVerification: ["email", "otp", "createdAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "purchases"],
  UserOrderByWithRelationInput: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "purchases"],
  UserWhereUniqueInput: ["id", "email", "googleId", "qrtoken", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "AND", "OR", "NOT", "campaignId", "name", "password", "mobileNo", "dob", "age", "role", "isVerified", "otp", "createdAt", "paymentStatus", "purchases"],
  UserOrderByWithAggregationInput: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  MerchWhereInput: ["AND", "OR", "NOT", "id", "name", "price", "purchases"],
  MerchOrderByWithRelationInput: ["id", "name", "price", "purchases"],
  MerchWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "price", "purchases"],
  MerchOrderByWithAggregationInput: ["id", "name", "price", "_count", "_avg", "_max", "_min", "_sum"],
  MerchScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "price"],
  UserPurchaseWhereInput: ["AND", "OR", "NOT", "id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt", "user", "merch"],
  UserPurchaseOrderByWithRelationInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt", "user", "merch"],
  UserPurchaseWhereUniqueInput: ["id", "razorpayOrderId", "razorpayPaymentId", "AND", "OR", "NOT", "qty", "size", "status", "userId", "merchId", "campaignId", "createdAt", "user", "merch"],
  UserPurchaseOrderByWithAggregationInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserPurchaseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  OTPVerificationWhereInput: ["AND", "OR", "NOT", "email", "otp", "createdAt"],
  OTPVerificationOrderByWithRelationInput: ["email", "otp", "createdAt"],
  OTPVerificationWhereUniqueInput: ["email", "AND", "OR", "NOT", "otp", "createdAt"],
  OTPVerificationOrderByWithAggregationInput: ["email", "otp", "createdAt", "_count", "_max", "_min"],
  OTPVerificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "email", "otp", "createdAt"],
  UserCreateInput: ["campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "purchases"],
  UserUpdateInput: ["campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId", "purchases"],
  UserCreateManyInput: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  UserUpdateManyMutationInput: ["campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  MerchCreateInput: ["name", "price", "purchases"],
  MerchUpdateInput: ["name", "price", "purchases"],
  MerchCreateManyInput: ["id", "name", "price"],
  MerchUpdateManyMutationInput: ["name", "price"],
  UserPurchaseCreateInput: ["qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "campaignId", "createdAt", "user", "merch"],
  UserPurchaseUpdateInput: ["qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "campaignId", "createdAt", "user", "merch"],
  UserPurchaseCreateManyInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  UserPurchaseUpdateManyMutationInput: ["qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "campaignId", "createdAt"],
  OTPVerificationCreateInput: ["email", "otp", "createdAt"],
  OTPVerificationUpdateInput: ["email", "otp", "createdAt"],
  OTPVerificationCreateManyInput: ["email", "otp", "createdAt"],
  OTPVerificationUpdateManyMutationInput: ["email", "otp", "createdAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumroleFilter: ["equals", "in", "notIn", "not"],
  BoolFilter: ["equals", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumOrderStatusFilter: ["equals", "in", "notIn", "not"],
  UserPurchaseListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  UserPurchaseOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  UserAvgOrderByAggregateInput: ["id", "age"],
  UserMaxOrderByAggregateInput: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  UserMinOrderByAggregateInput: ["id", "campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  UserSumOrderByAggregateInput: ["id", "age"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumOrderStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  MerchCountOrderByAggregateInput: ["id", "name", "price"],
  MerchAvgOrderByAggregateInput: ["id", "price"],
  MerchMaxOrderByAggregateInput: ["id", "name", "price"],
  MerchMinOrderByAggregateInput: ["id", "name", "price"],
  MerchSumOrderByAggregateInput: ["id", "price"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  MerchRelationFilter: ["is", "isNot"],
  UserPurchaseCountOrderByAggregateInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  UserPurchaseAvgOrderByAggregateInput: ["id", "qty", "userId", "merchId"],
  UserPurchaseMaxOrderByAggregateInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  UserPurchaseMinOrderByAggregateInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  UserPurchaseSumOrderByAggregateInput: ["id", "qty", "userId", "merchId"],
  OTPVerificationCountOrderByAggregateInput: ["email", "otp", "createdAt"],
  OTPVerificationMaxOrderByAggregateInput: ["email", "otp", "createdAt"],
  OTPVerificationMinOrderByAggregateInput: ["email", "otp", "createdAt"],
  UserPurchaseCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumroleFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumOrderStatusFieldUpdateOperationsInput: ["set"],
  UserPurchaseUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserPurchaseCreateNestedManyWithoutMerchInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserPurchaseUpdateManyWithoutMerchNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutPurchasesInput: ["create", "connectOrCreate", "connect"],
  MerchCreateNestedOneWithoutPurchasesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutPurchasesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MerchUpdateOneRequiredWithoutPurchasesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumroleFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumOrderStatusFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumOrderStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserPurchaseCreateWithoutUserInput: ["qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "campaignId", "createdAt", "merch"],
  UserPurchaseCreateOrConnectWithoutUserInput: ["where", "create"],
  UserPurchaseCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserPurchaseUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserPurchaseUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserPurchaseUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserPurchaseScalarWhereInput: ["AND", "OR", "NOT", "id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "merchId", "campaignId", "createdAt"],
  UserPurchaseCreateWithoutMerchInput: ["qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "campaignId", "createdAt", "user"],
  UserPurchaseCreateOrConnectWithoutMerchInput: ["where", "create"],
  UserPurchaseCreateManyMerchInputEnvelope: ["data", "skipDuplicates"],
  UserPurchaseUpsertWithWhereUniqueWithoutMerchInput: ["where", "update", "create"],
  UserPurchaseUpdateWithWhereUniqueWithoutMerchInput: ["where", "data"],
  UserPurchaseUpdateManyWithWhereWithoutMerchInput: ["where", "data"],
  UserCreateWithoutPurchasesInput: ["campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  UserCreateOrConnectWithoutPurchasesInput: ["where", "create"],
  MerchCreateWithoutPurchasesInput: ["name", "price"],
  MerchCreateOrConnectWithoutPurchasesInput: ["where", "create"],
  UserUpsertWithoutPurchasesInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPurchasesInput: ["where", "data"],
  UserUpdateWithoutPurchasesInput: ["campaignId", "name", "email", "password", "googleId", "mobileNo", "dob", "age", "role", "qrtoken", "isVerified", "otp", "createdAt", "paymentStatus", "registrationrazorpayOrderId", "registrationrazorpayPaymentId"],
  MerchUpsertWithoutPurchasesInput: ["update", "create", "where"],
  MerchUpdateToOneWithWhereWithoutPurchasesInput: ["where", "data"],
  MerchUpdateWithoutPurchasesInput: ["name", "price"],
  UserPurchaseCreateManyUserInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "merchId", "campaignId", "createdAt"],
  UserPurchaseUpdateWithoutUserInput: ["qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "campaignId", "createdAt", "merch"],
  UserPurchaseCreateManyMerchInput: ["id", "qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "userId", "campaignId", "createdAt"],
  UserPurchaseUpdateWithoutMerchInput: ["qty", "size", "status", "razorpayOrderId", "razorpayPaymentId", "campaignId", "createdAt", "user"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

