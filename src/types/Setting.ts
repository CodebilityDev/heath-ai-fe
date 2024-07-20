import { DateValueType } from "react-tailwindcss-datepicker";

export interface SettingInterface {
  location_id: string;
  zip_code: string;
  first_name: string;
  last_name: string;
  dob: string;
  state: string;
  gender: string;
  how_many_people_in_your_household_need_to_be_on_the_plan: string;
  yearly_income: string;
  number_of_tax_dependents: string;
  has_tax_dependents: string;
  spouse_name: string;
  projected_annual_household_income: string;
  agent_first_name: string;
  agent_last_name: string;
}

export interface TestConfigInterface {
  first_name: string;
  last_name: string;
  dob: string;
  yearly_income: string;
  number_of_tax_dependents: string;
  zip_code: string;
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
  welcomeMessageFormat?: string | null;
  noZipCodeMessage?: string | null;
}
