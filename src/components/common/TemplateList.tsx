import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import {
  TemplateInterface,
  useTemplateContext,
} from "@/providers/Template-Provider";
import SnippetModal from "../pages/main/modals/SnippetModal";
import { toast } from "react-toastify";

const TemplateList = ({ templates }: { templates: TemplateInterface[] }) => {
  const { setActiveTemplate, activeTemplate } = useTemplateContext();
  const [filterText, setFilterText] = React.useState("");
  const [showModal, setShowModal] = React.useState<string | false>(false);
  return (
    <>
      <div className="flex flex-col h-full py-4">
        <h1 className="px-2 pb-2 text-black/50 md:px-6">Templates</h1>
        <div className="flex w-full px-6">
          <input
            type="text"
            placeholder="Search Templates"
            className="w-full px-2 py-1 border rounded-lg md:px-6"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          ></input>
          <button
            className="px-2 py-1 ml-2 text-white rounded-lg bg-primary"
            onClick={() => setShowModal("(new)")}
          >
            New
          </button>
        </div>
        <ScrollArea className="h-full">
          <div className="w-full px-2 py-2 space-y-2 md:px-6 gap-y-2 ">
            {templates
              .filter(
                (template) =>
                  template.name.includes(filterText) ||
                  template.config.includes(filterText)
              )
              .map((template, index) => (
                <div
                  key={`template-${index}`}
                  className="w-full px-6 py-2 overflow-hidden transition border rounded-lg cursor-pointer hover:text-white hover:bg-primary"
                  // onClick={() => setActiveTemplate(template)}
                  onClick={() => setShowModal(template.id)}
                >
                  <div className="flex items-center">
                    <p className="w-full text-sm truncate max-w-[50%]">
                      {template.name}
                    </p>
                    <button
                      className="ml-auto text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(template.config);
                        toast.success("Copied to clipboard");
                      }}
                    >
                      Copy
                    </button>
                  </div>
                  <p className="text-xs">{template.config.substring(0, 100)}</p>
                </div>
              ))}
          </div>
        </ScrollArea>
      </div>
      <SnippetModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onConnect={() => {}}
      />
    </>
  );
};

export default TemplateList;
