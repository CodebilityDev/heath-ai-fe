import { createContext, useContext, useState } from "react";

interface Message {
  id?: string;
  userMessage?: string;
  botMessage?: React.ReactNode;
}
type AIContextType = {
  aiState: {
    conversationId?: string;
    messages: Message[] | [];
    isChatting: boolean;
    connection: "loading" | "false" | "true";
  };
  setAIState: React.Dispatch<React.SetStateAction<AIContextType["aiState"]>>;
};

export const AIContext = createContext<AIContextType | undefined>(undefined);

export interface Props {
  [propName: string]: any;
}

export const AIContextProvider = ({ children }: any) => {
  const [aiState, setAIState] = useState<AIContextType["aiState"]>({
    conversationId: undefined,
    messages: [],
    isChatting: false,
    connection: "false",
  });

  const value = {
    aiState,
    setAIState,
  };

  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
};

export function useAIContext() {
  const ai = useContext(AIContext);
  if (!ai) {
    throw new Error("useAIContext must be used within an AIContextProvider");
  }
  return ai;
}
