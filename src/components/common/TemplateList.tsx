import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import {
  TemplateInterface,
  useTemplateContext,
} from "@/providers/Template-Provider";

const TemplateList = ({ templates }: { templates: TemplateInterface[] }) => {
  const { setActiveTemplate, activeTemplate } = useTemplateContext();
  console.log(activeTemplate);
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-black/50 px-2 md:px-6">Templates</h1>
      <ScrollArea className="h-full">
        <div className="w-full space-y-2 px-2 py-2 md:px-6 gap-y-2 ">
          {templates.map((template, index) => (
            <div
              key={`template-${index}`}
              className="cursor-pointer hover:text-white w-full transition overflow-hidden hover:bg-primary py-2 px-6 rounded-lg"
              onClick={() => setActiveTemplate(template)}
            >
              <p className="truncate w-full max-w-64 text-sm">
                {template.name}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TemplateList;
