import { graphql } from "@graphql/generated";

export const GetMe = graphql(`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        lastName
        email
        displayName
        role
      }
    }
  }
`);
