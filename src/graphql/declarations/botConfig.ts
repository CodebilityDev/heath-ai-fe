import { graphql } from "../generated";

export const GetBotConfig = graphql(`
  query BotConfig($where: BotConfigWhereUniqueInput!) {
    botConfig(where: $where) {
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

export const ListBotConfig = graphql(`
  query BotConfigs($where: BotConfigWhereInput!) {
    botConfigs(where: $where) {
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

export const CreateBotConfig = graphql(`
  mutation CreateBotConfig($data: BotConfigCreateInput!) {
    createBotConfig(data: $data) {
      id
    }
  }
`);

export const UpdateBotConfig = graphql(`
  mutation UpdateBotConfig(
    $where: BotConfigWhereUniqueInput!
    $data: BotConfigUpdateInput!
  ) {
    updateBotConfig(where: $where, data: $data) {
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
