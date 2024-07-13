/* eslint-disable */
// @ts-nocheck
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export type AuthenticatedItem = User;

export type BotConfig = {
  __typename?: "BotConfig";
  companyStatement?: Maybe<Scalars["String"]["output"]>;
  healthInsuranceCarriers?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  presentationStrategy?: Maybe<Scalars["String"]["output"]>;
  priorityPlan?: Maybe<Scalars["String"]["output"]>;
  specificQuestions?: Maybe<Scalars["String"]["output"]>;
  summaryPrompt?: Maybe<Scalars["String"]["output"]>;
  tonestyle?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
  welcomeMessage?: Maybe<Scalars["String"]["output"]>;
};

export type BotConfigCreateInput = {
  companyStatement?: InputMaybe<Scalars["String"]["input"]>;
  healthInsuranceCarriers?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  presentationStrategy?: InputMaybe<Scalars["String"]["input"]>;
  priorityPlan?: InputMaybe<Scalars["String"]["input"]>;
  specificQuestions?: InputMaybe<Scalars["String"]["input"]>;
  summaryPrompt?: InputMaybe<Scalars["String"]["input"]>;
  tonestyle?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  welcomeMessage?: InputMaybe<Scalars["String"]["input"]>;
};

export type BotConfigManyRelationFilter = {
  every?: InputMaybe<BotConfigWhereInput>;
  none?: InputMaybe<BotConfigWhereInput>;
  some?: InputMaybe<BotConfigWhereInput>;
};

export type BotConfigOrderByInput = {
  companyStatement?: InputMaybe<OrderDirection>;
  healthInsuranceCarriers?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  presentationStrategy?: InputMaybe<OrderDirection>;
  priorityPlan?: InputMaybe<OrderDirection>;
  specificQuestions?: InputMaybe<OrderDirection>;
  summaryPrompt?: InputMaybe<OrderDirection>;
  tonestyle?: InputMaybe<OrderDirection>;
  welcomeMessage?: InputMaybe<OrderDirection>;
};

export type BotConfigRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BotConfigWhereUniqueInput>>;
  create?: InputMaybe<Array<BotConfigCreateInput>>;
};

export type BotConfigRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BotConfigWhereUniqueInput>>;
  create?: InputMaybe<Array<BotConfigCreateInput>>;
  disconnect?: InputMaybe<Array<BotConfigWhereUniqueInput>>;
  set?: InputMaybe<Array<BotConfigWhereUniqueInput>>;
};

export type BotConfigUpdateArgs = {
  data: BotConfigUpdateInput;
  where: BotConfigWhereUniqueInput;
};

export type BotConfigUpdateInput = {
  companyStatement?: InputMaybe<Scalars["String"]["input"]>;
  healthInsuranceCarriers?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  presentationStrategy?: InputMaybe<Scalars["String"]["input"]>;
  priorityPlan?: InputMaybe<Scalars["String"]["input"]>;
  specificQuestions?: InputMaybe<Scalars["String"]["input"]>;
  summaryPrompt?: InputMaybe<Scalars["String"]["input"]>;
  tonestyle?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  welcomeMessage?: InputMaybe<Scalars["String"]["input"]>;
};

export type BotConfigWhereInput = {
  AND?: InputMaybe<Array<BotConfigWhereInput>>;
  NOT?: InputMaybe<Array<BotConfigWhereInput>>;
  OR?: InputMaybe<Array<BotConfigWhereInput>>;
  companyStatement?: InputMaybe<StringFilter>;
  healthInsuranceCarriers?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  presentationStrategy?: InputMaybe<StringFilter>;
  priorityPlan?: InputMaybe<StringFilter>;
  specificQuestions?: InputMaybe<StringFilter>;
  summaryPrompt?: InputMaybe<StringFilter>;
  tonestyle?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  welcomeMessage?: InputMaybe<StringFilter>;
};

export type BotConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ClientItemAuthenticationWithPasswordFailure = {
  __typename?: "ClientItemAuthenticationWithPasswordFailure";
  message: Scalars["String"]["output"];
};

export type ClientItemAuthenticationWithPasswordResult =
  | ClientItemAuthenticationWithPasswordFailure
  | ClientItemAuthenticationWithPasswordSuccess;

