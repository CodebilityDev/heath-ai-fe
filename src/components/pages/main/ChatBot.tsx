import IconMessage from "@/assets/svgs/IconMessage";
import ChatBubble from "@/components/common/ChatBubble";
import { Textarea } from "@/components/ui/textarea";
import { GetChatSession } from "@/graphql/declarations/session";
import { AIContextProvider, useAIContext } from "@/providers/AI-Provider";
import useSessionProvider from "@/providers/SessionProvider";
import { useQuery } from "@apollo/client";
import { SendHorizonal } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
const Chat = ({ paddingTop }: { paddingTop?: string }) => {
  const { aiState, setAIState } = useAIContext();
  const { sessionId, generateNewSessionId } = useSessionProvider();
  const [functionData, setFunctionData] = useState<{
    name: string;
    data: any;
  }>({
    name: "",
    data: {},
  });
  const [modelID, setModelID] = useState<string | null>(null);
  const { data: chatSessionData } = useQuery(GetChatSession, {
    variables: {
      where: {
        id: sessionId,
      },
    },
    skip: !sessionId,
  });

  useEffect(() => {
    if (chatSessionData?.chatSession) {
      const sessionData = JSON.parse(
        chatSessionData.chatSession.sessionData ?? "{}"
      );
      // filter all non user and non-assistant roles
      const messages = sessionData.history.filter(
        (message: any) =>
          message.role === "user" || message.role === "assistant"
      );
      let lastUser = messages[0].role;
      let userMessage = "";
      let botMessage = "";
      for (let message of messages) {
        // console.log("message", message, lastUser);
        if (lastUser != message.role) {
          if (message.role == "user") {
            // console.log("commit", {
            //   userMessage,
            //   botMessage,
            // });
            //commit the bot message
            setAIState((prev) => ({
              ...prev,
              messages: [
                ...prev.messages,
                {
                  userMessage: userMessage,
                  botMessage: botMessage,
                },
              ],
            }));
            userMessage = message.content;
            botMessage = "";
            lastUser = message.role;
          } else {
            lastUser = message.role;
            if (message.role === "user") {
              userMessage = message.content;
            } else {
              botMessage = message.content;
            }
          }
        } else {
          if (message.role === "user") {
            userMessage = message.content;
          } else {
            botMessage = message.content;
          }
        }
      }
    }
  }, [chatSessionData]);

  // get modelid from url params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const modelID = urlParams.get("id");
    if (modelID) {
      setModelID(modelID);
    }
  }, []);

  async function createNewSession() {
    setAIState({
      conversationId: nanoid(),
      messages: [],
      isChatting: false,
      connection: "false",
    });
    generateNewSessionId();
  }

  // useEffect(() => {
  //   setAIState({
  //     ...aiState,
  //     messages: [
  //       ...aiState.messages,
  //       {
  //         userMessage: "What is the best obamacare silver plan in my area?",
  //         botMessage:
  //           "Ok What is your zip code, age and estimated yearly income, is it safe to say you make more than 22k/year and do you live alone or have dependents? \n\nOk great if you like any of the plans above and are ready, lets start building a more precise quote for you with other details in mind like if you are taking any special meds or like to keep alignment with your current provider.  Would you like to get started?",
  //       },
  //     ],
  //   });
  // }, []);

  async function chatgptCall(args: {
    message: string;
    onMessage: (message: string) => void;
    onFunctionCall?: (data: any) => void;
    onFunctionReturn?: (data: any) => void;
    onDone: () => void;
  }) {
    let lastParsed;
    try {
      const serverURL = import.meta.env.VITE_GRAPHQL_URL.replace(
        "/api/graphql",
        ""
      );
      const response = await fetch(`${serverURL}/api/chatgpt/call`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: args.message,
          modelID: modelID,
          sessionID: sessionId,
        }),
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }

      // Here we start prepping for the streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const loopRunner = true;

      let message = "";
      while (loopRunner) {
        // Here we start reading the stream, until its done.
        const streamed = await reader.read();
        const { done, value } = streamed;
        if (done) {
          break;
        }
        const decodedChunks = decoder
          .decode(value, { stream: true })
          .split("\n");
        for (let chunk of decodedChunks) {
          if (!chunk) {
            continue;
          }
          lastParsed = chunk;
          try {
            const parsed = JSON.parse(chunk);
            const dataType = parsed.type;
            const data = parsed.content;
            switch (dataType) {
              case "reply": {
                args.onMessage(data);
                break;
              }
              case "functionCall": {
                const dataparsed = JSON.parse(data);
                args.onFunctionCall?.(dataparsed);
                break;
              }
              case "functionReturn": {
                const dataparsed = data;
                args.onFunctionReturn?.(dataparsed);
                break;
              }
              default: {
                break;
              }
            }
          } catch (error) {
            console.log("Failed to parse", chunk);
          }
        }
      }
    } catch (error: any) {
      console.log("lastParsed", lastParsed);
      console.error(error);
    }

    args.onDone();
  }

  const handleChatSubmit = async (e: any) => {
    e.preventDefault();
    const userChat = e.target[0].value;

    const generatedId = nanoid();

    setAIState((prev) => ({
      ...prev,
      isChatting: true,
      messages: [
        ...prev.messages,
        {
          id: generatedId,
          userMessage: userChat,
        },
      ],
    }));

    await chatgptCall({
      message: userChat,
      onMessage: (message) => {
        setAIState((prev) => {
          const newMessage = prev.messages.map((m: any) => {
            if (m.id === generatedId) {
              return {
                ...m,
                botMessage: message,
              };
            }
            return m;
          });
          return {
            ...prev,
            messages: [...newMessage],
          };
        });
      },
      onFunctionCall: (data) => {
        setFunctionData({
          name: data.name,
          data: data.data,
        });
      },
      onFunctionReturn: (data) => {
        setFunctionData({
          name: "",
          data: {},
        });
      },
      onDone: () => {
        setAIState((prev) => ({
          ...prev,
          isChatting: false,
        }));
        // clear the input field
        e.target[0].value = "";
      },
    });
  };

  const convoStarter = [
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
  ];

  useEffect(() => {
    const chatPane = document.getElementById("chatpane");
    chatPane?.scrollTo({
      top: chatPane.scrollHeight,
      behavior: "smooth",
    });
  }, [aiState.messages]);

  if (!modelID) {
    return (
      <div className="flex items-center justify-center h-[80vh]">Loading</div>
    );
  }

  return (
    <div className="h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] flex flex-col w-full">
      <div className="h-[calc(100%-3rem)] md:h-[calc(100%-6rem)] flex -mt-[5rem] overflow-y-auto flex-col-reverse relative">
        {/* TODO: Only for unlogged users */}
        {/* <p className="flex fixed top-36 left-1/2 lg:left-[calc(50%+11rem)] -translate-x-1/2 items-center gap-x-2 bg-[#F9F9F9] text-center justify-center py-2 px-6 w-full lg:w-auto rounded-md mt-8 text-xs">
          <img src="/images/alert.svg" alt="alert" className="size-4" />
          <p className="text-xs">
            Please{" "}
            <a href="/sign-in" className="text-xs underline">
              login
            </a>{" "}
            or{" "}
            <a href="/sign-up" className="text-xs underline">
              signup
            </a>{" "}
            to save and revisit your chat history!
          </p>
        </p> */}
        <div
          className={twMerge(
            "flex gap-4 py-8 px-2 md:px-8 w-full max-w-6xl mx-auto lg:pt-[90px] pt-24 pb-52",
            paddingTop
          )}
        >
          <div
            className="flex flex-col gap-4 overflow-hidden w-full"
            id="chatpane"
          >
            {/* Dump all the messages here. Both user and chatbot. Just make
        sure to differentiate between them. */}
            {aiState.messages.map((message, index) => (
              // Opacity-5 if current Session is !== to the session of the message object. This is to hide the messages that are from the previous session if the user is not logged in. It will only show the message of the current session
              <ChatBubble
                userChat={message.userMessage!}
                chatBotResponse={message.botMessage}
                key={`chat-bubble-${index}`}
                // className="opacity-40 blur-sm"
              />
            ))}
            {aiState.isChatting && functionData.name != "" && (
              <div className="p-1 mx-8 font-mono bg-slate-100 animate-pulse">
                <p>Calling Function: {functionData.name}</p>
              </div>
            )}
            {/* <ChatBubble
          userChat="What is the best obamacare silver plan in my area?"
          chatBotResponse={`Ok What is your zip code, age and estimated yearly income, is it safe to say you make more than 22k/year and do you live alone or have dependents? \n\nOk great if you like any of the plans above and are ready, lets start building a more precise quote for you with other details in mind like if you are taking any special meds or like to keep alignment with your current provider.  Would you like to get started?`}
        />
        <ChatBubble
          userChat="Yes"
          chatBotResponse={`Ok great, i just need a couple personal details and I can do the heavy lifting.  I just need your first and last name, dob and consent to look on your behalf.`}
        />
        <ChatBubble
          userChat="John smith” 11/11/1980"
          chatBotResponse={`Perfect now here is a link to confirm your consent so that i can find the best plan on your behalf.  Aka do the heavy lifting based on 100’s of variables
https://api.leadconnectorhq.com/widget/survey/G7G1OQqFDfdSB1TGnii2`}
        /> */}
          </div>
        </div>
      </div>
      <div className="absolute pt-4 bg-white bottom-0 w-full left-[50%] -translate-x-1/2 flex flex-col">
        <form
          className="flex flex-col w-full max-w-6xl px-4 mx-auto form-container"
          onSubmit={handleChatSubmit}
          id="chat-form"
        >
          <div className="grid w-full grid-cols-3 gap-x-2 md:gap-x-4 gap-y-2 ">
            {/* Only show when there is no conversation for the current session. Even if there is a conversation history, as long as the sesssion is new and the user is not logged in, show this convo starter */}
            {convoStarter.map((convo, index) => (
              <div
                key={`convo-${index}`}
                className="bg-[#624FF61A] text-xs md:text-sm text-primary text-center px-4 md:px-8 py-4 rounded-xl"
              >
                {convo} →
              </div>
            ))}
          </div>
          <div className="relative flex flex-1 w-full mt-10 gap-x-2 md:gap-x-2">
            <div className="w-full h-fit">
              <Textarea
                name="user-prompt"
                autoComplete="off"
                autoCorrect="off"
                autoFocus
                spellCheck={false}
                rows={1}
                disabled={aiState.isChatting}
                tabIndex={0}
                id="text"
                placeholder="Hi how may i help you, please enter..."
                className="h-fit pl-12 py-4 rounded-[12px] border border-primary resize-none"
                onInput={(e: any) =>
                  (e.target.parentNode.dataset.replicatedValue = e.target.value)
                }
                onKeyDown={(e: any) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    e.target.blur();
                    document.getElementById("submit")?.click();
                  }
                }}
              />
            </div>
            <div className="absolute -translate-y-1/2 top-1/2 left-4">
              <IconMessage />
            </div>

            <button
              id="submit"
              className="self-end flex-1 btn-submit"
              type="submit"
              disabled={aiState.isChatting}
              aria-disabled={aiState.isChatting}
            >
              <p className="hidden md:block">Send</p>
              <SendHorizonal size={18} className="block md:hidden" />
            </button>
          </div>
          <p className="mt-2 text-xs">
            Session ID: {sessionId}{" "}
            <span
              className="text-xs text-purple-700 underline cursor-pointer"
              onClick={() => {
                createNewSession();
              }}
            >
              Reset Chat Session
            </span>
          </p>
        </form>
        <div className="flex justify-center py-2 mb-2 lg:mt-2">
          <p className="footer-text">
            © 2024 Obamacare AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const ChatBot = ({ paddingTop }: { paddingTop?: string }) => {
  return <Chat paddingTop={paddingTop} />;
};

export default ChatBot;
