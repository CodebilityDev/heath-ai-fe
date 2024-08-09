import { graphql } from "../generated";

export const GetGHL = graphql(`
  query Ghl_me($input: Ghl_meInput!) {
    ghl_me(input: $input) {
      name
      email
      firstName
      lastName
      phone
      address
      state
      country
      postalCode
      business {
        name
        address
        city
        state
        country
        postalCode
        website
        timezone
        logoUrl
      }
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

export const File_generateUploadURL = graphql(`
  mutation File_generateUploadURL($input: File_generateUploadURLInput!) {
    file_generateUploadURL(input: $input) {
      getURL
      putURL
    }
  }
`);
