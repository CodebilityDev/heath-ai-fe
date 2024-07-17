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
      <p className="text-xs text-wrap break-words">{chatBotResponse}</p>
    </div>
  );
};

export default ChatBubble;
