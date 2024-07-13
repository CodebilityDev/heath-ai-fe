import { useEffect, useState } from "react";
import IconSearch from "@svgs/IconSearch";
import CheckBox from "@components/core/CheckBox";
import { useRecoilState } from "recoil";
import { settingAtom } from "@state/Setting";
import { SettingInterface } from "../../../../types/Setting";

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
          open ? "visible bg-black/20" : "invisible"
        }`}
      >
        <div className="modal-content no-scrollbar md:w-[40%] w-full">
          <div className="flex flex-col">
            <div className="sticky top-0 z-20 w-full p-4 bg-white border-b-2">
              <p className="font-bold">Add Your Carriers</p>
            </div>
            <div className="flex flex-col p-4">
              <div className="relative flex flex-col w-full mb-4">
                <div className="flex flex-1 md:w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                  />
                  <div className="absolute top-5 left-5">
                    <IconSearch />
                  </div>
                </div>
                <div className="flex items-center justify-start flex-1 mt-4 md:justify-center md:w-full">
                  <CheckBox
                    label="Select All"
                    checked={carriers.length == options.length}
                    type="selectAll"
                    handleChange={handleCheckBox}
                  />
                </div>
              </div>

              <div className="my-4 carriers-container">
                {options.map((option: string, idx: number) => {
                  return (
                    <CheckBox
                      checked={carriers.includes(option)}
                      label={option}
                      type="carriers"
                      handleChange={handleCheckBox}
                      key={idx}
                    />
                  );
                })}
              </div>
            </div>
            <div className="sticky bottom-0 w-full p-2 bg-white border-t-2 shadow-md">
              <div className="flex gap-[24px] justify-end content-center font-bold items-center">
                <div>
                  <button className="flex items-center" onClick={onClose}>
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    className="flex btn btn-gray"
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
