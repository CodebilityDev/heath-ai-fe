import { graphql } from "../generated";

export const GetCustomFields = graphql(`
query GetCustomFields($input: Ghl_getCustomFieldsInput!) {
  ghl_getCustomFields(input: $input) {
    customFields {
      id
      name
      fieldKey
      placeholder
      dataType
      position
      picklistOptions
      picklistImageOptions
      isAllowedCustomOption
      isMultiFileAllowed
      maxFileLimit
      locationId
      model
    }
  }
}
`);

export const ModifyCustomFields = graphql(`
mutation ModifyCustomFields($input: Ghl_setCustomFieldsInput!) {
  ghl_setCustomFields(input: $input)
}
`);

export const BreakCustomFieldCache = graphql(`
mutation Ghl_breakCustomFieldsCache($input: Ghl_breakCustomFieldsCacheInput!) {
  ghl_breakCustomFieldsCache(input: $input)
}
`);
