import { graphql } from '../generated'

export const CreateBrandingSetting = graphql(`
    mutation CreateBrandingSetting($data: BrandingCreateInput!) {
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
        lifestylePhotoUrls
        logoPhotoUrl
        colorPalette1
        colorPalette1Contrast
        colorPalette2
        colorPalette2Contrast
        }
    }
`);

export const UpdateBrandingSetting = graphql(`
    mutation UpdateBrandingSetting($where: BrandingWhereUniqueInput!, $data: BrandingUpdateInput!) {
        updateBranding(where: $where, data: $data) {
        id
        companyName
        companyMotto
        companyPhone
        companyEmail
        companyAddress
        companyWebsite
        companyDescription
        bannerLogoPhotoUrl
        lifestylePhotoUrls
        logoPhotoUrl
        colorPalette1
        colorPalette1Contrast
        colorPalette2
        colorPalette2Contrast
        group {
            id
        }
        }
    }
`)

export const DeleteBrandingSetting = graphql(`
    mutation DeleteBrandingSetting($where: BrandingWhereUniqueInput!) {
        deleteBranding(where: $where) {
            id
        }
  }
`)

export const GetBrandingSetting = graphql(`
    query Branding($where: BrandingWhereUniqueInput!) {
        branding(where: $where) {
        id
        companyName
        companyMotto
        companyPhone
        companyEmail
        companyAddress
        companyWebsite
        companyDescription
        bannerLogoPhotoUrl
        lifestylePhotoUrls
        logoPhotoUrl
        colorPalette1
        colorPalette1Contrast
        colorPalette2
        colorPalette2Contrast
        }
    }
`)