/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n": types.RegisterDocument,
    "\n  mutation RequestResetPassword($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n": types.RequestResetPasswordDocument,
    "\n  mutation ResetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n": types.ResetPasswordDocument,
    "\n  query BotConfig($where: BotConfigWhereUniqueInput!) {\n    botConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n": types.BotConfigDocument,
    "\n  query BotConfigs($where: BotConfigWhereInput!) {\n    botConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n": types.BotConfigsDocument,
    "\n  mutation CreateBotConfig($data: BotConfigCreateInput!) {\n    createBotConfig(data: $data) {\n      id\n    }\n  }\n": types.CreateBotConfigDocument,
    "\n  mutation UpdateBotConfig(\n    $where: BotConfigWhereUniqueInput!\n    $data: BotConfigUpdateInput!\n  ) {\n    updateBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateBotConfigDocument,
    "\n  mutation DeleteBotConfig($where: BotConfigWhereUniqueInput!) {\n    deleteBotConfig(where: $where) {\n      id\n    }\n  }\n": types.DeleteBotConfigDocument,
    "\n    mutation CreateBrandingSetting($data: BrandingCreateInput!) {\n        createBranding(data: $data) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        }\n    }\n": types.CreateBrandingSettingDocument,
    "\n    mutation UpdateBrandingSetting($where: BrandingWhereUniqueInput!, $data: BrandingUpdateInput!) {\n        updateBranding(where: $where, data: $data) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        group {\n            id\n        }\n        }\n    }\n": types.UpdateBrandingSettingDocument,
    "\n    mutation DeleteBrandingSetting($where: BrandingWhereUniqueInput!) {\n        deleteBranding(where: $where) {\n            id\n        }\n  }\n": types.DeleteBrandingSettingDocument,
    "\n    query Branding($where: BrandingWhereUniqueInput!) {\n        branding(where: $where) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        }\n    }\n": types.BrandingDocument,
    "\n  query ConversationBotConfig($where: ConversationBotConfigWhereUniqueInput!) {\n    conversationBotConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n": types.ConversationBotConfigDocument,
    "\n  query ConversationBotConfigs($where: ConversationBotConfigWhereInput!) {\n    conversationBotConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n": types.ConversationBotConfigsDocument,
    "\n  mutation CreateConversationBotConfig(\n    $data: ConversationBotConfigCreateInput!\n  ) {\n    createConversationBotConfig(data: $data) {\n      id\n    }\n  }\n": types.CreateConversationBotConfigDocument,
    "\n  mutation UpdateConversationBotConfig(\n    $where: ConversationBotConfigWhereUniqueInput!\n    $data: ConversationBotConfigUpdateInput!\n  ) {\n    updateConversationBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateConversationBotConfigDocument,
    "\nquery GetCustomFields($input: Ghl_getCustomFieldsInput!) {\n  ghl_getCustomFields(input: $input) {\n    customFields {\n      id\n      name\n      fieldKey\n      placeholder\n      dataType\n      position\n      picklistOptions\n      picklistImageOptions\n      isAllowedCustomOption\n      isMultiFileAllowed\n      maxFileLimit\n      locationId\n      model\n    }\n  }\n}\n": types.GetCustomFieldsDocument,
    "\nmutation ModifyCustomFields($input: Ghl_setCustomFieldsInput!) {\n  ghl_setCustomFields(input: $input)\n}\n": types.ModifyCustomFieldsDocument,
    "\nmutation Ghl_breakCustomFieldsCache($input: Ghl_breakCustomFieldsCacheInput!) {\n  ghl_breakCustomFieldsCache(input: $input)\n}\n": types.Ghl_BreakCustomFieldsCacheDocument,
    "\n    mutation FileUpload($input: File_generateUploadURLInput!) {\n        file_generateUploadURL(input: $input) {\n            getURL\n            putURL\n        }\n    } \n": types.FileUploadDocument,
    "\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        displayName\n        email\n        role\n        createdAt\n      }\n    }\n  }\n": types.UserDocument,
    "\n  query Groups {\n    groups {\n      id\n      name\n      ghlAccess {\n        id\n      }\n    }\n  }\n": types.GroupsDocument,
    "\n  query Group($where: GroupWhereUniqueInput!) {\n    group(where: $where) {\n      id\n      name\n      members {\n        id\n        user {\n          id\n          displayName\n          email\n        }\n        access\n      }\n      membersCount\n      botConfig {\n        id\n      }\n      ghlAccess {\n        id\n        locationId\n        refreshToken\n        scope\n      }\n      aiKey {\n        id\n        openapiKey\n      }\n      enable_globalWelcome\n      enable_globalAutoReply\n      enable_globalContactUpdate\n      contactConfigs\n      enable_botIsAssistant\n      botAssistantName\n      check_dndNotice\n      dndNoticeMessage\n      enable_noSSN\n      enable_checkProfanity\n      availability_enabled\n      availability_start\n      availability_end\n      user_contextFields\n    }\n  }\n": types.GroupDocument,
    "\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation CreateGroup($data: GroupCreateInput!) {\n    createGroup(data: $data) {\n      id\n    }\n  }\n": types.CreateGroupDocument,
    "\n  mutation UpdateGroup(\n    $where: GroupWhereUniqueInput!\n    $data: GroupUpdateInput!\n  ) {\n    updateGroup(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateGroupDocument,
    "\n  mutation UpdateAIKey(\n    $where: AIKeyWhereUniqueInput!\n    $data: AIKeyUpdateInput!\n  ) {\n    updateAIKey(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateAiKeyDocument,
    "\n  query Ghl_me($input: Ghl_meInput!) {\n    ghl_me(input: $input) {\n      name\n      email\n      firstName\n      lastName\n      phone\n      address\n      state\n      country\n      postalCode\n      business {\n        name\n        address\n        city\n        state\n        country\n        postalCode\n        website\n        timezone\n        logoUrl\n      }\n    }\n  }\n": types.Ghl_MeDocument,
    "\n  query ghl_getContacts($input: Ghl_getContactsInput!) {\n    ghl_getContacts(input: $input) {\n      contacts {\n        id\n        locationId\n        email\n        timezone\n        country\n        source\n        dateAdded\n        businessId\n        firstName\n        lastName\n        contactName\n      }\n    }\n  }\n": types.Ghl_GetContactsDocument,
    "\n  mutation Ghl_sendMessage($input: Ghl_sendMessageInput!) {\n    ghl_sendMessage(input: $input) {\n      message\n      contactID\n      thread\n    }\n  }\n": types.Ghl_SendMessageDocument,
    "\nquery GetPendingQueue($input: Queue_getPendingMessagesInput!) {\n  queue_getPendingMessages(input: $input) {\n    queue {\n      id\n      data {\n        groupID\n        groupName\n        contactID\n        contactName\n        type\n        message\n        offTimeConfig {\n          timezone\n        }\n        forceSend\n      }\n      delay\n      delayString\n    }\n  }\n}\n": types.GetPendingQueueDocument,
    "\nmutation CancelPendingQueue($input: Queue_deletePendingMessageInput!) {\n  queue_deletePendingMessage(input: $input) {\n    queue {\n      id\n    }\n  }\n}\n": types.CancelPendingQueueDocument,
    "\n  query ChatSession($where: ChatSessionWhereUniqueInput!) {\n    chatSession(where: $where) {\n      sessionData\n    }\n  }\n": types.ChatSessionDocument,
    "\n  query Snippet($where: SnippetWhereUniqueInput!) {\n    snippet(where: $where) {\n      id\n      name\n      tags\n      content\n      comment\n    }\n  }\n": types.SnippetDocument,
    "\n  query Snippets($where: SnippetWhereInput!) {\n    snippets(where: $where) {\n      id\n      name\n      tags\n      content\n      comment\n    }\n  }\n": types.SnippetsDocument,
    "\n  mutation CreateSnippet($data: SnippetCreateInput!) {\n    createSnippet(data: $data) {\n      id\n    }\n  }\n": types.CreateSnippetDocument,
    "\n  mutation UpdateSnippet(\n    $where: SnippetWhereUniqueInput!\n    $data: SnippetUpdateInput!\n  ) {\n    updateSnippet(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateSnippetDocument,
    "\n  mutation DeleteSnippet($where: SnippetWhereUniqueInput!) {\n    deleteSnippet(where: $where) {\n      id\n    }\n  }\n": types.DeleteSnippetDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n"): (typeof documents)["\n  mutation Register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RequestResetPassword($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n"): (typeof documents)["\n  mutation RequestResetPassword($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n"): (typeof documents)["\n  mutation ResetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BotConfig($where: BotConfigWhereUniqueInput!) {\n    botConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"): (typeof documents)["\n  query BotConfig($where: BotConfigWhereUniqueInput!) {\n    botConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BotConfigs($where: BotConfigWhereInput!) {\n    botConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"): (typeof documents)["\n  query BotConfigs($where: BotConfigWhereInput!) {\n    botConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBotConfig($data: BotConfigCreateInput!) {\n    createBotConfig(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBotConfig($data: BotConfigCreateInput!) {\n    createBotConfig(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBotConfig(\n    $where: BotConfigWhereUniqueInput!\n    $data: BotConfigUpdateInput!\n  ) {\n    updateBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBotConfig(\n    $where: BotConfigWhereUniqueInput!\n    $data: BotConfigUpdateInput!\n  ) {\n    updateBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteBotConfig($where: BotConfigWhereUniqueInput!) {\n    deleteBotConfig(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteBotConfig($where: BotConfigWhereUniqueInput!) {\n    deleteBotConfig(where: $where) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateBrandingSetting($data: BrandingCreateInput!) {\n        createBranding(data: $data) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        }\n    }\n"): (typeof documents)["\n    mutation CreateBrandingSetting($data: BrandingCreateInput!) {\n        createBranding(data: $data) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateBrandingSetting($where: BrandingWhereUniqueInput!, $data: BrandingUpdateInput!) {\n        updateBranding(where: $where, data: $data) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        group {\n            id\n        }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateBrandingSetting($where: BrandingWhereUniqueInput!, $data: BrandingUpdateInput!) {\n        updateBranding(where: $where, data: $data) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        group {\n            id\n        }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteBrandingSetting($where: BrandingWhereUniqueInput!) {\n        deleteBranding(where: $where) {\n            id\n        }\n  }\n"): (typeof documents)["\n    mutation DeleteBrandingSetting($where: BrandingWhereUniqueInput!) {\n        deleteBranding(where: $where) {\n            id\n        }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Branding($where: BrandingWhereUniqueInput!) {\n        branding(where: $where) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        }\n    }\n"): (typeof documents)["\n    query Branding($where: BrandingWhereUniqueInput!) {\n        branding(where: $where) {\n        id\n        companyName\n        companyMotto\n        companyPhone\n        companyEmail\n        companyAddress\n        companyWebsite\n        companyDescription\n        bannerLogoPhotoUrl\n        lifestylePhotoUrls\n        logoPhotoUrl\n        colorPalette1\n        colorPalette1Contrast\n        colorPalette2\n        colorPalette2Contrast\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ConversationBotConfig($where: ConversationBotConfigWhereUniqueInput!) {\n    conversationBotConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"): (typeof documents)["\n  query ConversationBotConfig($where: ConversationBotConfigWhereUniqueInput!) {\n    conversationBotConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ConversationBotConfigs($where: ConversationBotConfigWhereInput!) {\n    conversationBotConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"): (typeof documents)["\n  query ConversationBotConfigs($where: ConversationBotConfigWhereInput!) {\n    conversationBotConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateConversationBotConfig(\n    $data: ConversationBotConfigCreateInput!\n  ) {\n    createConversationBotConfig(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateConversationBotConfig(\n    $data: ConversationBotConfigCreateInput!\n  ) {\n    createConversationBotConfig(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateConversationBotConfig(\n    $where: ConversationBotConfigWhereUniqueInput!\n    $data: ConversationBotConfigUpdateInput!\n  ) {\n    updateConversationBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateConversationBotConfig(\n    $where: ConversationBotConfigWhereUniqueInput!\n    $data: ConversationBotConfigUpdateInput!\n  ) {\n    updateConversationBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetCustomFields($input: Ghl_getCustomFieldsInput!) {\n  ghl_getCustomFields(input: $input) {\n    customFields {\n      id\n      name\n      fieldKey\n      placeholder\n      dataType\n      position\n      picklistOptions\n      picklistImageOptions\n      isAllowedCustomOption\n      isMultiFileAllowed\n      maxFileLimit\n      locationId\n      model\n    }\n  }\n}\n"): (typeof documents)["\nquery GetCustomFields($input: Ghl_getCustomFieldsInput!) {\n  ghl_getCustomFields(input: $input) {\n    customFields {\n      id\n      name\n      fieldKey\n      placeholder\n      dataType\n      position\n      picklistOptions\n      picklistImageOptions\n      isAllowedCustomOption\n      isMultiFileAllowed\n      maxFileLimit\n      locationId\n      model\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation ModifyCustomFields($input: Ghl_setCustomFieldsInput!) {\n  ghl_setCustomFields(input: $input)\n}\n"): (typeof documents)["\nmutation ModifyCustomFields($input: Ghl_setCustomFieldsInput!) {\n  ghl_setCustomFields(input: $input)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation Ghl_breakCustomFieldsCache($input: Ghl_breakCustomFieldsCacheInput!) {\n  ghl_breakCustomFieldsCache(input: $input)\n}\n"): (typeof documents)["\nmutation Ghl_breakCustomFieldsCache($input: Ghl_breakCustomFieldsCacheInput!) {\n  ghl_breakCustomFieldsCache(input: $input)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation FileUpload($input: File_generateUploadURLInput!) {\n        file_generateUploadURL(input: $input) {\n            getURL\n            putURL\n        }\n    } \n"): (typeof documents)["\n    mutation FileUpload($input: File_generateUploadURLInput!) {\n        file_generateUploadURL(input: $input) {\n            getURL\n            putURL\n        }\n    } \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        displayName\n        email\n        role\n        createdAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        displayName\n        email\n        role\n        createdAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Groups {\n    groups {\n      id\n      name\n      ghlAccess {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Groups {\n    groups {\n      id\n      name\n      ghlAccess {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Group($where: GroupWhereUniqueInput!) {\n    group(where: $where) {\n      id\n      name\n      members {\n        id\n        user {\n          id\n          displayName\n          email\n        }\n        access\n      }\n      membersCount\n      botConfig {\n        id\n      }\n      ghlAccess {\n        id\n        locationId\n        refreshToken\n        scope\n      }\n      aiKey {\n        id\n        openapiKey\n      }\n      enable_globalWelcome\n      enable_globalAutoReply\n      enable_globalContactUpdate\n      contactConfigs\n      enable_botIsAssistant\n      botAssistantName\n      check_dndNotice\n      dndNoticeMessage\n      enable_noSSN\n      enable_checkProfanity\n      availability_enabled\n      availability_start\n      availability_end\n      user_contextFields\n    }\n  }\n"): (typeof documents)["\n  query Group($where: GroupWhereUniqueInput!) {\n    group(where: $where) {\n      id\n      name\n      members {\n        id\n        user {\n          id\n          displayName\n          email\n        }\n        access\n      }\n      membersCount\n      botConfig {\n        id\n      }\n      ghlAccess {\n        id\n        locationId\n        refreshToken\n        scope\n      }\n      aiKey {\n        id\n        openapiKey\n      }\n      enable_globalWelcome\n      enable_globalAutoReply\n      enable_globalContactUpdate\n      contactConfigs\n      enable_botIsAssistant\n      botAssistantName\n      check_dndNotice\n      dndNoticeMessage\n      enable_noSSN\n      enable_checkProfanity\n      availability_enabled\n      availability_start\n      availability_end\n      user_contextFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateGroup($data: GroupCreateInput!) {\n    createGroup(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateGroup($data: GroupCreateInput!) {\n    createGroup(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateGroup(\n    $where: GroupWhereUniqueInput!\n    $data: GroupUpdateInput!\n  ) {\n    updateGroup(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateGroup(\n    $where: GroupWhereUniqueInput!\n    $data: GroupUpdateInput!\n  ) {\n    updateGroup(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAIKey(\n    $where: AIKeyWhereUniqueInput!\n    $data: AIKeyUpdateInput!\n  ) {\n    updateAIKey(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAIKey(\n    $where: AIKeyWhereUniqueInput!\n    $data: AIKeyUpdateInput!\n  ) {\n    updateAIKey(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Ghl_me($input: Ghl_meInput!) {\n    ghl_me(input: $input) {\n      name\n      email\n      firstName\n      lastName\n      phone\n      address\n      state\n      country\n      postalCode\n      business {\n        name\n        address\n        city\n        state\n        country\n        postalCode\n        website\n        timezone\n        logoUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query Ghl_me($input: Ghl_meInput!) {\n    ghl_me(input: $input) {\n      name\n      email\n      firstName\n      lastName\n      phone\n      address\n      state\n      country\n      postalCode\n      business {\n        name\n        address\n        city\n        state\n        country\n        postalCode\n        website\n        timezone\n        logoUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ghl_getContacts($input: Ghl_getContactsInput!) {\n    ghl_getContacts(input: $input) {\n      contacts {\n        id\n        locationId\n        email\n        timezone\n        country\n        source\n        dateAdded\n        businessId\n        firstName\n        lastName\n        contactName\n      }\n    }\n  }\n"): (typeof documents)["\n  query ghl_getContacts($input: Ghl_getContactsInput!) {\n    ghl_getContacts(input: $input) {\n      contacts {\n        id\n        locationId\n        email\n        timezone\n        country\n        source\n        dateAdded\n        businessId\n        firstName\n        lastName\n        contactName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Ghl_sendMessage($input: Ghl_sendMessageInput!) {\n    ghl_sendMessage(input: $input) {\n      message\n      contactID\n      thread\n    }\n  }\n"): (typeof documents)["\n  mutation Ghl_sendMessage($input: Ghl_sendMessageInput!) {\n    ghl_sendMessage(input: $input) {\n      message\n      contactID\n      thread\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetPendingQueue($input: Queue_getPendingMessagesInput!) {\n  queue_getPendingMessages(input: $input) {\n    queue {\n      id\n      data {\n        groupID\n        groupName\n        contactID\n        contactName\n        type\n        message\n        offTimeConfig {\n          timezone\n        }\n        forceSend\n      }\n      delay\n      delayString\n    }\n  }\n}\n"): (typeof documents)["\nquery GetPendingQueue($input: Queue_getPendingMessagesInput!) {\n  queue_getPendingMessages(input: $input) {\n    queue {\n      id\n      data {\n        groupID\n        groupName\n        contactID\n        contactName\n        type\n        message\n        offTimeConfig {\n          timezone\n        }\n        forceSend\n      }\n      delay\n      delayString\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CancelPendingQueue($input: Queue_deletePendingMessageInput!) {\n  queue_deletePendingMessage(input: $input) {\n    queue {\n      id\n    }\n  }\n}\n"): (typeof documents)["\nmutation CancelPendingQueue($input: Queue_deletePendingMessageInput!) {\n  queue_deletePendingMessage(input: $input) {\n    queue {\n      id\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ChatSession($where: ChatSessionWhereUniqueInput!) {\n    chatSession(where: $where) {\n      sessionData\n    }\n  }\n"): (typeof documents)["\n  query ChatSession($where: ChatSessionWhereUniqueInput!) {\n    chatSession(where: $where) {\n      sessionData\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Snippet($where: SnippetWhereUniqueInput!) {\n    snippet(where: $where) {\n      id\n      name\n      tags\n      content\n      comment\n    }\n  }\n"): (typeof documents)["\n  query Snippet($where: SnippetWhereUniqueInput!) {\n    snippet(where: $where) {\n      id\n      name\n      tags\n      content\n      comment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Snippets($where: SnippetWhereInput!) {\n    snippets(where: $where) {\n      id\n      name\n      tags\n      content\n      comment\n    }\n  }\n"): (typeof documents)["\n  query Snippets($where: SnippetWhereInput!) {\n    snippets(where: $where) {\n      id\n      name\n      tags\n      content\n      comment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSnippet($data: SnippetCreateInput!) {\n    createSnippet(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSnippet($data: SnippetCreateInput!) {\n    createSnippet(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateSnippet(\n    $where: SnippetWhereUniqueInput!\n    $data: SnippetUpdateInput!\n  ) {\n    updateSnippet(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateSnippet(\n    $where: SnippetWhereUniqueInput!\n    $data: SnippetUpdateInput!\n  ) {\n    updateSnippet(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSnippet($where: SnippetWhereUniqueInput!) {\n    deleteSnippet(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSnippet($where: SnippetWhereUniqueInput!) {\n    deleteSnippet(where: $where) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;