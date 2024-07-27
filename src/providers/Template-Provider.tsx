import { apolloClient } from "@/graphql/client";
import { ListSnippets } from "@/graphql/declarations/snippets";
import { ConfigInterface } from "@/types/Setting";
import { useQuery } from "@apollo/client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
export interface TemplateInterface {
  id: string;
  name: string;
  config: string;
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
  const { gid } = useParams();

  const [template, setTemplate] = useState<TemplateInterface[] | []>([]);

  const { data: templateData } = useQuery(ListSnippets, {
    variables: {
      where: {
        group: {
          id: {
            equals: gid,
          },
        },
      },
    },
    skip: !gid,
  });

  useEffect(() => {
    if (templateData) {
      setTemplate(
        templateData.snippets?.map((snippet: any) => ({
          id: snippet.id,
          name: snippet.name,
          config: snippet.content,
        })) || []
      );
    }
  }, [templateData]);

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
