import React from "react";
import { ScrollArea } from "../ui/scroll-area";

const TemplateList = () => {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-black/50 px-2 md:px-6">Templates</h1>
      <ScrollArea className="h-full">
        <div className="w-full space-y-2 px-2 py-2 md:px-6 gap-y-2 ">
          {Array.from({ length: 15 }).map((_, i) => (
            <div className="cursor-pointer hover:text-white w-full transition overflow-hidden hover:bg-primary py-2 px-6 rounded-lg">
              <p className="truncate w-full max-w-64 text-sm">
                Lorem ipsum dolor sit amet. a;sldka;lsdk;dasdasd
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TemplateList;
