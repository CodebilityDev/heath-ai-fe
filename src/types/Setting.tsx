import { DateValueType } from "react-tailwindcss-datepicker";

export interface SettingInterface {
  id: string;
  formatName: string;
  mission: string;
  tone: string;
  plan: string;
  carriers: string[];
  recommendedPlan: number;
  chatbotQuestion: string;
  summary: string;
  exMessage: string;
  firstName: string;
  lastName: string;
  dob: string;
  income: number;
  dependents: number;
  zipCode: number;
  agentFirstName: string;
  agentLastName: string;
}

export interface TestConfigInterface {
  firstName: string;
  lastName: string;
  dob: DateValueType;
  income: string;
  dependents: string;
  postalCode: string;
  message: string;
}

export interface ConfigInterface {
  companyStatement?: string | null;
  tonestyle?: string | null;
  priorityPlan?: string | null;
  healthInsuranceCarriers?: string | null;
  presentationStrategy?: string | null;
  specificQuestions?: string | null;
  summaryPrompt?: string | null;
  welcomeMessage?: string | null;
}
