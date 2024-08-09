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
      }
    }
  }
`);

export const GetGroups = graphql(`
  query Groups {
    groups {
      id
      name
      ghlAccess {
        id
      }
    }
  }
`);

export const GetGroup = graphql(`
  query Group($where: GroupWhereUniqueInput!) {
    group(where: $where) {
      id
      name
      members {
        id
        user {
          id
          displayName
          email
        }
        access
      }
      membersCount
      botConfig {
        id
      }
      ghlAccess {
        id
        locationId
        refreshToken
        scope
      }
      aiKey {
        id
        openapiKey
      }
      enable_globalWelcome
      enable_globalAutoReply
      enable_globalContactUpdate
      contactConfigs
      enable_botIsAssistant
      botAssistantName
      check_dndNotice
      dndNoticeMessage
      enable_noSSN
      enable_checkProfanity
      availability_enabled
      availability_start
      availability_end
      user_contextFields
      enable_profileBuilder
      enable_activeSurvey
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

export const CreateGroup = graphql(`
  mutation CreateGroup($data: GroupCreateInput!) {
    createGroup(data: $data) {
      id
    }
  }
`);

export const UpdateGroup = graphql(`
  mutation UpdateGroup(
    $where: GroupWhereUniqueInput!
    $data: GroupUpdateInput!
  ) {
    updateGroup(where: $where, data: $data) {
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
