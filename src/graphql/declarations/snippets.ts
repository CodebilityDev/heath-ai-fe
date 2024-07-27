import { graphql } from "../generated";

export const GetSnippet = graphql(`
  query Snippet($where: SnippetWhereUniqueInput!) {
    snippet(where: $where) {
      id
      name
      tags
      content
      comment
    }
  }
`);

export const ListSnippets = graphql(`
  query Snippets($where: SnippetWhereInput!) {
    snippets(where: $where) {
      id
      name
      tags
      content
      comment
    }
  }
`);

export const CreateSnippet = graphql(`
  mutation CreateSnippet($data: SnippetCreateInput!) {
    createSnippet(data: $data) {
      id
    }
  }
`);

export const UpdateSnippet = graphql(`
  mutation UpdateSnippet(
    $where: SnippetWhereUniqueInput!
    $data: SnippetUpdateInput!
  ) {
    updateSnippet(where: $where, data: $data) {
      id
    }
  }
`);

export const DeleteSnippet = graphql(`
  mutation DeleteSnippet($where: SnippetWhereUniqueInput!) {
    deleteSnippet(where: $where) {
      id
    }
  }
`);
