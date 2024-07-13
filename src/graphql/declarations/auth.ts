import { graphql } from "@graphql/generated";

export const Login = graphql(`
  mutation Login($email: String!, $password: String!) {
    authclient_login(email: $email, password: $password) {
      ... on ClientItemAuthenticationWithPasswordSuccess {
        sessionToken
      }
    }
  }
`);

export const Register = graphql(`
  mutation Register(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    authclient_register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    )
  }
`);

export const RequestResetPassword = graphql(`
  mutation RequestResetPassword($email: String!) {
    authclient_requestPasswordReset(email: $email)
  }
`);

export const ResetPassword = graphql(`
  mutation ResetPassword($token: String!, $password: String!) {
    authclient_resetPassword(token: $token, password: $password)
  }
`);