export type ClientItemAuthenticationWithPasswordSuccess = {
  __typename?: "ClientItemAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"]["output"];
};

export type CreateInitialUserInput = {
  adminPassword?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type Group = {
  __typename?: "Group";
  id: Scalars["ID"]["output"];
  members?: Maybe<Array<GroupMember>>;
  membersCount?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type GroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: GroupMemberWhereInput;
};

export type GroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};

export type GroupCreateInput = {
  members?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type GroupMember = {
  __typename?: "GroupMember";
  access?: Maybe<Scalars["Int"]["output"]>;
  group?: Maybe<Group>;
  id: Scalars["ID"]["output"];
  user?: Maybe<User>;
};

export type GroupMemberCreateInput = {
  access?: InputMaybe<Scalars["Int"]["input"]>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type GroupMemberManyRelationFilter = {
  every?: InputMaybe<GroupMemberWhereInput>;
  none?: InputMaybe<GroupMemberWhereInput>;
  some?: InputMaybe<GroupMemberWhereInput>;
};

export type GroupMemberOrderByInput = {
  access?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type GroupMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
};

export type GroupMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
  disconnect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
};

export type GroupMemberUpdateArgs = {
  data: GroupMemberUpdateInput;
  where: GroupMemberWhereUniqueInput;
};

export type GroupMemberUpdateInput = {
  access?: InputMaybe<Scalars["Int"]["input"]>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type GroupMemberWhereInput = {
  AND?: InputMaybe<Array<GroupMemberWhereInput>>;
  NOT?: InputMaybe<Array<GroupMemberWhereInput>>;
  OR?: InputMaybe<Array<GroupMemberWhereInput>>;
  access?: InputMaybe<IntNullableFilter>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type GroupMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type GroupOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type GroupRelateToOneForCreateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
};

export type GroupRelateToOneForUpdateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GroupUpdateArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateInput = {
  members?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<GroupMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export enum ImageExtension {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
  Webp = "webp",
}

export type ImageFieldInput = {
  upload: Scalars["Upload"]["input"];
};

export type ImageFieldOutput = {
  __typename?: "ImageFieldOutput";
  extension: ImageExtension;
  filesize: Scalars["Int"]["output"];
  height: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  url: Scalars["String"]["output"];
  width: Scalars["Int"]["output"];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"]["input"];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: "KeystoneAdminUIFieldGroupMeta";
  description?: Maybe<Scalars["String"]["output"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars["String"]["output"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  fieldMeta?: Maybe<Scalars["JSON"]["output"]>;
  isFilterable: Scalars["Boolean"]["output"];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars["Boolean"]["output"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"]["output"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"]["output"];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars["Int"]["output"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = "create",
  Read = "read",
  Update = "update",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = "form",
  Sidebar = "sidebar",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]["output"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars["Boolean"]["output"];
  hideDelete: Scalars["Boolean"]["output"];
  initialColumns: Array<Scalars["String"]["output"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"]["output"];
  isSingleton: Scalars["Boolean"]["output"];
  itemQueryName: Scalars["String"]["output"];
  key: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  labelField: Scalars["String"]["output"];
  listQueryName: Scalars["String"]["output"];
  pageSize: Scalars["Int"]["output"];
  path: Scalars["String"]["output"];
  plural: Scalars["String"]["output"];
  singular: Scalars["String"]["output"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"]["output"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: "Mutation";
  authclient_changePassword?: Maybe<Scalars["Boolean"]["output"]>;
  authclient_login?: Maybe<ClientItemAuthenticationWithPasswordResult>;
  authclient_register?: Maybe<Scalars["Boolean"]["output"]>;
  authclient_requestPasswordReset?: Maybe<Scalars["Boolean"]["output"]>;
  authclient_resetPassword?: Maybe<Scalars["Boolean"]["output"]>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createBotConfig?: Maybe<BotConfig>;
  createBotConfigs?: Maybe<Array<Maybe<BotConfig>>>;
  createGroup?: Maybe<Group>;
  createGroupMember?: Maybe<GroupMember>;
  createGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  createGroups?: Maybe<Array<Maybe<Group>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createServerError?: Maybe<ServerError>;
  createServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  createServerLog?: Maybe<ServerLog>;
  createServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteBotConfig?: Maybe<BotConfig>;
  deleteBotConfigs?: Maybe<Array<Maybe<BotConfig>>>;
  deleteGroup?: Maybe<Group>;
  deleteGroupMember?: Maybe<GroupMember>;
  deleteGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  deleteGroups?: Maybe<Array<Maybe<Group>>>;
  deleteServerError?: Maybe<ServerError>;
  deleteServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  deleteServerLog?: Maybe<ServerLog>;
  deleteServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"]["output"];
  updateBotConfig?: Maybe<BotConfig>;
  updateBotConfigs?: Maybe<Array<Maybe<BotConfig>>>;
  updateGroup?: Maybe<Group>;
  updateGroupMember?: Maybe<GroupMember>;
  updateGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  updateGroups?: Maybe<Array<Maybe<Group>>>;
  updateServerError?: Maybe<ServerError>;
  updateServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  updateServerLog?: Maybe<ServerLog>;
  updateServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthclient_ChangePasswordArgs = {
  newPassword: Scalars["String"]["input"];
  oldPassword: Scalars["String"]["input"];
};

export type MutationAuthclient_LoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationAuthclient_RegisterArgs = {
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
};

export type MutationAuthclient_RequestPasswordResetArgs = {
  email: Scalars["String"]["input"];
};

export type MutationAuthclient_ResetPasswordArgs = {
  password: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationAuthenticateUserWithPasswordArgs = {
  adminPassword: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
};

export type MutationCreateBotConfigArgs = {
  data: BotConfigCreateInput;
};

export type MutationCreateBotConfigsArgs = {
  data: Array<BotConfigCreateInput>;
};

export type MutationCreateGroupArgs = {
  data: GroupCreateInput;
};

export type MutationCreateGroupMemberArgs = {
  data: GroupMemberCreateInput;
};

export type MutationCreateGroupMembersArgs = {
  data: Array<GroupMemberCreateInput>;
};

export type MutationCreateGroupsArgs = {
  data: Array<GroupCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateServerErrorArgs = {
  data: ServerErrorCreateInput;
};

export type MutationCreateServerErrorsArgs = {
  data: Array<ServerErrorCreateInput>;
};

export type MutationCreateServerLogArgs = {
  data: ServerLogCreateInput;
};

export type MutationCreateServerLogsArgs = {
  data: Array<ServerLogCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteBotConfigArgs = {
  where: BotConfigWhereUniqueInput;
};

export type MutationDeleteBotConfigsArgs = {
  where: Array<BotConfigWhereUniqueInput>;
};

export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};

export type MutationDeleteGroupMemberArgs = {
  where: GroupMemberWhereUniqueInput;
};

export type MutationDeleteGroupMembersArgs = {
  where: Array<GroupMemberWhereUniqueInput>;
};

export type MutationDeleteGroupsArgs = {
  where: Array<GroupWhereUniqueInput>;
};

export type MutationDeleteServerErrorArgs = {
  where: ServerErrorWhereUniqueInput;
};

export type MutationDeleteServerErrorsArgs = {
  where: Array<ServerErrorWhereUniqueInput>;
};

export type MutationDeleteServerLogArgs = {
  where: ServerLogWhereUniqueInput;
};

export type MutationDeleteServerLogsArgs = {
  where: Array<ServerLogWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationUpdateBotConfigArgs = {
  data: BotConfigUpdateInput;
  where: BotConfigWhereUniqueInput;
};

export type MutationUpdateBotConfigsArgs = {
  data: Array<BotConfigUpdateArgs>;
};

export type MutationUpdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type MutationUpdateGroupMemberArgs = {
  data: GroupMemberUpdateInput;
  where: GroupMemberWhereUniqueInput;
};

export type MutationUpdateGroupMembersArgs = {
  data: Array<GroupMemberUpdateArgs>;
};

export type MutationUpdateGroupsArgs = {
  data: Array<GroupUpdateArgs>;
};

export type MutationUpdateServerErrorArgs = {
  data: ServerErrorUpdateInput;
  where: ServerErrorWhereUniqueInput;
};

export type MutationUpdateServerErrorsArgs = {
  data: Array<ServerErrorUpdateArgs>;
};

export type MutationUpdateServerLogArgs = {
  data: ServerLogUpdateInput;
  where: ServerLogWhereUniqueInput;
};

export type MutationUpdateServerLogsArgs = {
  data: Array<ServerLogUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PasswordFilter = {
  isSet: Scalars["Boolean"]["input"];
};

export type PasswordState = {
  __typename?: "PasswordState";
  isSet: Scalars["Boolean"]["output"];
};

export type Query = {
  __typename?: "Query";
  ErrorTest?: Maybe<Scalars["String"]["output"]>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  botConfig?: Maybe<BotConfig>;
  botConfigs?: Maybe<Array<BotConfig>>;
  botConfigsCount?: Maybe<Scalars["Int"]["output"]>;
  group?: Maybe<Group>;
  groupMember?: Maybe<GroupMember>;
  groupMembers?: Maybe<Array<GroupMember>>;
  groupMembersCount?: Maybe<Scalars["Int"]["output"]>;
  groups?: Maybe<Array<Group>>;
  groupsCount?: Maybe<Scalars["Int"]["output"]>;
  keystone: KeystoneMeta;
  serverError?: Maybe<ServerError>;
  serverErrors?: Maybe<Array<ServerError>>;
  serverErrorsCount?: Maybe<Scalars["Int"]["output"]>;
  serverLog?: Maybe<ServerLog>;
  serverLogs?: Maybe<Array<ServerLog>>;
  serverLogsCount?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars["Int"]["output"]>;
};

export type QueryBotConfigArgs = {
  where: BotConfigWhereUniqueInput;
};

export type QueryBotConfigsArgs = {
  cursor?: InputMaybe<BotConfigWhereUniqueInput>;
  orderBy?: Array<BotConfigOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: BotConfigWhereInput;
};

export type QueryBotConfigsCountArgs = {
  where?: BotConfigWhereInput;
};

export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
};

export type QueryGroupMemberArgs = {
  where: GroupMemberWhereUniqueInput;
};

export type QueryGroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: GroupMemberWhereInput;
};

export type QueryGroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};

export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  orderBy?: Array<GroupOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: GroupWhereInput;
};

export type QueryGroupsCountArgs = {
  where?: GroupWhereInput;
};

export type QueryServerErrorArgs = {
  where: ServerErrorWhereUniqueInput;
};

export type QueryServerErrorsArgs = {
  cursor?: InputMaybe<ServerErrorWhereUniqueInput>;
  orderBy?: Array<ServerErrorOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: ServerErrorWhereInput;
};

export type QueryServerErrorsCountArgs = {
  where?: ServerErrorWhereInput;
};

export type QueryServerLogArgs = {
  where: ServerLogWhereUniqueInput;
};

export type QueryServerLogsArgs = {
  cursor?: InputMaybe<ServerLogWhereUniqueInput>;
  orderBy?: Array<ServerLogOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: ServerLogWhereInput;
};

export type QueryServerLogsCountArgs = {
  where?: ServerLogWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type ServerError = {
  __typename?: "ServerError";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  graphql?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  method?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  userID?: Maybe<Scalars["String"]["output"]>;
};

export type ServerErrorCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  graphql?: InputMaybe<Scalars["String"]["input"]>;
  method?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  userID?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServerErrorOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  errorMessage?: InputMaybe<OrderDirection>;
  graphql?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  method?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
  userID?: InputMaybe<OrderDirection>;
};

export type ServerErrorUpdateArgs = {
  data: ServerErrorUpdateInput;
  where: ServerErrorWhereUniqueInput;
};

export type ServerErrorUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  graphql?: InputMaybe<Scalars["String"]["input"]>;
  method?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  userID?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServerErrorWhereInput = {
  AND?: InputMaybe<Array<ServerErrorWhereInput>>;
  NOT?: InputMaybe<Array<ServerErrorWhereInput>>;
  OR?: InputMaybe<Array<ServerErrorWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  graphql?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  method?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userID?: InputMaybe<StringFilter>;
};

export type ServerErrorWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ServerLog = {
  __typename?: "ServerLog";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  elapsed?: Maybe<Scalars["String"]["output"]>;
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  graphql?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  method?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  userID?: Maybe<Scalars["String"]["output"]>;
};

export type ServerLogCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  elapsed?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  graphql?: InputMaybe<Scalars["String"]["input"]>;
  method?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  userID?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServerLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  elapsed?: InputMaybe<OrderDirection>;
  errorMessage?: InputMaybe<OrderDirection>;
  graphql?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  method?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
  userID?: InputMaybe<OrderDirection>;
};

export type ServerLogUpdateArgs = {
  data: ServerLogUpdateInput;
  where: ServerLogWhereUniqueInput;
};

export type ServerLogUpdateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  elapsed?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  graphql?: InputMaybe<Scalars["String"]["input"]>;
  method?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  userID?: InputMaybe<Scalars["String"]["input"]>;
};

export type ServerLogWhereInput = {
  AND?: InputMaybe<Array<ServerLogWhereInput>>;
  NOT?: InputMaybe<Array<ServerLogWhereInput>>;
  OR?: InputMaybe<Array<ServerLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  elapsed?: InputMaybe<StringFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  graphql?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  method?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userID?: InputMaybe<StringFilter>;
};

export type ServerLogWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  adminPassword?: Maybe<PasswordState>;
  avatar?: Maybe<ImageFieldOutput>;
  botConfigs?: Maybe<Array<BotConfig>>;
  botConfigsCount?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  groups?: Maybe<Array<GroupMember>>;
  groupsCount?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<UserRoleType>;
};

export type UserBotConfigsArgs = {
  cursor?: InputMaybe<BotConfigWhereUniqueInput>;
  orderBy?: Array<BotConfigOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: BotConfigWhereInput;
};

export type UserBotConfigsCountArgs = {
  where?: BotConfigWhereInput;
};

export type UserGroupsArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars["Int"]["input"];
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: GroupMemberWhereInput;
};

export type UserGroupsCountArgs = {
  where?: GroupMemberWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  message: Scalars["String"]["output"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"]["output"];
};

export type UserCreateInput = {
  adminPassword?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<ImageFieldInput>;
  botConfigs?: InputMaybe<BotConfigRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  groups?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<UserRoleType>;
};

export type UserLocalAuthWhereInput = {
  AND?: InputMaybe<Array<UserLocalAuthWhereInput>>;
  NOT?: InputMaybe<Array<UserLocalAuthWhereInput>>;
  OR?: InputMaybe<Array<UserLocalAuthWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum UserRoleType {
  Admin = "admin",
  Dev = "dev",
  User = "user",
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  adminPassword?: InputMaybe<Scalars["String"]["input"]>;
  avatar?: InputMaybe<ImageFieldInput>;
  botConfigs?: InputMaybe<BotConfigRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  groups?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<UserRoleType>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  adminPassword?: InputMaybe<PasswordFilter>;
  botConfigs?: InputMaybe<BotConfigManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  groups?: InputMaybe<GroupMemberManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  localAuth?: InputMaybe<UserLocalAuthWhereInput>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type AuthenticateUserWithPasswordMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword?:
    | { __typename?: "UserAuthenticationWithPasswordFailure" }
    | {
        __typename?: "UserAuthenticationWithPasswordSuccess";
        sessionToken: string;
        item: {
          __typename?: "User";
          id: string;
          email?: string | null;
          displayName?: string | null;
        };
      }
    | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    lastName?: string | null;
    displayName?: string | null;
    email?: string | null;
    role?: UserRoleType | null;
    createdAt?: any | null;
    groupsCount?: number | null;
  } | null;
};

export const AuthenticateUserWithPasswordDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AuthenticateUserWithPassword" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "adminPassword" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "authenticateUserWithPassword" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "adminPassword" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "adminPassword" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: {
                      kind: "Name",
                      value: "UserAuthenticationWithPasswordSuccess",
                    },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sessionToken" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayName" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AuthenticateUserWithPasswordMutation,
  AuthenticateUserWithPasswordMutationVariables
>;
export const UserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "User" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "authenticatedItem" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "User" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "groupsCount" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
