export interface AppStateInterface {
  openAiAPIKey: OpenAiAPIKeyInterface | null
  excelExplore: ExcelExploreInterface | null
  formats: any[]
  currentFormatId: string
  apiClient: any
  isLoading: boolean
  connected: boolean
}

export interface OpenAiAPIKeyInterface {
  apiKey: string
  secretKey: string
  whiteLink: boolean
  logoUrl: string
  ghlBusinessIT: string
  ghlAPI: string
}

export interface ExcelExploreInterface {
  description: string
  type: number
  fileUrl: string
}