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
