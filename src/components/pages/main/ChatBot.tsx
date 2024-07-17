import IconMessage from "@/assets/svgs/IconMessage";
import ChatBubble from "@/components/common/ChatBubble";
import { Textarea } from "@/components/ui/textarea";
import { AIContextProvider, useAIContext } from "@/providers/AI-Provider";
import { SendHorizonal } from "lucide-react";
import { useEffect } from "react";
const Chat = () => {
  const { aiState, setAIState } = useAIContext();

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

  const convoStarter = [
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
  ];

  return (
    <div className="h-[calc(100vh-10rem+10px)] md:h-[calc(100vh-10rem)] flex flex-col w-full">
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
        <div className="flex gap-4 py-8 px-2 md:px-8 w-full max-w-6xl mx-auto md:pt-[90px] pt-20">
          <div className="flex gap-4 flex-col overflow-hidden">
            {/* Dump all the messages here. Both user and chatbot. Just make
        sure to differentiate between them. */}
            {aiState.messages.map((message, index) => (
              // Opacity-5 if current Session is !== to the session of the message object. This is to hide the messages that are from the previous session if the user is not logged in. It will only show the message of the current session
              <ChatBubble
                userChat={message.userMessage}
                chatBotResponse={message.botMessage}
                key={`chat-bubble-${index}`}
                // className="opacity-40 blur-sm"
              />
            ))}
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
      <div className="absolute bottom-0 w-full left-[50%] -translate-x-1/2 flex flex-col">
        <form
          className="w-full max-w-6xl px-4 mx-auto form-container flex flex-col"
          // onSubmit={}
        >
          <div className="grid grid-cols-3 w-full gap-x-2 md:gap-x-4 gap-y-2 ">
            {/* Only show when there is no conversation for the current session. Even if there is a conversation history, as long as the sesssion is new and the user is not logged in, show this convo starter */}
            {/* {convoStarter.map((convo, index) => (
              <div
                key={`convo-${index}`}
                className="bg-[#624FF61A] text-xs md:text-sm text-primary text-center px-4 md:px-8 py-4 rounded-xl"
              >
                {convo} →
              </div>
            ))} */}
          </div>
          <div className="relative flex flex-1 w-full gap-x-2 md:gap-x-4 mt-10">
            <div className="grow-wrap max-h-[10rem] md:min-h-[58px] w-full">
              <Textarea
                name="text"
                autoComplete="off"
                autoCorrect="off"
                autoFocus
                spellCheck={false}
                rows={1}
                tabIndex={0}
                id="text"
                placeholder="Hi how may i help you, please enter..."
                className="max-h-[10rem] rounded-[12px] border border-primary"
                onInput={(e: any) =>
                  (e.target.parentNode.dataset.replicatedValue = e.target.value)
                }
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <IconMessage />
            </div>

            <button
              className="flex-1 btn-submit self-end"
              // onClick={testWelcomeMessage}
            >
              <p className="hidden md:block">Send</p>
              <SendHorizonal size={18} className="md:hidden block" />
            </button>
          </div>
        </form>
        <div className="flex justify-center py-4 lg:mt-8">
          <p className="footer-text">
            © 2024 Obamacare AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const ChatBot = () => {
  return (
    <AIContextProvider>
      <Chat />
    </AIContextProvider>
  );
};

export default ChatBot;
