import { useEffect, useMemo, useState } from "react";
import IconSearch from "@/assets/svgs/IconSearch";
import CheckBox from "@/components/core/CheckBox";
import { useRecoilState } from "recoil";
// import { SettingInterface } from "../../../../types/Setting";
import { ScrollArea } from "@/components/ui/scroll-area";
import useDebounce from "@/hooks/useDebounce";
import { MdClose } from "react-icons/md";

const CarrierModal = ({
  open,
  onClose,
  className,
  options,
  state,
  setState,
}: {
  open: boolean;
  onClose: any;
  className: string;
  options: string[];
  state: any;
  setState: any;
}) => {
  const [carriers, setCarriers] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce<string>(search, 500);

  const searchedOptions = useMemo(() => {
    return options.filter((option: string) =>
      option.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [debouncedValue]);

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setCarriers([...state]);
  }, [state]);

  const handleCheckBox = (event: any, value: string, type: string) => {
    if (type == "selectAll") {
      if (carriers.length == options.length) {
        setCarriers([]);
      } else {
        setCarriers([...options]);
      }
    } else if (type == "carriers") {
      let idx = carriers.findIndex((carrier: string) => carrier == value);
      if (idx == -1) {
        setCarriers([...carriers, value]);
      } else {
        let newCarriers = [...carriers];
        newCarriers.splice(idx, 1);
        setCarriers([...newCarriers]);
      }
    }
  };

  const onSaveCarriers = () => {
    setState({
      ...state,
      carriers: [...carriers],
    });
    onClose();
  };

  return (
    <div className={className}>
      <div
        className={`modal-container z-[60] ${
          open ? "visible bg-black/20 backdrop-blur-md" : "invisible"
        }`}
      >
        <div className="w-full max-w-2xl p-4 overflow-hidden bg-white rounded-lg">
          <div className="flex flex-col">
            <div className="sticky top-0 z-20 flex items-center justify-between w-full p-4 bg-white border-b">
              <p className="font-bold">Add Your Carriers</p>
              <MdClose className="cursor-pointer size-5" onClick={onClose} />
            </div>
            <div className="flex flex-col p-4">
              <div className="relative flex flex-col w-full mb-4">
                <div className="flex justify-between flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="text-xs search-input md:text-base"
                    onChange={handleSearch}
                  />
                  <div className="absolute top-[50%] translate-y-[-50%] left-4">
                    <IconSearch />
                  </div>
                  <CheckBox
                    label="Select All"
                    checked={carriers.length == options.length}
                    type="selectAll"
                    handleChange={handleCheckBox}
                  />
                </div>
              </div>
              <ScrollArea className="h-[15rem] rounded-md my-4 ">
                <div className="grid w-full grid-cols-2 gap-4">
                  {searchedOptions.length > 0 ? (
                    searchedOptions.map((option: string, idx: number) => {
                      return (
                        <div className="flex min-h-8">
                          <CheckBox
                            checked={carriers.includes(option)}
                            label={option}
                            type="carriers"
                            handleChange={handleCheckBox}
                            key={idx}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <p className="col-span-2 text-center">No results found</p>
                  )}
                </div>
              </ScrollArea>
            </div>
            <div className="sticky bottom-0 w-full p-2 bg-white">
              <div className="flex gap-[24px] justify-end content-center font-bold items-center">
                <div>
                  <button
                    className="flex items-center text-sm md:text-base"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    className="flex text-sm text-white rounded-md md:text-base btn bg-gray"
                    onClick={onSaveCarriers}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierModal;
