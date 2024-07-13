import { useState } from "react";
import { useRecoilState } from "recoil";
import { oaKeySelector } from "@state/Setting";
import IconSave from "@svgs/IconSave";
import { OpenAiAPIKeyInterface } from "@/types/AppState";

const ApiKeyModal = ({
  open,
  onClose,
  onConnect,
}: {
  open: boolean;
  onClose: any;
  onConnect: any;
}) => {
  const [whiteLink, setWhiteLink] = useState(false);
  const [oaKey, setOaKey] =
    useRecoilState<OpenAiAPIKeyInterface>(oaKeySelector);

  const handleChange = (e: any) => {
    // setOaKey({
    //   oaKey,
    //   apiKey: e.target.value
    // })
  };
  return (
    <div
      className={`modal-container ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="modal-content md:w-[60%] w-full">
        <div className="flex flex-col gap-[30px]">
          <div className="w-full">
            <p className="font-bold">Add OpenAI API Key</p>
          </div>
          <div className="divider-x"></div>
          <div className="flex flex-col gap-[20px]">
            <div className="inline-form-container">
              <div className="inline-form-element">
                <p className="mb-2">Your API</p>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="API"
                  className="form-input"
                />
              </div>
              <div className="inline-form-element">
                <p className="mb-2">Secret Key</p>
                <input
                  type="text"
                  placeholder="123456789"
                  className="form-input"
                />
              </div>
            </div>
            <div
              className="inline-flex items-center cursor-pointer"
              onClick={() => setWhiteLink(!whiteLink)}
            >
              <span className="mr-4">White Link</span>
              <input
                checked={whiteLink}
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => {}}
              />
              <div className="relative w-11 h-6 bg-gray-light-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white rounded-full pee peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:start-[2px] after:bg-[#213A5C] peer-checked:after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </div>
            <div className="w-full inline-flex items-center">
              <p className="mr-4">Upload Logo</p>
              <div className="flex flex-col items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center bg-[#E6ECFF] border border-primary border-dashed rounded-full w-[100px] h-[100px] cursor-pointer"
                >
                  <IconSave />
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="inline-form-container">
              <div className="inline-form-element">
                <p className="mb-2">Go High-Level(GHL) Business IT</p>
                <input
                  type="text"
                  placeholder="GHL Business IT"
                  className="form-input"
                />
              </div>
              <div className="inline-form-element">
                <p className="mb-2">API</p>
                <input type="text" placeholder="API" className="form-input" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-[24px] justify-end content-center font-bold items-center">
              <div>
                <button className="flex items-center" onClick={onClose}>
                  Cancel
                </button>
              </div>
              <div>
                <button className="btn-submit" onClick={onConnect}>
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
