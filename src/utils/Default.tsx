import { SettingInterface } from "@/types/Setting";
import { AppStateInterface, ExcelExploreInterface } from "@/types/AppState";
import { AgentInterface } from "@/types/Agent";
import API from "@utils/API";

import { OpenAiAPIKeyInterface } from "@/types/AppState";

export const defaultOpenAiAPIKey: OpenAiAPIKeyInterface = {
  apiKey: "",
  secretKey: "",
  whiteLink: false,
  logoUrl: "",
  ghlBusinessIT: "",
  ghlAPI: "",
};

export const defaultExcelExplore: ExcelExploreInterface = {
  description: "",
  type: 0,
  fileUrl: "",
};

export const defaultSetting: SettingInterface = {
  id: "",
  formatName: "",
  mission: "",
  tone: "",
  plan: "Silver(Recommended)",
  carriers: [],
  recommendedPlan: 0,
  chatbotQuestion: "",
  summary: "",
  exMessage: "",
  firstName: "",
  lastName: "",
  dob: "2024-01-01",
  income: 0,
  dependents: 0,
  zipCode: 0,
  agentFirstName: "",
  agentLastName: "",
};

export const defaultAgent: AgentInterface = {
  agentId: "",
  companyName: "",
  firstName: "",
  lastName: "",
  logoUrl: "",
  company: "",
  country: "",
  state: "",
  city: "",
  address: "",
  postalCode: "",
  email: "",
  registerDate: "",
};

export const defaultAppState: AppStateInterface = {
  openAiAPIKey: defaultOpenAiAPIKey,
  excelExplore: defaultExcelExplore,
  formats: [],
  apiClient: new API(""),
  currentFormatId: "",
  isLoading: false,
  connected: false,
};
