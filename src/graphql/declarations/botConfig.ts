import { graphql } from "@graphql/generated";

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
    }
  }
`);

export const ListBotConfig = graphql(`
  query BotConfigs(
    $where: BotConfigWhereInput!
    $orderBy: [BotConfigOrderByInput!]!
    $take: Int
    $skip: Int!
    $cursor: BotConfigWhereUniqueInput
  ) {
    botConfigs(
      where: $where
      orderBy: $orderBy
      take: $take
      skip: $skip
      cursor: $cursor
    ) {
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
