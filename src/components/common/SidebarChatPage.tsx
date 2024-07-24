import { twMerge } from "tailwind-merge";
import { Edit } from "lucide-react";
import { FormStep } from "@/types/AppState";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "../ui/button";
export function SidebarChatPage({
  formStep,
  setFormStep,
  className,
}: {
  className?: string;
  formStep: FormStep[];
  setFormStep: React.Dispatch<React.SetStateAction<FormStep[]>>;
}) {
  return (
    <>
      <div
        className={twMerge(
          "lg:h-screen lg:overflow-y-auto no-scrollbar border border-gray-light shadow-lg",
          className
        )}
      >
        <div className="flex items-center px-4 w-full justify-between">
          <h1 className="text-lg md:text-xl font-bold leading-6 text-wrap w-52">
            Health Insurance Application Progress
          </h1>
          <span className="p-2 rounded-full bg-primary-light">
            <Edit className="size-5 text-primary" />
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-y-4 flex-1  px-4">
          <p>User Session Located Here</p>
          <p>
            <b>TODO</b>
          </p>
          {formStep.map((item, indexA) =>
            item.contents?.map((content, indexB) => (
              <div
                className="py-2 md:py-4 px-6 bg-primary-light rounded-xl flex items-center justify-between"
                key={`${indexA}-${indexB}`}
              >
                <p className="text-xs md:text-sm">{content.description}</p>
                <MdKeyboardArrowRight className="size-6" />
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col gap-y-2 border pb-4 lg:pb-16 px-4 pt-4">
          <Button className="py-6 text-xs md:text-sm">Save Progress</Button>
          <Button className="py-6 text-xs md:text-sm" variant="outline">
            Review and Submit
          </Button>
        </div>
      </div>
    </>
  );
}
