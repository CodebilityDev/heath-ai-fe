/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AiKey = {
  __typename?: 'AIKey';
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  openapiKey?: Maybe<Scalars['String']['output']>;
};

export type AiKeyCreateInput = {
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  openapiKey?: InputMaybe<Scalars['String']['input']>;
};

export type AiKeyOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  openapiKey?: InputMaybe<OrderDirection>;
};

export type AiKeyRelateToOneForCreateInput = {
  connect?: InputMaybe<AiKeyWhereUniqueInput>;
  create?: InputMaybe<AiKeyCreateInput>;
};

export type AiKeyRelateToOneForUpdateInput = {
  connect?: InputMaybe<AiKeyWhereUniqueInput>;
  create?: InputMaybe<AiKeyCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AiKeyUpdateArgs = {
  data: AiKeyUpdateInput;
  where: AiKeyWhereUniqueInput;
};

export type AiKeyUpdateInput = {
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  openapiKey?: InputMaybe<Scalars['String']['input']>;
};

export type AiKeyWhereInput = {
  AND?: InputMaybe<Array<AiKeyWhereInput>>;
  NOT?: InputMaybe<Array<AiKeyWhereInput>>;
  OR?: InputMaybe<Array<AiKeyWhereInput>>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  openapiKey?: InputMaybe<StringFilter>;
};

export type AiKeyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type BotConfig = {
  __typename?: 'BotConfig';
  companyStatement?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  healthInsuranceCarriers?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  noZipCodeMessage?: Maybe<Scalars['String']['output']>;
  presentationStrategy?: Maybe<Scalars['String']['output']>;
  priorityPlan?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<ChatSession>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  specificQuestions?: Maybe<Scalars['String']['output']>;
  summaryPrompt?: Maybe<Scalars['String']['output']>;
  tonestyle?: Maybe<Scalars['String']['output']>;
  welcomeMessage?: Maybe<Scalars['String']['output']>;
  welcomeMessageFormat?: Maybe<Scalars['String']['output']>;
};


export type BotConfigSessionsArgs = {
  cursor?: InputMaybe<ChatSessionWhereUniqueInput>;
  orderBy?: Array<ChatSessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChatSessionWhereInput;
};


export type BotConfigSessionsCountArgs = {
  where?: ChatSessionWhereInput;
};

export type BotConfigCreateInput = {
  companyStatement?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  healthInsuranceCarriers?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  noZipCodeMessage?: InputMaybe<Scalars['String']['input']>;
  presentationStrategy?: InputMaybe<Scalars['String']['input']>;
  priorityPlan?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<ChatSessionRelateToManyForCreateInput>;
  specificQuestions?: InputMaybe<Scalars['String']['input']>;
  summaryPrompt?: InputMaybe<Scalars['String']['input']>;
  tonestyle?: InputMaybe<Scalars['String']['input']>;
  welcomeMessage?: InputMaybe<Scalars['String']['input']>;
  welcomeMessageFormat?: InputMaybe<Scalars['String']['input']>;
};

export type BotConfigOrderByInput = {
  companyStatement?: InputMaybe<OrderDirection>;
  healthInsuranceCarriers?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  noZipCodeMessage?: InputMaybe<OrderDirection>;
  presentationStrategy?: InputMaybe<OrderDirection>;
  priorityPlan?: InputMaybe<OrderDirection>;
  specificQuestions?: InputMaybe<OrderDirection>;
  summaryPrompt?: InputMaybe<OrderDirection>;
  tonestyle?: InputMaybe<OrderDirection>;
  welcomeMessage?: InputMaybe<OrderDirection>;
  welcomeMessageFormat?: InputMaybe<OrderDirection>;
};

export type BotConfigRelateToOneForCreateInput = {
  connect?: InputMaybe<BotConfigWhereUniqueInput>;
  create?: InputMaybe<BotConfigCreateInput>;
};

export type BotConfigRelateToOneForUpdateInput = {
  connect?: InputMaybe<BotConfigWhereUniqueInput>;
  create?: InputMaybe<BotConfigCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BotConfigUpdateArgs = {
  data: BotConfigUpdateInput;
  where: BotConfigWhereUniqueInput;
};

export type BotConfigUpdateInput = {
  companyStatement?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  healthInsuranceCarriers?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  noZipCodeMessage?: InputMaybe<Scalars['String']['input']>;
  presentationStrategy?: InputMaybe<Scalars['String']['input']>;
  priorityPlan?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<ChatSessionRelateToManyForUpdateInput>;
  specificQuestions?: InputMaybe<Scalars['String']['input']>;
  summaryPrompt?: InputMaybe<Scalars['String']['input']>;
  tonestyle?: InputMaybe<Scalars['String']['input']>;
  welcomeMessage?: InputMaybe<Scalars['String']['input']>;
  welcomeMessageFormat?: InputMaybe<Scalars['String']['input']>;
};

export type BotConfigWhereInput = {
  AND?: InputMaybe<Array<BotConfigWhereInput>>;
  NOT?: InputMaybe<Array<BotConfigWhereInput>>;
  OR?: InputMaybe<Array<BotConfigWhereInput>>;
  companyStatement?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupWhereInput>;
  healthInsuranceCarriers?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  noZipCodeMessage?: InputMaybe<StringFilter>;
  presentationStrategy?: InputMaybe<StringFilter>;
  priorityPlan?: InputMaybe<StringFilter>;
  sessions?: InputMaybe<ChatSessionManyRelationFilter>;
  specificQuestions?: InputMaybe<StringFilter>;
  summaryPrompt?: InputMaybe<StringFilter>;
  tonestyle?: InputMaybe<StringFilter>;
  welcomeMessage?: InputMaybe<StringFilter>;
  welcomeMessageFormat?: InputMaybe<StringFilter>;
};

export type BotConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ChatConversationSession = {
  __typename?: 'ChatConversationSession';
  botConfig?: Maybe<ConversationBotConfig>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  sessionData?: Maybe<Scalars['JSON']['output']>;
};

export type ChatConversationSessionCreateInput = {
  botConfig?: InputMaybe<ConversationBotConfigRelateToOneForCreateInput>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  sessionData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ChatConversationSessionManyRelationFilter = {
  every?: InputMaybe<ChatConversationSessionWhereInput>;
  none?: InputMaybe<ChatConversationSessionWhereInput>;
  some?: InputMaybe<ChatConversationSessionWhereInput>;
};

export type ChatConversationSessionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  keywords?: InputMaybe<OrderDirection>;
};

export type ChatConversationSessionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ChatConversationSessionWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatConversationSessionCreateInput>>;
};

export type ChatConversationSessionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ChatConversationSessionWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatConversationSessionCreateInput>>;
  disconnect?: InputMaybe<Array<ChatConversationSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatConversationSessionWhereUniqueInput>>;
};

export type ChatConversationSessionUpdateArgs = {
  data: ChatConversationSessionUpdateInput;
  where: ChatConversationSessionWhereUniqueInput;
};

export type ChatConversationSessionUpdateInput = {
  botConfig?: InputMaybe<ConversationBotConfigRelateToOneForUpdateInput>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  sessionData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ChatConversationSessionWhereInput = {
  AND?: InputMaybe<Array<ChatConversationSessionWhereInput>>;
  NOT?: InputMaybe<Array<ChatConversationSessionWhereInput>>;
  OR?: InputMaybe<Array<ChatConversationSessionWhereInput>>;
  botConfig?: InputMaybe<ConversationBotConfigWhereInput>;
  id?: InputMaybe<IdFilter>;
  keywords?: InputMaybe<StringFilter>;
};

export type ChatConversationSessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ChatSession = {
  __typename?: 'ChatSession';
  botConfig?: Maybe<BotConfig>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  sessionData?: Maybe<Scalars['JSON']['output']>;
};

export type ChatSessionCreateInput = {
  botConfig?: InputMaybe<BotConfigRelateToOneForCreateInput>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  sessionData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ChatSessionManyRelationFilter = {
  every?: InputMaybe<ChatSessionWhereInput>;
  none?: InputMaybe<ChatSessionWhereInput>;
  some?: InputMaybe<ChatSessionWhereInput>;
};

export type ChatSessionOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  keywords?: InputMaybe<OrderDirection>;
};

export type ChatSessionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatSessionCreateInput>>;
};

export type ChatSessionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatSessionCreateInput>>;
  disconnect?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatSessionWhereUniqueInput>>;
};

export type ChatSessionUpdateArgs = {
  data: ChatSessionUpdateInput;
  where: ChatSessionWhereUniqueInput;
};

