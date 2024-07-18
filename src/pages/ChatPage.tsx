import "react-toastify/dist/ReactToastify.css";
import { twMerge } from "tailwind-merge";
import { SheetSidebar } from "@/components/common/SidebarSheet";
import ChatBot from "@/components/pages/main/ChatBot";
import { AIContextProvider } from "@/providers/AI-Provider";

function Sidebar({ className }: { className?: string }) {
  return (
    <>
      <div
        className={twMerge(
          "lg:h-screen lg:overflow-y-auto no-scrollbar border border-gray-light shadow-lg",
          className
        )}
      >
        <p>User Session Located Here</p>
        <p>
          <b>TODO</b>
        </p>
      </div>
    </>
  );
}

function Content() {
  return (
    <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
      <div className="sticky top-0 left-0 z-50 flex justify-between w-full px-8 bg-white header-container">
        <p className="text-2xl font-bold">
          Federal<span className="text-2xl text-primary">Plans</span>
        </p>
        <span className="block lg:hidden">
          <SheetSidebar>
            <Sidebar className="border-none shadow-none" />
          </SheetSidebar>
        </span>
      </div>
      <div className="relative">
        <ChatBot />
      </div>
    </div>
  );
}

export const ChatPage = () => {
  return (
    <AIContextProvider>
      <div className="flex justify-end w-full">
        <Sidebar className="w-[350px] hidden lg:block p-8" />
        <Content />
      </div>
    </AIContextProvider>
  );
};
