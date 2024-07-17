import { graphql } from "../generated";

export const GetMe = graphql(`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        lastName
        displayName
        email
        role
        createdAt
        ghlAccess {
          id
          refreshToken
          scope
        }
        aiKey {
          id
          openapiKey
        }
      }
    }
  }
`);

export const UpdateUser = graphql(`
  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser(where: $where, data: $data) {
      id
    }
  }
`);

export const UpdateAIKey = graphql(`
  mutation UpdateAIKey(
    $where: AIKeyWhereUniqueInput!
    $data: AIKeyUpdateInput!
  ) {
    updateAIKey(where: $where, data: $data) {
      id
    }
  }
`);
