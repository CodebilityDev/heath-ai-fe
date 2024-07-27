import { ConfigInterface } from "@/types/Setting";
import { createContext, useCallback, useContext, useState } from "react";
export interface TemplateInterface {
  name: string;
  config: ConfigInterface;
}

type TemplateContextType = {
  template: TemplateInterface[] | [];
  setTemplate: React.Dispatch<
    React.SetStateAction<TemplateContextType["template"]>
  >;
  activeTemplate: TemplateInterface | null;
  setActiveTemplate: React.Dispatch<
    React.SetStateAction<TemplateContextType["activeTemplate"]>
  >;
};

export const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined
);

export const TemplateContextProvider = ({ children }: any) => {
  const [template, setTemplate] = useState<TemplateInterface[] | []>([
    {
      name: "Default",
      config: {
        companyStatement: "wew",
      },
    },
    {
      name: "New Template",
      config: {
        companyStatement: "wew",
      },
    },
  ]);
  const [activeTemplate, setActiveTemplate] =
    useState<TemplateInterface | null>(null);

  //  TODO: Edit Template
  const editTemplate = useCallback(
    () => (template: TemplateInterface) => {},
    []
  );

  // TODO: Delete Template

  const value = {
    template,
    setTemplate,
    activeTemplate,
    setActiveTemplate,
  };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

export function useTemplateContext() {
  const template = useContext(TemplateContext);
  if (!template) {
    throw new Error(
      "useTemplateContext must be used within an TemplateContextProvider"
    );
  }
  return template;
}
