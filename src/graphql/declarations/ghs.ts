import { graphql } from "../generated";

export const GetGHL = graphql(`
  query Ghl_me {
    ghl_me {
      name
      email
      firstName
      lastName
      phone
      address
      state
      country
      postalCode
    }
  }
`);

export const ghl_getContacts = graphql(`
  query ghl_getContacts($input: Ghl_getContactsInput!) {
    ghl_getContacts(input: $input) {
      contacts {
        id
        locationId
        email
        timezone
        country
        source
        dateAdded
        businessId
        firstName
        lastName
        contactName
      }
    }
  }
`);

export const Ghl_sendMessage = graphql(`
  mutation Ghl_sendMessage($input: Ghl_sendMessageInput!) {
    ghl_sendMessage(input: $input) {
      message
      contactID
      thread
    }
  }
`);
