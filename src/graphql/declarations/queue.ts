import { graphql } from "../generated";

export const GetPendingQueue = graphql(`
query GetPendingQueue($input: Queue_getPendingMessagesInput!) {
  queue_getPendingMessages(input: $input) {
    queue {
      id
      data {
        groupID
        groupName
        contactID
        contactName
        type
        message
        offTimeConfig {
          timezone
        }
        forceSend
      }
      delay
      delayString
    }
  }
}
`);

export const CancelPendingQueue = graphql(`
mutation CancelPendingQueue($input: Queue_deletePendingMessageInput!) {
  queue_deletePendingMessage(input: $input) {
    queue {
      id
    }
  }
}
`);