/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

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
  "\n  mutation AuthenticateUserWithPassword(\n    $email: String!\n    $adminPassword: String!\n  ) {\n    authenticateUserWithPassword(email: $email, adminPassword: $adminPassword) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          email\n          displayName\n        }\n      }\n    }\n  }\n":
    types.AuthenticateUserWithPasswordDocument,
  "\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        groupsCount\n      }\n    }\n  }\n":
    types.UserDocument,
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
export function graphql(
  source: "\n  mutation AuthenticateUserWithPassword(\n    $email: String!\n    $adminPassword: String!\n  ) {\n    authenticateUserWithPassword(email: $email, adminPassword: $adminPassword) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          email\n          displayName\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation AuthenticateUserWithPassword(\n    $email: String!\n    $adminPassword: String!\n  ) {\n    authenticateUserWithPassword(email: $email, adminPassword: $adminPassword) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        sessionToken\n        item {\n          id\n          email\n          displayName\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        email\n        displayName\n        role\n      }\n    }\n  }\n"
): (typeof documents)["\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        email\n        displayName\n        role\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
