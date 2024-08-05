import { Button } from "@/components/ui/button";
import { DeleteIcon, EditIcon, Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { twMerge } from "tailwind-merge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "../ui/switch";
import { useConfirm } from "@/hooks/use-confirm";

const CustomFields = () => {
  const [fields, setFields] = useState<any[] | []>([]);
  //Confirm Dialog Usage
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure",
    "You are going to save your changes?"
  );
  const handleSave = async () => {
    // Confirm Dialog Usage
    const ok = await confirm();
    if (!ok) return;
    console.log(fields);
  };
  return (
    <>
      // Confirm Dialog Usage
      <ConfirmDialog />
      <div className="w-full">
        <p className="form-label">Custom Field Editor</p>
        <div className="form-carrier-container space-y-4 ">
          <div className="w-full overflow-x-auto">
            <div className="flex flex-col w-full">
              <p className="font-bold">Fields List</p>
              {fields.map(
                ({ type, label, name, enabled, placeholder }, idx) => {
                  console.log(type);
                  return (
                    <div className="flex flex-col min-h-20 justify-end p-2 ">
                      {type !== "radio" && type !== "toggle" && (
                        <Input
                          type="text"
                          placeholder="Label"
                          value={label}
                          onChange={(e) => {
                            setFields([
                              ...fields.slice(0, idx),
                              { ...fields[idx], label: e.target.value },
                              ...fields.slice(idx + 1),
                            ]);
                          }}
                          className="w-auto bg-transparent border-0 px-0 h-6 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                          {type !== "toggle" ? (
                            <Input
                              type={type}
                              className={twMerge(
                                "w-auto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border disabled:opacity-100 disabled:cursor-default cursor-defaul disabled:border-red-500"
                              )}
                              name={name}
                            />
                          ) : (
                            <Switch />
                          )}
                          {(type === "toggle" || type === "radio") && (
                            <Input
                              type="text"
                              placeholder="Label"
                              value={label}
                              onChange={(e) => {
                                setFields([
                                  ...fields.slice(0, idx),
                                  { ...fields[idx], label: e.target.value },
                                  ...fields.slice(idx + 1),
                                ]);
                              }}
                              className="w-auto bg-transparent border-0 px-0 h-6 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          )}
                        </div>
                        <div className="flex gap-x-2 items-center">
                          <Select
                            onValueChange={(e) => {
                              setFields([
                                ...fields.slice(0, idx),
                                { ...fields[idx], type: e },
                                ...fields.slice(idx + 1),
                              ]);
                            }}
                            defaultValue="text"
                          >
                            <SelectTrigger className="w-[180px] h-8">
                              <SelectValue placeholder="Default" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="text">Text</SelectItem>
                              <SelectItem value="radio">Radio</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="file">Input</SelectItem>
                              <SelectItem value="toggle">Toggle</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className="flex gap-x-2">
                            <Switch
                              checked={enabled}
                              onCheckedChange={() => {
                                setFields([
                                  ...fields.slice(0, idx),
                                  { ...fields[idx], enabled: !enabled },
                                  ...fields.slice(idx + 1),
                                ]);
                              }}
                            />
                            {enabled ? "Enabled" : "Disabled"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <Button
              className="w-full"
              variant="outline"
              onClick={() =>
                setFields([
                  ...fields,
                  {
                    type: "text",
                    label: "",
                    name: "",
                    value: "",
                    enabled: false,
                  },
                ])
              }
            >
              Add a field <Plus className="ml-2 size-4" />
            </Button>
            <Button className="w-full" onClick={handleSave}>
              Save
            </Button>
          </div>

          {/* <div className="flex flex-wrap w-full gap-2 mb-4"></div> */}
        </div>
      </div>
    </>
  );
};

export default CustomFields;
