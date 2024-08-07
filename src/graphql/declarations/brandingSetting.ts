import { graphql } from "../generated";

const CreateBrandingSetting = graphql(`
    mutation CreateBranding($data: BrandingCreateInput!) {
        createBranding(data: $data) {
        id
        companyName
        companyMotto
        companyPhone
        companyEmail
        companyAddress
        companyWebsite
        companyDescription
        bannerLogoPhotoUrl
        lifestylePhotoUrl
        logoPhotoUrl
        colorPalette1
        colorPalette1Contrast
        colorPalette2
        colorPalette2Contrast
        }
    }
`)