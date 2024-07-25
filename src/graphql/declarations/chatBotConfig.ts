import { graphql } from "../generated";

export const ConversationBotConfig = graphql(`
  query ConversationBotConfig($where: ConversationBotConfigWhereUniqueInput!) {
    conversationBotConfig(where: $where) {
      id
      name
      companyStatement
      tonestyle
      priorityPlan
      healthInsuranceCarriers
      presentationStrategy
      specificQuestions
      summaryPrompt
      welcomeMessage
      welcomeMessageFormat
      noZipCodeMessage
    }
  }
`);

export const ConversationBotConfigs = graphql(`
  query ConversationBotConfigs($where: ConversationBotConfigWhereInput!) {
    conversationBotConfigs(where: $where) {
      id
      name
      companyStatement
      tonestyle
      priorityPlan
      healthInsuranceCarriers
      presentationStrategy
      specificQuestions
      summaryPrompt
      welcomeMessage
      welcomeMessageFormat
      noZipCodeMessage
    }
  }
`);

export const CreateConversationBotConfig = graphql(`
  mutation CreateConversationBotConfig(
    $data: ConversationBotConfigCreateInput!
  ) {
    createConversationBotConfig(data: $data) {
      id
    }
  }
`);

export const UpdateConversationBotConfig = graphql(`
  mutation UpdateConversationBotConfig(
    $where: ConversationBotConfigWhereUniqueInput!
    $data: ConversationBotConfigUpdateInput!
  ) {
    updateConversationBotConfig(where: $where, data: $data) {
      id
    }
  }
`);

export const DeleteBotConfig = graphql(`
  mutation DeleteBotConfig($where: BotConfigWhereUniqueInput!) {
    deleteBotConfig(where: $where) {
      id
    }
  }
`);
