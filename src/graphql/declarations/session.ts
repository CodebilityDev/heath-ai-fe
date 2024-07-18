import { graphql } from "../generated";

export const GetChatSession = graphql(`
  query ChatSession($where: ChatSessionWhereUniqueInput!) {
    chatSession(where: $where) {
      sessionData
    }
  }
`);