export type ChatSessionUpdateInput = {
  botConfig?: InputMaybe<BotConfigRelateToOneForUpdateInput>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  sessionData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ChatSessionWhereInput = {
  AND?: InputMaybe<Array<ChatSessionWhereInput>>;
  NOT?: InputMaybe<Array<ChatSessionWhereInput>>;
  OR?: InputMaybe<Array<ChatSessionWhereInput>>;
  botConfig?: InputMaybe<BotConfigWhereInput>;
  id?: InputMaybe<IdFilter>;
  keywords?: InputMaybe<StringFilter>;
};

export type ChatSessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ClientItemAuthenticationWithPasswordFailure = {
  __typename?: 'ClientItemAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type ClientItemAuthenticationWithPasswordResult = ClientItemAuthenticationWithPasswordFailure | ClientItemAuthenticationWithPasswordSuccess;

export type ClientItemAuthenticationWithPasswordSuccess = {
  __typename?: 'ClientItemAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type ConversationBotConfig = {
  __typename?: 'ConversationBotConfig';
  companyStatement?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  healthInsuranceCarriers?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  noZipCodeMessage?: Maybe<Scalars['String']['output']>;
  presentationStrategy?: Maybe<Scalars['String']['output']>;
  priorityPlan?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<ChatConversationSession>>;
  sessionsCount?: Maybe<Scalars['Int']['output']>;
  specificQuestions?: Maybe<Scalars['String']['output']>;
  summaryPrompt?: Maybe<Scalars['String']['output']>;
  tonestyle?: Maybe<Scalars['String']['output']>;
  welcomeMessage?: Maybe<Scalars['String']['output']>;
  welcomeMessageFormat?: Maybe<Scalars['String']['output']>;
};


export type ConversationBotConfigSessionsArgs = {
  cursor?: InputMaybe<ChatConversationSessionWhereUniqueInput>;
  orderBy?: Array<ChatConversationSessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChatConversationSessionWhereInput;
};


export type ConversationBotConfigSessionsCountArgs = {
  where?: ChatConversationSessionWhereInput;
};

export type ConversationBotConfigCreateInput = {
  companyStatement?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  healthInsuranceCarriers?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  noZipCodeMessage?: InputMaybe<Scalars['String']['input']>;
  presentationStrategy?: InputMaybe<Scalars['String']['input']>;
  priorityPlan?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<ChatConversationSessionRelateToManyForCreateInput>;
  specificQuestions?: InputMaybe<Scalars['String']['input']>;
  summaryPrompt?: InputMaybe<Scalars['String']['input']>;
  tonestyle?: InputMaybe<Scalars['String']['input']>;
  welcomeMessage?: InputMaybe<Scalars['String']['input']>;
  welcomeMessageFormat?: InputMaybe<Scalars['String']['input']>;
};

export type ConversationBotConfigOrderByInput = {
  companyStatement?: InputMaybe<OrderDirection>;
  healthInsuranceCarriers?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  noZipCodeMessage?: InputMaybe<OrderDirection>;
  presentationStrategy?: InputMaybe<OrderDirection>;
  priorityPlan?: InputMaybe<OrderDirection>;
  specificQuestions?: InputMaybe<OrderDirection>;
  summaryPrompt?: InputMaybe<OrderDirection>;
  tonestyle?: InputMaybe<OrderDirection>;
  welcomeMessage?: InputMaybe<OrderDirection>;
  welcomeMessageFormat?: InputMaybe<OrderDirection>;
};

export type ConversationBotConfigRelateToOneForCreateInput = {
  connect?: InputMaybe<ConversationBotConfigWhereUniqueInput>;
  create?: InputMaybe<ConversationBotConfigCreateInput>;
};

export type ConversationBotConfigRelateToOneForUpdateInput = {
  connect?: InputMaybe<ConversationBotConfigWhereUniqueInput>;
  create?: InputMaybe<ConversationBotConfigCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConversationBotConfigUpdateArgs = {
  data: ConversationBotConfigUpdateInput;
  where: ConversationBotConfigWhereUniqueInput;
};

export type ConversationBotConfigUpdateInput = {
  companyStatement?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  healthInsuranceCarriers?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  noZipCodeMessage?: InputMaybe<Scalars['String']['input']>;
  presentationStrategy?: InputMaybe<Scalars['String']['input']>;
  priorityPlan?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<ChatConversationSessionRelateToManyForUpdateInput>;
  specificQuestions?: InputMaybe<Scalars['String']['input']>;
  summaryPrompt?: InputMaybe<Scalars['String']['input']>;
  tonestyle?: InputMaybe<Scalars['String']['input']>;
  welcomeMessage?: InputMaybe<Scalars['String']['input']>;
  welcomeMessageFormat?: InputMaybe<Scalars['String']['input']>;
};

export type ConversationBotConfigWhereInput = {
  AND?: InputMaybe<Array<ConversationBotConfigWhereInput>>;
  NOT?: InputMaybe<Array<ConversationBotConfigWhereInput>>;
  OR?: InputMaybe<Array<ConversationBotConfigWhereInput>>;
  companyStatement?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupWhereInput>;
  healthInsuranceCarriers?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  noZipCodeMessage?: InputMaybe<StringFilter>;
  presentationStrategy?: InputMaybe<StringFilter>;
  priorityPlan?: InputMaybe<StringFilter>;
  sessions?: InputMaybe<ChatConversationSessionManyRelationFilter>;
  specificQuestions?: InputMaybe<StringFilter>;
  summaryPrompt?: InputMaybe<StringFilter>;
  tonestyle?: InputMaybe<StringFilter>;
  welcomeMessage?: InputMaybe<StringFilter>;
  welcomeMessageFormat?: InputMaybe<StringFilter>;
};

export type ConversationBotConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type GhlAccess = {
  __typename?: 'GHLAccess';
  companyId?: Maybe<Scalars['String']['output']>;
  ghsUserId?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  locationId?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GhlAccessCreateInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  ghsUserId?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GhlAccessOrderByInput = {
  companyId?: InputMaybe<OrderDirection>;
  ghsUserId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  locationId?: InputMaybe<OrderDirection>;
  planId?: InputMaybe<OrderDirection>;
  refreshToken?: InputMaybe<OrderDirection>;
  scope?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type GhlAccessRelateToOneForCreateInput = {
  connect?: InputMaybe<GhlAccessWhereUniqueInput>;
  create?: InputMaybe<GhlAccessCreateInput>;
};

export type GhlAccessRelateToOneForUpdateInput = {
  connect?: InputMaybe<GhlAccessWhereUniqueInput>;
  create?: InputMaybe<GhlAccessCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GhlAccessUpdateArgs = {
  data: GhlAccessUpdateInput;
  where: GhlAccessWhereUniqueInput;
};

export type GhlAccessUpdateInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  ghsUserId?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  planId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GhlAccessWhereInput = {
  AND?: InputMaybe<Array<GhlAccessWhereInput>>;
  NOT?: InputMaybe<Array<GhlAccessWhereInput>>;
  OR?: InputMaybe<Array<GhlAccessWhereInput>>;
  companyId?: InputMaybe<StringFilter>;
  ghsUserId?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  locationId?: InputMaybe<StringFilter>;
  planId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type GhlAccessWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GhlContact = {
  __typename?: 'GHLContact';
  businessId?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  dateAdded?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  locationId?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

export type GhlContactList = {
  __typename?: 'GHLContactList';
  contacts?: Maybe<Array<Maybe<GhlContact>>>;
};

export type GhlCustomField = {
  __typename?: 'GHLCustomField';
  dataType?: Maybe<Scalars['String']['output']>;
  fieldKey?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isAllowedCustomOption?: Maybe<Scalars['Boolean']['output']>;
  isMultiFileAllowed?: Maybe<Scalars['Boolean']['output']>;
  locationId?: Maybe<Scalars['String']['output']>;
  maxFileLimit?: Maybe<Scalars['Float']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  picklistImageOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  picklistOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  placeholder?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

export type GhlCustomFieldData = {
  __typename?: 'GHLCustomFieldData';
  customFields?: Maybe<Array<Maybe<GhlCustomField>>>;
};

export type GhlMeReturn = {
  __typename?: 'GHLMeReturn';
  address: Scalars['String']['output'];
  business: GhlMeReturnBusiness;
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

export type GhlMeReturnBusiness = {
  __typename?: 'GHLMeReturnBusiness';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
  website: Scalars['String']['output'];
};

export type GhlMessageReturn = {
  __typename?: 'GHLMessageReturn';
  contactID: Scalars['String']['output'];
  message: Scalars['String']['output'];
  thread: Scalars['String']['output'];
};

export type Ghl_AccessTokenInput = {
  groupID: Scalars['String']['input'];
};

export type Ghl_BreakCustomFieldsCacheInput = {
  groupID: Scalars['String']['input'];
};

export type Ghl_GetContactsInput = {
  groupID: Scalars['String']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Ghl_GetCustomFieldsInput = {
  groupID: Scalars['String']['input'];
};

export type Ghl_GetMessagesInput = {
  conversationID: Scalars['String']['input'];
  groupID: Scalars['String']['input'];
};

export type Ghl_MeInput = {
  groupID: Scalars['String']['input'];
};

export type Ghl_SendMessageInput = {
  actualSend?: InputMaybe<Scalars['Boolean']['input']>;
  agent_first_name?: InputMaybe<Scalars['String']['input']>;
  agent_last_name?: InputMaybe<Scalars['String']['input']>;
  contactID: Scalars['String']['input'];
  dob?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  groupID: Scalars['String']['input'];
  has_tax_dependents?: InputMaybe<Scalars['String']['input']>;
  how_many_people_in_your_household_need_to_be_on_the_plan?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  location_id: Scalars['String']['input'];
  number_of_tax_dependents?: InputMaybe<Scalars['String']['input']>;
  projected_annual_household_income?: InputMaybe<Scalars['String']['input']>;
  spouse_name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  yearly_income?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type Ghl_SetCustomFieldsInput = {
  customFields: Array<InputMaybe<Ghl_SetCustomFieldsInputCustomFields>>;
  groupID: Scalars['String']['input'];
};

export type Ghl_SetCustomFieldsInputCustomFields = {
  action: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Group = {
  __typename?: 'Group';
  agent_firstName?: Maybe<Scalars['String']['output']>;
  agent_lastName?: Maybe<Scalars['String']['output']>;
  aiKey?: Maybe<AiKey>;
  aiLogs?: Maybe<Array<GroupAiLog>>;
  aiLogsCount?: Maybe<Scalars['Int']['output']>;
  availability_enabled?: Maybe<Scalars['Boolean']['output']>;
  availability_end?: Maybe<Scalars['Int']['output']>;
  availability_start?: Maybe<Scalars['Int']['output']>;
  botAssistantName?: Maybe<Scalars['String']['output']>;
  botConfig?: Maybe<BotConfig>;
  check_dndNotice?: Maybe<Scalars['Boolean']['output']>;
  contactConfigs?: Maybe<Scalars['JSON']['output']>;
  conversationBotConfig?: Maybe<ConversationBotConfig>;
  dndNoticeMessage?: Maybe<Scalars['String']['output']>;
  enable_botIsAssistant?: Maybe<Scalars['Boolean']['output']>;
  enable_checkDnd?: Maybe<Scalars['Boolean']['output']>;
  enable_checkProfanity?: Maybe<Scalars['Boolean']['output']>;
  enable_globalAutoReply?: Maybe<Scalars['Boolean']['output']>;
  enable_globalContactUpdate?: Maybe<Scalars['Boolean']['output']>;
  enable_globalWelcome?: Maybe<Scalars['Boolean']['output']>;
  enable_noSSN?: Maybe<Scalars['Boolean']['output']>;
  enable_stopNotice?: Maybe<Scalars['Boolean']['output']>;
  ghlAccess?: Maybe<GhlAccess>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<GroupMember>>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  snippets?: Maybe<Array<Snippet>>;
  snippetsCount?: Maybe<Scalars['Int']['output']>;
  user_contextFields?: Maybe<Scalars['JSON']['output']>;
};


export type GroupAiLogsArgs = {
  cursor?: InputMaybe<GroupAiLogWhereUniqueInput>;
  orderBy?: Array<GroupAiLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupAiLogWhereInput;
};


export type GroupAiLogsCountArgs = {
  where?: GroupAiLogWhereInput;
};


export type GroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type GroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};


export type GroupSnippetsArgs = {
  cursor?: InputMaybe<SnippetWhereUniqueInput>;
  orderBy?: Array<SnippetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SnippetWhereInput;
};


export type GroupSnippetsCountArgs = {
  where?: SnippetWhereInput;
};

export type GroupAiLog = {
  __typename?: 'GroupAILog';
  contactID?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  locationID?: Maybe<Scalars['String']['output']>;
  locationName?: Maybe<Scalars['String']['output']>;
  log?: Maybe<Scalars['JSON']['output']>;
  modelID?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type GroupAiLogCreateInput = {
  contactID?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  locationID?: InputMaybe<Scalars['String']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Scalars['JSON']['input']>;
  modelID?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GroupAiLogManyRelationFilter = {
  every?: InputMaybe<GroupAiLogWhereInput>;
  none?: InputMaybe<GroupAiLogWhereInput>;
  some?: InputMaybe<GroupAiLogWhereInput>;
};

export type GroupAiLogOrderByInput = {
  contactID?: InputMaybe<OrderDirection>;
  contactName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  locationID?: InputMaybe<OrderDirection>;
  locationName?: InputMaybe<OrderDirection>;
  modelID?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type GroupAiLogRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupAiLogWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupAiLogCreateInput>>;
};

export type GroupAiLogRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupAiLogWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupAiLogCreateInput>>;
  disconnect?: InputMaybe<Array<GroupAiLogWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupAiLogWhereUniqueInput>>;
};

export type GroupAiLogUpdateArgs = {
  data: GroupAiLogUpdateInput;
  where: GroupAiLogWhereUniqueInput;
};

export type GroupAiLogUpdateInput = {
  contactID?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  locationID?: InputMaybe<Scalars['String']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Scalars['JSON']['input']>;
  modelID?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GroupAiLogWhereInput = {
  AND?: InputMaybe<Array<GroupAiLogWhereInput>>;
  NOT?: InputMaybe<Array<GroupAiLogWhereInput>>;
  OR?: InputMaybe<Array<GroupAiLogWhereInput>>;
  contactID?: InputMaybe<StringFilter>;
  contactName?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  locationID?: InputMaybe<StringFilter>;
  locationName?: InputMaybe<StringFilter>;
  modelID?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type GroupAiLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupCreateInput = {
  agent_firstName?: InputMaybe<Scalars['String']['input']>;
  agent_lastName?: InputMaybe<Scalars['String']['input']>;
  aiKey?: InputMaybe<AiKeyRelateToOneForCreateInput>;
  aiLogs?: InputMaybe<GroupAiLogRelateToManyForCreateInput>;
  availability_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  availability_end?: InputMaybe<Scalars['Int']['input']>;
  availability_start?: InputMaybe<Scalars['Int']['input']>;
  botAssistantName?: InputMaybe<Scalars['String']['input']>;
  botConfig?: InputMaybe<BotConfigRelateToOneForCreateInput>;
  check_dndNotice?: InputMaybe<Scalars['Boolean']['input']>;
  contactConfigs?: InputMaybe<Scalars['JSON']['input']>;
  conversationBotConfig?: InputMaybe<ConversationBotConfigRelateToOneForCreateInput>;
  dndNoticeMessage?: InputMaybe<Scalars['String']['input']>;
  enable_botIsAssistant?: InputMaybe<Scalars['Boolean']['input']>;
  enable_checkDnd?: InputMaybe<Scalars['Boolean']['input']>;
  enable_checkProfanity?: InputMaybe<Scalars['Boolean']['input']>;
  enable_globalAutoReply?: InputMaybe<Scalars['Boolean']['input']>;
  enable_globalContactUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  enable_globalWelcome?: InputMaybe<Scalars['Boolean']['input']>;
  enable_noSSN?: InputMaybe<Scalars['Boolean']['input']>;
  enable_stopNotice?: InputMaybe<Scalars['Boolean']['input']>;
  ghlAccess?: InputMaybe<GhlAccessRelateToOneForCreateInput>;
  members?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  snippets?: InputMaybe<SnippetRelateToManyForCreateInput>;
  user_contextFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type GroupMember = {
  __typename?: 'GroupMember';
  access?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
};

export type GroupMemberCreateInput = {
  access?: InputMaybe<Scalars['Int']['input']>;
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
  access?: InputMaybe<Scalars['Int']['input']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupOrderByInput = {
  agent_firstName?: InputMaybe<OrderDirection>;
  agent_lastName?: InputMaybe<OrderDirection>;
  availability_enabled?: InputMaybe<OrderDirection>;
  availability_end?: InputMaybe<OrderDirection>;
  availability_start?: InputMaybe<OrderDirection>;
  botAssistantName?: InputMaybe<OrderDirection>;
  check_dndNotice?: InputMaybe<OrderDirection>;
  dndNoticeMessage?: InputMaybe<OrderDirection>;
  enable_botIsAssistant?: InputMaybe<OrderDirection>;
  enable_checkDnd?: InputMaybe<OrderDirection>;
  enable_checkProfanity?: InputMaybe<OrderDirection>;
  enable_globalAutoReply?: InputMaybe<OrderDirection>;
  enable_globalContactUpdate?: InputMaybe<OrderDirection>;
  enable_globalWelcome?: InputMaybe<OrderDirection>;
  enable_noSSN?: InputMaybe<OrderDirection>;
  enable_stopNotice?: InputMaybe<OrderDirection>;
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
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupUpdateArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateInput = {
  agent_firstName?: InputMaybe<Scalars['String']['input']>;
  agent_lastName?: InputMaybe<Scalars['String']['input']>;
  aiKey?: InputMaybe<AiKeyRelateToOneForUpdateInput>;
  aiLogs?: InputMaybe<GroupAiLogRelateToManyForUpdateInput>;
  availability_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  availability_end?: InputMaybe<Scalars['Int']['input']>;
  availability_start?: InputMaybe<Scalars['Int']['input']>;
  botAssistantName?: InputMaybe<Scalars['String']['input']>;
  botConfig?: InputMaybe<BotConfigRelateToOneForUpdateInput>;
  check_dndNotice?: InputMaybe<Scalars['Boolean']['input']>;
  contactConfigs?: InputMaybe<Scalars['JSON']['input']>;
  conversationBotConfig?: InputMaybe<ConversationBotConfigRelateToOneForUpdateInput>;
  dndNoticeMessage?: InputMaybe<Scalars['String']['input']>;
  enable_botIsAssistant?: InputMaybe<Scalars['Boolean']['input']>;
  enable_checkDnd?: InputMaybe<Scalars['Boolean']['input']>;
  enable_checkProfanity?: InputMaybe<Scalars['Boolean']['input']>;
  enable_globalAutoReply?: InputMaybe<Scalars['Boolean']['input']>;
  enable_globalContactUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  enable_globalWelcome?: InputMaybe<Scalars['Boolean']['input']>;
  enable_noSSN?: InputMaybe<Scalars['Boolean']['input']>;
  enable_stopNotice?: InputMaybe<Scalars['Boolean']['input']>;
  ghlAccess?: InputMaybe<GhlAccessRelateToOneForUpdateInput>;
  members?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  snippets?: InputMaybe<SnippetRelateToManyForUpdateInput>;
  user_contextFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  agent_firstName?: InputMaybe<StringFilter>;
  agent_lastName?: InputMaybe<StringFilter>;
  aiKey?: InputMaybe<AiKeyWhereInput>;
  aiLogs?: InputMaybe<GroupAiLogManyRelationFilter>;
  availability_enabled?: InputMaybe<BooleanFilter>;
  availability_end?: InputMaybe<IntNullableFilter>;
  availability_start?: InputMaybe<IntNullableFilter>;
  botAssistantName?: InputMaybe<StringFilter>;
  botConfig?: InputMaybe<BotConfigWhereInput>;
  check_dndNotice?: InputMaybe<BooleanFilter>;
  conversationBotConfig?: InputMaybe<ConversationBotConfigWhereInput>;
  dndNoticeMessage?: InputMaybe<StringFilter>;
  enable_botIsAssistant?: InputMaybe<BooleanFilter>;
  enable_checkDnd?: InputMaybe<BooleanFilter>;
  enable_checkProfanity?: InputMaybe<BooleanFilter>;
  enable_globalAutoReply?: InputMaybe<BooleanFilter>;
  enable_globalContactUpdate?: InputMaybe<BooleanFilter>;
  enable_globalWelcome?: InputMaybe<BooleanFilter>;
  enable_noSSN?: InputMaybe<BooleanFilter>;
  enable_stopNotice?: InputMaybe<BooleanFilter>;
  ghlAccess?: InputMaybe<GhlAccessWhereInput>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<GroupMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  snippets?: InputMaybe<SnippetManyRelationFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authclient_changePassword?: Maybe<Scalars['Boolean']['output']>;
  authclient_login?: Maybe<ClientItemAuthenticationWithPasswordResult>;
  authclient_register?: Maybe<Scalars['Boolean']['output']>;
  authclient_requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  authclient_resetPassword?: Maybe<Scalars['Boolean']['output']>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAIKey?: Maybe<AiKey>;
  createAIKeys?: Maybe<Array<Maybe<AiKey>>>;
  createBotConfig?: Maybe<BotConfig>;
  createBotConfigs?: Maybe<Array<Maybe<BotConfig>>>;
  createChatConversationSession?: Maybe<ChatConversationSession>;
  createChatConversationSessions?: Maybe<Array<Maybe<ChatConversationSession>>>;
  createChatSession?: Maybe<ChatSession>;
  createChatSessions?: Maybe<Array<Maybe<ChatSession>>>;
  createConversationBotConfig?: Maybe<ConversationBotConfig>;
  createConversationBotConfigs?: Maybe<Array<Maybe<ConversationBotConfig>>>;
  createGHLAccess?: Maybe<GhlAccess>;
  createGHLAccesses?: Maybe<Array<Maybe<GhlAccess>>>;
  createGroup?: Maybe<Group>;
  createGroupAILog?: Maybe<GroupAiLog>;
  createGroupAILogs?: Maybe<Array<Maybe<GroupAiLog>>>;
  createGroupMember?: Maybe<GroupMember>;
  createGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  createGroups?: Maybe<Array<Maybe<Group>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createServerError?: Maybe<ServerError>;
  createServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  createServerLog?: Maybe<ServerLog>;
  createServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  createSnippet?: Maybe<Snippet>;
  createSnippets?: Maybe<Array<Maybe<Snippet>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAIKey?: Maybe<AiKey>;
  deleteAIKeys?: Maybe<Array<Maybe<AiKey>>>;
  deleteBotConfig?: Maybe<BotConfig>;
  deleteBotConfigs?: Maybe<Array<Maybe<BotConfig>>>;
  deleteChatConversationSession?: Maybe<ChatConversationSession>;
  deleteChatConversationSessions?: Maybe<Array<Maybe<ChatConversationSession>>>;
  deleteChatSession?: Maybe<ChatSession>;
  deleteChatSessions?: Maybe<Array<Maybe<ChatSession>>>;
  deleteConversationBotConfig?: Maybe<ConversationBotConfig>;
  deleteConversationBotConfigs?: Maybe<Array<Maybe<ConversationBotConfig>>>;
  deleteGHLAccess?: Maybe<GhlAccess>;
  deleteGHLAccesses?: Maybe<Array<Maybe<GhlAccess>>>;
  deleteGroup?: Maybe<Group>;
  deleteGroupAILog?: Maybe<GroupAiLog>;
  deleteGroupAILogs?: Maybe<Array<Maybe<GroupAiLog>>>;
  deleteGroupMember?: Maybe<GroupMember>;
  deleteGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  deleteGroups?: Maybe<Array<Maybe<Group>>>;
  deleteServerError?: Maybe<ServerError>;
  deleteServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  deleteServerLog?: Maybe<ServerLog>;
  deleteServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  deleteSnippet?: Maybe<Snippet>;
  deleteSnippets?: Maybe<Array<Maybe<Snippet>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  ghl_breakCustomFieldsCache?: Maybe<Scalars['Boolean']['output']>;
  ghl_sendMessage?: Maybe<GhlMessageReturn>;
  ghl_setCustomFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  queue_deletePendingMessage?: Maybe<QueuePendingMessages>;
  updateAIKey?: Maybe<AiKey>;
  updateAIKeys?: Maybe<Array<Maybe<AiKey>>>;
  updateBotConfig?: Maybe<BotConfig>;
  updateBotConfigs?: Maybe<Array<Maybe<BotConfig>>>;
  updateChatConversationSession?: Maybe<ChatConversationSession>;
  updateChatConversationSessions?: Maybe<Array<Maybe<ChatConversationSession>>>;
  updateChatSession?: Maybe<ChatSession>;
  updateChatSessions?: Maybe<Array<Maybe<ChatSession>>>;
  updateConversationBotConfig?: Maybe<ConversationBotConfig>;
  updateConversationBotConfigs?: Maybe<Array<Maybe<ConversationBotConfig>>>;
  updateGHLAccess?: Maybe<GhlAccess>;
  updateGHLAccesses?: Maybe<Array<Maybe<GhlAccess>>>;
  updateGroup?: Maybe<Group>;
  updateGroupAILog?: Maybe<GroupAiLog>;
  updateGroupAILogs?: Maybe<Array<Maybe<GroupAiLog>>>;
  updateGroupMember?: Maybe<GroupMember>;
  updateGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  updateGroups?: Maybe<Array<Maybe<Group>>>;
  updateServerError?: Maybe<ServerError>;
  updateServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  updateServerLog?: Maybe<ServerLog>;
  updateServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  updateSnippet?: Maybe<Snippet>;
  updateSnippets?: Maybe<Array<Maybe<Snippet>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthclient_ChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationAuthclient_LoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAuthclient_RegisterArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationAuthclient_RequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationAuthclient_ResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  adminPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationCreateAiKeyArgs = {
  data: AiKeyCreateInput;
};


export type MutationCreateAiKeysArgs = {
  data: Array<AiKeyCreateInput>;
};


export type MutationCreateBotConfigArgs = {
  data: BotConfigCreateInput;
};


export type MutationCreateBotConfigsArgs = {
  data: Array<BotConfigCreateInput>;
};


export type MutationCreateChatConversationSessionArgs = {
  data: ChatConversationSessionCreateInput;
};


export type MutationCreateChatConversationSessionsArgs = {
  data: Array<ChatConversationSessionCreateInput>;
};


export type MutationCreateChatSessionArgs = {
  data: ChatSessionCreateInput;
};


export type MutationCreateChatSessionsArgs = {
  data: Array<ChatSessionCreateInput>;
};


export type MutationCreateConversationBotConfigArgs = {
  data: ConversationBotConfigCreateInput;
};


export type MutationCreateConversationBotConfigsArgs = {
  data: Array<ConversationBotConfigCreateInput>;
};


export type MutationCreateGhlAccessArgs = {
  data: GhlAccessCreateInput;
};


export type MutationCreateGhlAccessesArgs = {
  data: Array<GhlAccessCreateInput>;
};


export type MutationCreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateGroupAiLogArgs = {
  data: GroupAiLogCreateInput;
};


export type MutationCreateGroupAiLogsArgs = {
  data: Array<GroupAiLogCreateInput>;
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


export type MutationCreateSnippetArgs = {
  data: SnippetCreateInput;
};


export type MutationCreateSnippetsArgs = {
  data: Array<SnippetCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAiKeyArgs = {
  where: AiKeyWhereUniqueInput;
};


export type MutationDeleteAiKeysArgs = {
  where: Array<AiKeyWhereUniqueInput>;
};


export type MutationDeleteBotConfigArgs = {
  where: BotConfigWhereUniqueInput;
};


export type MutationDeleteBotConfigsArgs = {
  where: Array<BotConfigWhereUniqueInput>;
};


export type MutationDeleteChatConversationSessionArgs = {
  where: ChatConversationSessionWhereUniqueInput;
};


export type MutationDeleteChatConversationSessionsArgs = {
  where: Array<ChatConversationSessionWhereUniqueInput>;
};


export type MutationDeleteChatSessionArgs = {
  where: ChatSessionWhereUniqueInput;
};


export type MutationDeleteChatSessionsArgs = {
  where: Array<ChatSessionWhereUniqueInput>;
};


export type MutationDeleteConversationBotConfigArgs = {
  where: ConversationBotConfigWhereUniqueInput;
};


export type MutationDeleteConversationBotConfigsArgs = {
  where: Array<ConversationBotConfigWhereUniqueInput>;
};


export type MutationDeleteGhlAccessArgs = {
  where: GhlAccessWhereUniqueInput;
};


export type MutationDeleteGhlAccessesArgs = {
  where: Array<GhlAccessWhereUniqueInput>;
};


export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteGroupAiLogArgs = {
  where: GroupAiLogWhereUniqueInput;
};


export type MutationDeleteGroupAiLogsArgs = {
  where: Array<GroupAiLogWhereUniqueInput>;
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


export type MutationDeleteSnippetArgs = {
  where: SnippetWhereUniqueInput;
};


export type MutationDeleteSnippetsArgs = {
  where: Array<SnippetWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationGhl_BreakCustomFieldsCacheArgs = {
  input: Ghl_BreakCustomFieldsCacheInput;
};


export type MutationGhl_SendMessageArgs = {
  input: Ghl_SendMessageInput;
};


export type MutationGhl_SetCustomFieldsArgs = {
  input: Ghl_SetCustomFieldsInput;
};


export type MutationQueue_DeletePendingMessageArgs = {
  input: Queue_DeletePendingMessageInput;
};


export type MutationUpdateAiKeyArgs = {
  data: AiKeyUpdateInput;
  where: AiKeyWhereUniqueInput;
};


export type MutationUpdateAiKeysArgs = {
  data: Array<AiKeyUpdateArgs>;
};


export type MutationUpdateBotConfigArgs = {
  data: BotConfigUpdateInput;
  where: BotConfigWhereUniqueInput;
};


export type MutationUpdateBotConfigsArgs = {
  data: Array<BotConfigUpdateArgs>;
};


export type MutationUpdateChatConversationSessionArgs = {
  data: ChatConversationSessionUpdateInput;
  where: ChatConversationSessionWhereUniqueInput;
};


export type MutationUpdateChatConversationSessionsArgs = {
  data: Array<ChatConversationSessionUpdateArgs>;
};


export type MutationUpdateChatSessionArgs = {
  data: ChatSessionUpdateInput;
  where: ChatSessionWhereUniqueInput;
};


export type MutationUpdateChatSessionsArgs = {
  data: Array<ChatSessionUpdateArgs>;
};


export type MutationUpdateConversationBotConfigArgs = {
  data: ConversationBotConfigUpdateInput;
  where: ConversationBotConfigWhereUniqueInput;
};


export type MutationUpdateConversationBotConfigsArgs = {
  data: Array<ConversationBotConfigUpdateArgs>;
};


export type MutationUpdateGhlAccessArgs = {
  data: GhlAccessUpdateInput;
  where: GhlAccessWhereUniqueInput;
};


export type MutationUpdateGhlAccessesArgs = {
  data: Array<GhlAccessUpdateArgs>;
};


export type MutationUpdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateGroupAiLogArgs = {
  data: GroupAiLogUpdateInput;
  where: GroupAiLogWhereUniqueInput;
};


export type MutationUpdateGroupAiLogsArgs = {
  data: Array<GroupAiLogUpdateArgs>;
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


export type MutationUpdateSnippetArgs = {
  data: SnippetUpdateInput;
  where: SnippetWhereUniqueInput;
};


export type MutationUpdateSnippetsArgs = {
  data: Array<SnippetUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  ErrorTest?: Maybe<Scalars['String']['output']>;
  aIKey?: Maybe<AiKey>;
  aIKeys?: Maybe<Array<AiKey>>;
  aIKeysCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  botConfig?: Maybe<BotConfig>;
  botConfigs?: Maybe<Array<BotConfig>>;
  botConfigsCount?: Maybe<Scalars['Int']['output']>;
  chatConversationSession?: Maybe<ChatConversationSession>;
  chatConversationSessions?: Maybe<Array<ChatConversationSession>>;
  chatConversationSessionsCount?: Maybe<Scalars['Int']['output']>;
  chatSession?: Maybe<ChatSession>;
  chatSessions?: Maybe<Array<ChatSession>>;
  chatSessionsCount?: Maybe<Scalars['Int']['output']>;
  conversationBotConfig?: Maybe<ConversationBotConfig>;
  conversationBotConfigs?: Maybe<Array<ConversationBotConfig>>;
  conversationBotConfigsCount?: Maybe<Scalars['Int']['output']>;
  gHLAccess?: Maybe<GhlAccess>;
  gHLAccesses?: Maybe<Array<GhlAccess>>;
  gHLAccessesCount?: Maybe<Scalars['Int']['output']>;
  ghl_accessToken?: Maybe<Scalars['String']['output']>;
  ghl_getContacts?: Maybe<GhlContactList>;
  ghl_getCustomFields?: Maybe<GhlCustomFieldData>;
  ghl_getMessages?: Maybe<Scalars['String']['output']>;
  ghl_me?: Maybe<GhlMeReturn>;
  group?: Maybe<Group>;
  groupAILog?: Maybe<GroupAiLog>;
  groupAILogs?: Maybe<Array<GroupAiLog>>;
  groupAILogsCount?: Maybe<Scalars['Int']['output']>;
  groupMember?: Maybe<GroupMember>;
  groupMembers?: Maybe<Array<GroupMember>>;
  groupMembersCount?: Maybe<Scalars['Int']['output']>;
  groups?: Maybe<Array<Group>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  queue_getPendingMessages?: Maybe<QueuePendingMessages>;
  serverError?: Maybe<ServerError>;
  serverErrors?: Maybe<Array<ServerError>>;
  serverErrorsCount?: Maybe<Scalars['Int']['output']>;
  serverLog?: Maybe<ServerLog>;
  serverLogs?: Maybe<Array<ServerLog>>;
  serverLogsCount?: Maybe<Scalars['Int']['output']>;
  snippet?: Maybe<Snippet>;
  snippets?: Maybe<Array<Snippet>>;
  snippetsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryAiKeyArgs = {
  where: AiKeyWhereUniqueInput;
};


export type QueryAiKeysArgs = {
  cursor?: InputMaybe<AiKeyWhereUniqueInput>;
  orderBy?: Array<AiKeyOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AiKeyWhereInput;
};


export type QueryAiKeysCountArgs = {
  where?: AiKeyWhereInput;
};


export type QueryBotConfigArgs = {
  where: BotConfigWhereUniqueInput;
};


export type QueryBotConfigsArgs = {
  cursor?: InputMaybe<BotConfigWhereUniqueInput>;
  orderBy?: Array<BotConfigOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BotConfigWhereInput;
};


export type QueryBotConfigsCountArgs = {
  where?: BotConfigWhereInput;
};


export type QueryChatConversationSessionArgs = {
  where: ChatConversationSessionWhereUniqueInput;
};


export type QueryChatConversationSessionsArgs = {
  cursor?: InputMaybe<ChatConversationSessionWhereUniqueInput>;
  orderBy?: Array<ChatConversationSessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChatConversationSessionWhereInput;
};


export type QueryChatConversationSessionsCountArgs = {
  where?: ChatConversationSessionWhereInput;
};


export type QueryChatSessionArgs = {
  where: ChatSessionWhereUniqueInput;
};


export type QueryChatSessionsArgs = {
  cursor?: InputMaybe<ChatSessionWhereUniqueInput>;
  orderBy?: Array<ChatSessionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChatSessionWhereInput;
};


export type QueryChatSessionsCountArgs = {
  where?: ChatSessionWhereInput;
};


export type QueryConversationBotConfigArgs = {
  where: ConversationBotConfigWhereUniqueInput;
};


export type QueryConversationBotConfigsArgs = {
  cursor?: InputMaybe<ConversationBotConfigWhereUniqueInput>;
  orderBy?: Array<ConversationBotConfigOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ConversationBotConfigWhereInput;
};


export type QueryConversationBotConfigsCountArgs = {
  where?: ConversationBotConfigWhereInput;
};


export type QueryGHlAccessArgs = {
  where: GhlAccessWhereUniqueInput;
};


export type QueryGHlAccessesArgs = {
  cursor?: InputMaybe<GhlAccessWhereUniqueInput>;
  orderBy?: Array<GhlAccessOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GhlAccessWhereInput;
};


export type QueryGHlAccessesCountArgs = {
  where?: GhlAccessWhereInput;
};


export type QueryGhl_AccessTokenArgs = {
  input: Ghl_AccessTokenInput;
};


export type QueryGhl_GetContactsArgs = {
  input: Ghl_GetContactsInput;
};


export type QueryGhl_GetCustomFieldsArgs = {
  input: Ghl_GetCustomFieldsInput;
};


export type QueryGhl_GetMessagesArgs = {
  input: Ghl_GetMessagesInput;
};


export type QueryGhl_MeArgs = {
  input: Ghl_MeInput;
};


export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryGroupAiLogArgs = {
  where: GroupAiLogWhereUniqueInput;
};


export type QueryGroupAiLogsArgs = {
  cursor?: InputMaybe<GroupAiLogWhereUniqueInput>;
  orderBy?: Array<GroupAiLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupAiLogWhereInput;
};


export type QueryGroupAiLogsCountArgs = {
  where?: GroupAiLogWhereInput;
};


export type QueryGroupMemberArgs = {
  where: GroupMemberWhereUniqueInput;
};


export type QueryGroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type QueryGroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};


export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  orderBy?: Array<GroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupWhereInput;
};


export type QueryGroupsCountArgs = {
  where?: GroupWhereInput;
};


export type QueryQueue_GetPendingMessagesArgs = {
  input: Queue_GetPendingMessagesInput;
};


export type QueryServerErrorArgs = {
  where: ServerErrorWhereUniqueInput;
};


export type QueryServerErrorsArgs = {
  cursor?: InputMaybe<ServerErrorWhereUniqueInput>;
  orderBy?: Array<ServerErrorOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
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
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServerLogWhereInput;
};


export type QueryServerLogsCountArgs = {
  where?: ServerLogWhereInput;
};


export type QuerySnippetArgs = {
  where: SnippetWhereUniqueInput;
};


export type QuerySnippetsArgs = {
  cursor?: InputMaybe<SnippetWhereUniqueInput>;
  orderBy?: Array<SnippetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SnippetWhereInput;
};


export type QuerySnippetsCountArgs = {
  where?: SnippetWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type QueuePendingMessage = {
  __typename?: 'QueuePendingMessage';
  data: QueuePendingMessageData;
  delay: Scalars['Float']['output'];
  delayString: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type QueuePendingMessageData = {
  __typename?: 'QueuePendingMessageData';
  contactID?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  forceSend?: Maybe<Scalars['Boolean']['output']>;
  groupID?: Maybe<Scalars['String']['output']>;
  groupName?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  offTimeConfig?: Maybe<QueuePendingMessageDataOffTimeConfig>;
  type?: Maybe<Scalars['String']['output']>;
};

export type QueuePendingMessageDataOffTimeConfig = {
  __typename?: 'QueuePendingMessageDataOffTimeConfig';
  timezone?: Maybe<Scalars['String']['output']>;
};

export type QueuePendingMessages = {
  __typename?: 'QueuePendingMessages';
  queue?: Maybe<Array<Maybe<QueuePendingMessage>>>;
};

export type Queue_DeletePendingMessageInput = {
  groupID: Scalars['String']['input'];
  ids: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Queue_GetPendingMessagesInput = {
  groupID: Scalars['String']['input'];
};

export type ServerError = {
  __typename?: 'ServerError';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  graphql?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};

export type ServerErrorCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ServerLog = {
  __typename?: 'ServerLog';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  elapsed?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  graphql?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};

export type ServerLogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  elapsed?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  elapsed?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Snippet = {
  __typename?: 'Snippet';
  comment?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
};

export type SnippetCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
};

export type SnippetManyRelationFilter = {
  every?: InputMaybe<SnippetWhereInput>;
  none?: InputMaybe<SnippetWhereInput>;
  some?: InputMaybe<SnippetWhereInput>;
};

export type SnippetOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  content?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  tags?: InputMaybe<OrderDirection>;
};

export type SnippetRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SnippetWhereUniqueInput>>;
  create?: InputMaybe<Array<SnippetCreateInput>>;
};

export type SnippetRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SnippetWhereUniqueInput>>;
  create?: InputMaybe<Array<SnippetCreateInput>>;
  disconnect?: InputMaybe<Array<SnippetWhereUniqueInput>>;
  set?: InputMaybe<Array<SnippetWhereUniqueInput>>;
};

export type SnippetUpdateArgs = {
  data: SnippetUpdateInput;
  where: SnippetWhereUniqueInput;
};

export type SnippetUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
};

export type SnippetWhereInput = {
  AND?: InputMaybe<Array<SnippetWhereInput>>;
  NOT?: InputMaybe<Array<SnippetWhereInput>>;
  OR?: InputMaybe<Array<SnippetWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringFilter>;
};

export type SnippetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  adminPassword?: Maybe<PasswordState>;
  avatar?: Maybe<ImageFieldOutput>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<GroupMember>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRoleType>;
};


export type UserGroupsArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type UserGroupsCountArgs = {
  where?: GroupMemberWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<ImageFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserRoleType {
  Admin = 'admin',
  Dev = 'dev',
  User = 'user'
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
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<ImageFieldInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRoleType>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  adminPassword?: InputMaybe<PasswordFilter>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', authclient_login?: { __typename?: 'ClientItemAuthenticationWithPasswordFailure' } | { __typename?: 'ClientItemAuthenticationWithPasswordSuccess', sessionToken: string } | null };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', authclient_register?: boolean | null };

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type RequestResetPasswordMutation = { __typename?: 'Mutation', authclient_requestPasswordReset?: boolean | null };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', authclient_resetPassword?: boolean | null };

export type BotConfigQueryVariables = Exact<{
  where: BotConfigWhereUniqueInput;
}>;


export type BotConfigQuery = { __typename?: 'Query', botConfig?: { __typename?: 'BotConfig', id: string, name?: string | null, companyStatement?: string | null, tonestyle?: string | null, priorityPlan?: string | null, healthInsuranceCarriers?: string | null, presentationStrategy?: string | null, specificQuestions?: string | null, summaryPrompt?: string | null, welcomeMessage?: string | null, welcomeMessageFormat?: string | null, noZipCodeMessage?: string | null } | null };

export type BotConfigsQueryVariables = Exact<{
  where: BotConfigWhereInput;
}>;


export type BotConfigsQuery = { __typename?: 'Query', botConfigs?: Array<{ __typename?: 'BotConfig', id: string, name?: string | null, companyStatement?: string | null, tonestyle?: string | null, priorityPlan?: string | null, healthInsuranceCarriers?: string | null, presentationStrategy?: string | null, specificQuestions?: string | null, summaryPrompt?: string | null, welcomeMessage?: string | null, welcomeMessageFormat?: string | null, noZipCodeMessage?: string | null }> | null };

export type CreateBotConfigMutationVariables = Exact<{
  data: BotConfigCreateInput;
}>;


export type CreateBotConfigMutation = { __typename?: 'Mutation', createBotConfig?: { __typename?: 'BotConfig', id: string } | null };

export type UpdateBotConfigMutationVariables = Exact<{
  where: BotConfigWhereUniqueInput;
  data: BotConfigUpdateInput;
}>;


export type UpdateBotConfigMutation = { __typename?: 'Mutation', updateBotConfig?: { __typename?: 'BotConfig', id: string } | null };

export type DeleteBotConfigMutationVariables = Exact<{
  where: BotConfigWhereUniqueInput;
}>;


export type DeleteBotConfigMutation = { __typename?: 'Mutation', deleteBotConfig?: { __typename?: 'BotConfig', id: string } | null };

export type ConversationBotConfigQueryVariables = Exact<{
  where: ConversationBotConfigWhereUniqueInput;
}>;


export type ConversationBotConfigQuery = { __typename?: 'Query', conversationBotConfig?: { __typename?: 'ConversationBotConfig', id: string, name?: string | null, companyStatement?: string | null, tonestyle?: string | null, priorityPlan?: string | null, healthInsuranceCarriers?: string | null, presentationStrategy?: string | null, specificQuestions?: string | null, summaryPrompt?: string | null, welcomeMessage?: string | null, welcomeMessageFormat?: string | null, noZipCodeMessage?: string | null } | null };

export type ConversationBotConfigsQueryVariables = Exact<{
  where: ConversationBotConfigWhereInput;
}>;


export type ConversationBotConfigsQuery = { __typename?: 'Query', conversationBotConfigs?: Array<{ __typename?: 'ConversationBotConfig', id: string, name?: string | null, companyStatement?: string | null, tonestyle?: string | null, priorityPlan?: string | null, healthInsuranceCarriers?: string | null, presentationStrategy?: string | null, specificQuestions?: string | null, summaryPrompt?: string | null, welcomeMessage?: string | null, welcomeMessageFormat?: string | null, noZipCodeMessage?: string | null }> | null };

export type CreateConversationBotConfigMutationVariables = Exact<{
  data: ConversationBotConfigCreateInput;
}>;


export type CreateConversationBotConfigMutation = { __typename?: 'Mutation', createConversationBotConfig?: { __typename?: 'ConversationBotConfig', id: string } | null };

export type UpdateConversationBotConfigMutationVariables = Exact<{
  where: ConversationBotConfigWhereUniqueInput;
  data: ConversationBotConfigUpdateInput;
}>;


export type UpdateConversationBotConfigMutation = { __typename?: 'Mutation', updateConversationBotConfig?: { __typename?: 'ConversationBotConfig', id: string } | null };

export type GetCustomFieldsQueryVariables = Exact<{
  input: Ghl_GetCustomFieldsInput;
}>;


export type GetCustomFieldsQuery = { __typename?: 'Query', ghl_getCustomFields?: { __typename?: 'GHLCustomFieldData', customFields?: Array<{ __typename?: 'GHLCustomField', id: string, name: string, fieldKey?: string | null, placeholder?: string | null, dataType?: string | null, position?: number | null, picklistOptions?: Array<string | null> | null, picklistImageOptions?: Array<string | null> | null, isAllowedCustomOption?: boolean | null, isMultiFileAllowed?: boolean | null, maxFileLimit?: number | null, locationId?: string | null, model?: string | null } | null> | null } | null };

export type ModifyCustomFieldsMutationVariables = Exact<{
  input: Ghl_SetCustomFieldsInput;
}>;


export type ModifyCustomFieldsMutation = { __typename?: 'Mutation', ghl_setCustomFields?: Array<string | null> | null };

export type Ghl_BreakCustomFieldsCacheMutationVariables = Exact<{
  input: Ghl_BreakCustomFieldsCacheInput;
}>;


export type Ghl_BreakCustomFieldsCacheMutation = { __typename?: 'Mutation', ghl_breakCustomFieldsCache?: boolean | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, name?: string | null, lastName?: string | null, displayName?: string | null, email?: string | null, role?: UserRoleType | null, createdAt?: any | null } | null };

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = { __typename?: 'Query', groups?: Array<{ __typename?: 'Group', id: string, name?: string | null, ghlAccess?: { __typename?: 'GHLAccess', id: string } | null }> | null };

export type GroupQueryVariables = Exact<{
  where: GroupWhereUniqueInput;
}>;


export type GroupQuery = { __typename?: 'Query', group?: { __typename?: 'Group', id: string, name?: string | null, membersCount?: number | null, enable_globalWelcome?: boolean | null, enable_globalAutoReply?: boolean | null, enable_globalContactUpdate?: boolean | null, contactConfigs?: any | null, enable_botIsAssistant?: boolean | null, botAssistantName?: string | null, check_dndNotice?: boolean | null, dndNoticeMessage?: string | null, enable_noSSN?: boolean | null, enable_checkProfanity?: boolean | null, availability_enabled?: boolean | null, availability_start?: number | null, availability_end?: number | null, user_contextFields?: any | null, members?: Array<{ __typename?: 'GroupMember', id: string, access?: number | null, user?: { __typename?: 'User', id: string, displayName?: string | null, email?: string | null } | null }> | null, botConfig?: { __typename?: 'BotConfig', id: string } | null, ghlAccess?: { __typename?: 'GHLAccess', id: string, locationId?: string | null, refreshToken?: string | null, scope?: string | null } | null, aiKey?: { __typename?: 'AIKey', id: string, openapiKey?: string | null } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type CreateGroupMutationVariables = Exact<{
  data: GroupCreateInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup?: { __typename?: 'Group', id: string } | null };

export type UpdateGroupMutationVariables = Exact<{
  where: GroupWhereUniqueInput;
  data: GroupUpdateInput;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', updateGroup?: { __typename?: 'Group', id: string } | null };

export type UpdateAiKeyMutationVariables = Exact<{
  where: AiKeyWhereUniqueInput;
  data: AiKeyUpdateInput;
}>;


export type UpdateAiKeyMutation = { __typename?: 'Mutation', updateAIKey?: { __typename?: 'AIKey', id: string } | null };

export type Ghl_MeQueryVariables = Exact<{
  input: Ghl_MeInput;
}>;


export type Ghl_MeQuery = { __typename?: 'Query', ghl_me?: { __typename?: 'GHLMeReturn', name: string, email: string, firstName: string, lastName: string, phone: string, address: string, state: string, country: string, postalCode: string, business: { __typename?: 'GHLMeReturnBusiness', name: string, address: string, city: string, state: string, country: string, postalCode: string, website: string, timezone: string, logoUrl: string } } | null };

export type Ghl_GetContactsQueryVariables = Exact<{
  input: Ghl_GetContactsInput;
}>;


export type Ghl_GetContactsQuery = { __typename?: 'Query', ghl_getContacts?: { __typename?: 'GHLContactList', contacts?: Array<{ __typename?: 'GHLContact', id?: string | null, locationId?: string | null, email?: string | null, timezone?: string | null, country?: string | null, source?: string | null, dateAdded?: string | null, businessId?: string | null, firstName?: string | null, lastName?: string | null, contactName?: string | null } | null> | null } | null };

export type Ghl_SendMessageMutationVariables = Exact<{
  input: Ghl_SendMessageInput;
}>;


export type Ghl_SendMessageMutation = { __typename?: 'Mutation', ghl_sendMessage?: { __typename?: 'GHLMessageReturn', message: string, contactID: string, thread: string } | null };

export type GetPendingQueueQueryVariables = Exact<{
  input: Queue_GetPendingMessagesInput;
}>;


export type GetPendingQueueQuery = { __typename?: 'Query', queue_getPendingMessages?: { __typename?: 'QueuePendingMessages', queue?: Array<{ __typename?: 'QueuePendingMessage', id: string, delay: number, delayString: string, data: { __typename?: 'QueuePendingMessageData', groupID?: string | null, groupName?: string | null, contactID?: string | null, contactName?: string | null, type?: string | null, message?: string | null, forceSend?: boolean | null, offTimeConfig?: { __typename?: 'QueuePendingMessageDataOffTimeConfig', timezone?: string | null } | null } } | null> | null } | null };

export type CancelPendingQueueMutationVariables = Exact<{
  input: Queue_DeletePendingMessageInput;
}>;


export type CancelPendingQueueMutation = { __typename?: 'Mutation', queue_deletePendingMessage?: { __typename?: 'QueuePendingMessages', queue?: Array<{ __typename?: 'QueuePendingMessage', id: string } | null> | null } | null };

export type ChatSessionQueryVariables = Exact<{
  where: ChatSessionWhereUniqueInput;
}>;


export type ChatSessionQuery = { __typename?: 'Query', chatSession?: { __typename?: 'ChatSession', sessionData?: any | null } | null };

export type SnippetQueryVariables = Exact<{
  where: SnippetWhereUniqueInput;
}>;


export type SnippetQuery = { __typename?: 'Query', snippet?: { __typename?: 'Snippet', id: string, name?: string | null, tags?: string | null, content?: string | null, comment?: string | null } | null };

export type SnippetsQueryVariables = Exact<{
  where: SnippetWhereInput;
}>;


export type SnippetsQuery = { __typename?: 'Query', snippets?: Array<{ __typename?: 'Snippet', id: string, name?: string | null, tags?: string | null, content?: string | null, comment?: string | null }> | null };

export type CreateSnippetMutationVariables = Exact<{
  data: SnippetCreateInput;
}>;


export type CreateSnippetMutation = { __typename?: 'Mutation', createSnippet?: { __typename?: 'Snippet', id: string } | null };

export type UpdateSnippetMutationVariables = Exact<{
  where: SnippetWhereUniqueInput;
  data: SnippetUpdateInput;
}>;


export type UpdateSnippetMutation = { __typename?: 'Mutation', updateSnippet?: { __typename?: 'Snippet', id: string } | null };

export type DeleteSnippetMutationVariables = Exact<{
  where: SnippetWhereUniqueInput;
}>;


export type DeleteSnippetMutation = { __typename?: 'Mutation', deleteSnippet?: { __typename?: 'Snippet', id: string } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClientItemAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}]}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const RequestResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const BotConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BotConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BotConfigWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"botConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"companyStatement"}},{"kind":"Field","name":{"kind":"Name","value":"tonestyle"}},{"kind":"Field","name":{"kind":"Name","value":"priorityPlan"}},{"kind":"Field","name":{"kind":"Name","value":"healthInsuranceCarriers"}},{"kind":"Field","name":{"kind":"Name","value":"presentationStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"specificQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"summaryPrompt"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessage"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessageFormat"}},{"kind":"Field","name":{"kind":"Name","value":"noZipCodeMessage"}}]}}]}}]} as unknown as DocumentNode<BotConfigQuery, BotConfigQueryVariables>;
export const BotConfigsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BotConfigs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BotConfigWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"botConfigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"companyStatement"}},{"kind":"Field","name":{"kind":"Name","value":"tonestyle"}},{"kind":"Field","name":{"kind":"Name","value":"priorityPlan"}},{"kind":"Field","name":{"kind":"Name","value":"healthInsuranceCarriers"}},{"kind":"Field","name":{"kind":"Name","value":"presentationStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"specificQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"summaryPrompt"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessage"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessageFormat"}},{"kind":"Field","name":{"kind":"Name","value":"noZipCodeMessage"}}]}}]}}]} as unknown as DocumentNode<BotConfigsQuery, BotConfigsQueryVariables>;
export const CreateBotConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBotConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BotConfigCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBotConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateBotConfigMutation, CreateBotConfigMutationVariables>;
export const UpdateBotConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBotConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BotConfigWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BotConfigUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBotConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateBotConfigMutation, UpdateBotConfigMutationVariables>;
export const DeleteBotConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBotConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BotConfigWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBotConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteBotConfigMutation, DeleteBotConfigMutationVariables>;
export const ConversationBotConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ConversationBotConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConversationBotConfigWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conversationBotConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"companyStatement"}},{"kind":"Field","name":{"kind":"Name","value":"tonestyle"}},{"kind":"Field","name":{"kind":"Name","value":"priorityPlan"}},{"kind":"Field","name":{"kind":"Name","value":"healthInsuranceCarriers"}},{"kind":"Field","name":{"kind":"Name","value":"presentationStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"specificQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"summaryPrompt"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessage"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessageFormat"}},{"kind":"Field","name":{"kind":"Name","value":"noZipCodeMessage"}}]}}]}}]} as unknown as DocumentNode<ConversationBotConfigQuery, ConversationBotConfigQueryVariables>;
export const ConversationBotConfigsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ConversationBotConfigs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConversationBotConfigWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conversationBotConfigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"companyStatement"}},{"kind":"Field","name":{"kind":"Name","value":"tonestyle"}},{"kind":"Field","name":{"kind":"Name","value":"priorityPlan"}},{"kind":"Field","name":{"kind":"Name","value":"healthInsuranceCarriers"}},{"kind":"Field","name":{"kind":"Name","value":"presentationStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"specificQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"summaryPrompt"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessage"}},{"kind":"Field","name":{"kind":"Name","value":"welcomeMessageFormat"}},{"kind":"Field","name":{"kind":"Name","value":"noZipCodeMessage"}}]}}]}}]} as unknown as DocumentNode<ConversationBotConfigsQuery, ConversationBotConfigsQueryVariables>;
export const CreateConversationBotConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateConversationBotConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConversationBotConfigCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createConversationBotConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateConversationBotConfigMutation, CreateConversationBotConfigMutationVariables>;
export const UpdateConversationBotConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateConversationBotConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConversationBotConfigWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConversationBotConfigUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateConversationBotConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateConversationBotConfigMutation, UpdateConversationBotConfigMutationVariables>;
export const GetCustomFieldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomFields"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Ghl_getCustomFieldsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ghl_getCustomFields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fieldKey"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"dataType"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"picklistOptions"}},{"kind":"Field","name":{"kind":"Name","value":"picklistImageOptions"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowedCustomOption"}},{"kind":"Field","name":{"kind":"Name","value":"isMultiFileAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"maxFileLimit"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"model"}}]}}]}}]}}]} as unknown as DocumentNode<GetCustomFieldsQuery, GetCustomFieldsQueryVariables>;
export const ModifyCustomFieldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ModifyCustomFields"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Ghl_setCustomFieldsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ghl_setCustomFields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ModifyCustomFieldsMutation, ModifyCustomFieldsMutationVariables>;
export const Ghl_BreakCustomFieldsCacheDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Ghl_breakCustomFieldsCache"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Ghl_breakCustomFieldsCacheInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ghl_breakCustomFieldsCache"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<Ghl_BreakCustomFieldsCacheMutation, Ghl_BreakCustomFieldsCacheMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const GroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ghlAccess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GroupsQuery, GroupsQueryVariables>;
export const GroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Group"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}},{"kind":"Field","name":{"kind":"Name","value":"membersCount"}},{"kind":"Field","name":{"kind":"Name","value":"botConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ghlAccess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"scope"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aiKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"openapiKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enable_globalWelcome"}},{"kind":"Field","name":{"kind":"Name","value":"enable_globalAutoReply"}},{"kind":"Field","name":{"kind":"Name","value":"enable_globalContactUpdate"}},{"kind":"Field","name":{"kind":"Name","value":"contactConfigs"}},{"kind":"Field","name":{"kind":"Name","value":"enable_botIsAssistant"}},{"kind":"Field","name":{"kind":"Name","value":"botAssistantName"}},{"kind":"Field","name":{"kind":"Name","value":"check_dndNotice"}},{"kind":"Field","name":{"kind":"Name","value":"dndNoticeMessage"}},{"kind":"Field","name":{"kind":"Name","value":"enable_noSSN"}},{"kind":"Field","name":{"kind":"Name","value":"enable_checkProfanity"}},{"kind":"Field","name":{"kind":"Name","value":"availability_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"availability_start"}},{"kind":"Field","name":{"kind":"Name","value":"availability_end"}},{"kind":"Field","name":{"kind":"Name","value":"user_contextFields"}}]}}]}}]} as unknown as DocumentNode<GroupQuery, GroupQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateGroupMutation, CreateGroupMutationVariables>;
export const UpdateGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GroupUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const UpdateAiKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAIKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AIKeyWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AIKeyUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAIKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAiKeyMutation, UpdateAiKeyMutationVariables>;
export const Ghl_MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ghl_me"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Ghl_meInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ghl_me"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"business"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]}}]}}]} as unknown as DocumentNode<Ghl_MeQuery, Ghl_MeQueryVariables>;
export const Ghl_GetContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ghl_getContacts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Ghl_getContactsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ghl_getContacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"businessId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}}]}}]}}]}}]} as unknown as DocumentNode<Ghl_GetContactsQuery, Ghl_GetContactsQueryVariables>;
export const Ghl_SendMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Ghl_sendMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Ghl_sendMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ghl_sendMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"contactID"}},{"kind":"Field","name":{"kind":"Name","value":"thread"}}]}}]}}]} as unknown as DocumentNode<Ghl_SendMessageMutation, Ghl_SendMessageMutationVariables>;
export const GetPendingQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPendingQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Queue_getPendingMessagesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queue_getPendingMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groupID"}},{"kind":"Field","name":{"kind":"Name","value":"groupName"}},{"kind":"Field","name":{"kind":"Name","value":"contactID"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"offTimeConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timezone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"forceSend"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delay"}},{"kind":"Field","name":{"kind":"Name","value":"delayString"}}]}}]}}]}}]} as unknown as DocumentNode<GetPendingQueueQuery, GetPendingQueueQueryVariables>;
export const CancelPendingQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelPendingQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Queue_deletePendingMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queue_deletePendingMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CancelPendingQueueMutation, CancelPendingQueueMutationVariables>;
export const ChatSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChatSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatSessionWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionData"}}]}}]}}]} as unknown as DocumentNode<ChatSessionQuery, ChatSessionQueryVariables>;
export const SnippetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Snippet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnippetWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snippet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<SnippetQuery, SnippetQueryVariables>;
export const SnippetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Snippets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnippetWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snippets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<SnippetsQuery, SnippetsQueryVariables>;
export const CreateSnippetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSnippet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnippetCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSnippet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateSnippetMutation, CreateSnippetMutationVariables>;
export const UpdateSnippetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSnippet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnippetWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnippetUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSnippet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateSnippetMutation, UpdateSnippetMutationVariables>;
export const DeleteSnippetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSnippet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnippetWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSnippet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteSnippetMutation, DeleteSnippetMutationVariables>;