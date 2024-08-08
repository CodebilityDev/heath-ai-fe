import { graphql } from '../generated'

export const FileUpload = graphql(`
    mutation FileUpload($input: File_generateUploadURLInput!) {
        file_generateUploadURL(input: $input) {
            getURL
            putURL
        }
    } 
`)