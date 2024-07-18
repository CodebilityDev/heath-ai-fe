import React from "react";
import { twMerge } from "tailwind-merge";

const ChatBubble = ({
  userChat,
  chatBotResponse,
  className,
}: {
  userChat: string;
  chatBotResponse: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "whitespace-pre-wrap text-wrap bg-[#f5f5f55e] p-4 rounded-xl flex flex-col gap-y-4",
        className
      )}
    >
      <div className="bg-[#F6F5FF] rounded-xl text-sm md:text-base font-bold p-4">
        {userChat}
      </div>
      {!chatBotResponse && (
        <div className="px-4 break-words text- text-wrap animate-pulse">
          <div className="w-24 h-8 rounded-md bg-gray-light-100">&nbsp;</div>
        </div>
      )}
      <p className="px-4 break-words whitespace-pre-wrap text- text-wrap">
        {`${chatBotResponse ?? ""}`}
      </p>
    </div>
  );
};

export default ChatBubble;
