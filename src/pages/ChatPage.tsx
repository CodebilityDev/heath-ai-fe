import React, { useState } from "react";
import { SidebarChatPage } from "../components/common/SidebarChatPage";
import { AIContextProvider } from "@/providers/AI-Provider";
import { SheetSidebar } from "@/components/common/SidebarSheet";
import { twMerge } from "tailwind-merge";
import ChatBot from "@/components/pages/main/ChatBot";
import { FormStep } from "@/types/AppState";

function ContentChatPage({
  formStep,
  setFormStep,
}: {
  formStep: FormStep[];
  setFormStep: React.Dispatch<React.SetStateAction<FormStep[]>>;
}) {
  return (
    <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
      <div className="sticky top-0 left-0 z-50 flex justify-between  w-full px-8 bg-white header-container">
        <p className="text-2xl font-bold">
          Federal<span className="text-2xl text-primary">Plans</span>
        </p>
        {/* Form Stepper Indicator */}
        <div className="mx-auto hidden lg:flex flex-col">
          <div className="items-center justify-center flex relative gap-x-4">
            {formStep?.map(({ title, step, completed, active }) => (
              <div
                className={twMerge(
                  "border-2 px-3 py-1 xl:px-4 rounded-full font-medium z-10 bg-white xl:py-2 border-gray-light",
                  completed && "border-primary bg-primary text-white",
                  active && "border-primary bg-primary text-white"
                )}
                key={`step-${step}`}
              >
                <p className="xl:block text-xs 2xl:text-sm hidden">{title}</p>
                <p className="xl:hidden block">{step}</p>
              </div>
            ))}

            <div className="w-full h-[2px] bg-gray-light absolute" />
          </div>
          <div className="mx-auto block xl:hidden ">
            {formStep.find((step) => step.active === true)?.title}
          </div>
        </div>
        <span className="block lg:hidden">
          <SheetSidebar sheetContentClassName="p-0">
            <SidebarChatPage
              className="border-none shadow-none h-full flex flex-col pt-10"
              formStep={formStep}
              setFormStep={setFormStep}
            />
          </SheetSidebar>
        </span>
      </div>
      <div className="relative">
        {/* Form Stepper Indicator */}
        <div className="lg:hidden z-20 bg-transparent backdrop-blur-md flex flex-col fixed w-full py-6">
          <div className="items-center mx-auto flex h-full relative gap-x-4">
            {formStep?.map(({ title, step, completed, active }) => (
              <div
                className={twMerge(
                  "border-2 px-4 rounded-full font-medium z-10 bg-white py-2 border-gray-light",
                  completed && "border-primary bg-primary text-white",
                  active && "border-primary bg-primary text-white"
                )}
                key={`step-${step}`}
              >
                <p className="lg:block hidden">{title}</p>
                <p className="lg:hidden block">{step}</p>
              </div>
            ))}
            <div className="w-full h-[2px] bg-gray-light absolute" />
          </div>
          <div className="mx-auto block xl:hidden shadow-md mt-2 px-4 py-2 rounded-xl bg-primary-light">
            {formStep.find((step) => step.active === true)?.title}
          </div>
        </div>
        <ChatBot paddingTop="pt-56" />
      </div>
    </div>
  );
}

const ChatPage = () => {
  const [formStep, setFormStep] = useState<FormStep[]>([
    {
      step: 1,
      title: "Personal and Contact Info",
      completed: false,
      active: true,
      contents: [
        {
          description: "Personal and Contact Info",
          data: {},
        },
      ],
    },
    {
      step: 2,
      title: "Household Details",
      completed: false,
      active: false,
      contents: [
        {
          description: "Household and Application Details",
          data: {},
        },
      ],
    },
    {
      step: 3,
      title: "Personal Info",
      completed: false,
      active: false,
      contents: [
        {
          description: "Marital, Tax, and Financial Info",
          data: {},
        },
        {
          description: "Health, Citizenship, and Disability Info",
          data: {},
        },
      ],
    },
    {
      step: 4,
      title: "Imployment",
      completed: false,
      active: false,
      contents: [
        {
          description: "Coverage, Employment, and Consent",
          data: {},
        },
      ],
    },
    {
      step: 5,
      title: "Confirmation",
      completed: false,
      active: false,
    },
  ]);
  return (
    <AIContextProvider>
      <div className="flex justify-end w-full">
        <SidebarChatPage
          className="w-[350px] hidden lg:flex flex-col pt-4"
          formStep={formStep}
          setFormStep={setFormStep}
        />
        <ContentChatPage formStep={formStep} setFormStep={setFormStep} />
      </div>
    </AIContextProvider>
  );
};

export default ChatPage;
