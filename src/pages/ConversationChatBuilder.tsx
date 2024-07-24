import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DeleteIcon, EditIcon } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./BotEditor";
import { SheetSidebar } from "@/components/common/SidebarSheet";

const ConversationChatBuilder = () => {
  return (
    <div className="flex justify-end w-full">
      <Sidebar className="w-[350px] hidden lg:flex" />
      <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
        <div className="sticky top-0 left-0 z-50 flex justify-between w-full px-8 bg-white header-container">
          <p className="text-2xl font-bold">
            Federal<span className="text-2xl text-primary">Plans</span>
          </p>
          <span className="block lg:hidden">
            <SheetSidebar>
              <Sidebar className="flex border-none shadow-none" />
            </SheetSidebar>
          </span>
        </div>
        <div className="form-container mt-8">
          <div className="form-content">
            <PrePromptEditor />
            TODO: Other Configuration Options for Chat Builder
          </div>
        </div>
      </div>
    </div>
  );
};

const PrePromptEditor = () => {
  const [textArea, setTextArea] = useState("");
  const [editMode, setEditMode] = useState<{
    mode: boolean;
    idxToEdit: number | null;
  }>({
    mode: false,
    idxToEdit: null,
  });
  const [prePrompts, setPrePrompts] = useState<string[] | []>([]);
  return (
    <div className="w-full">
      <p className="form-label">Pre Prompt Editor</p>
      <div className="form-carrier-container">
        <div className={"w-full"}>
          <Textarea
            className="w-full resize-none rounded-xl mb-4 h-32"
            rows={2}
            placeholder="Enter pre prompt"
            onChange={(e: any) => {
              setTextArea(e.target.value);
            }}
            value={textArea}
          />
          <div className="w-full mb-4 flex gap-2 flex-wrap">
            {prePrompts.map((prePrompt: string, idx: number) => (
              <div
                key={`prePrompt-${idx}`}
                className="w-72 justify-between flex gap-x-1 items-center bg-primary text-white  px-4 rounded-lg overflow-hidden py-2"
              >
                <p className="truncate">{prePrompt}</p>
                <div className="flex">
                  <Button
                    variant="ghost"
                    className="p-0 h-8 w-8 hover:bg-transparent hover:text-green-300 rounded-full"
                    onClick={() => {
                      setEditMode((prev) => ({
                        ...prev,
                        mode: true,
                        idxToEdit: idx,
                      }));
                      setTextArea(prePrompts[idx]);
                    }}
                  >
                    <EditIcon className="size-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 h-8 w-8 hover:bg-transparent hover:text-red-300  rounded-full"
                    onClick={() => {
                      setPrePrompts(prePrompts.filter((_, i) => i !== idx));
                    }}
                  >
                    <DeleteIcon className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="btn-primary-lg btn-outlined disabled:text-gray disabled:border-gray disabled:cursor-not-allowed disabled:hover:bg-transparent"
          disabled={prePrompts.length >= 4 || !textArea}
          aria-disabled={prePrompts.length >= 4 || !textArea}
          onClick={(e: any) => {
            e.preventDefault();

            setTextArea("");
            if (editMode.mode) {
              setEditMode((prev) => ({
                ...prev,
                mode: false,
                idxToEdit: null,
              }));

              setPrePrompts((prev) => {
                prev[editMode.idxToEdit!] = textArea;
                return prev;
              });
              return;
            }
            setPrePrompts((prev) => [...prev, textArea]);
          }}
        >
          {!editMode.mode ? "+ Add Pre Prompts" : "Update Pre Prompt"}
        </button>
      </div>
    </div>
  );
};

export default ConversationChatBuilder;
