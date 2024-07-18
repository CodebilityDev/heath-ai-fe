import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import { oaKeySelector } from "@state/Setting";
// import IconSave from "@svgs/IconSave";
import { OpenAiAPIKeyInterface } from "@/types/AppState";
import { useQuery } from "@apollo/client";
import { GetMe, UpdateAIKey, UpdateUser } from "@/graphql/declarations/geMe";
import { apolloClient } from "@/graphql/client";
import { toast } from "react-toastify";
import { Switch } from "@/components/ui/switch";

const ApiKeyModal = ({
  open,
  onClose,
  onConnect,
}: {
  open: boolean;
  onClose: any;
  onConnect: any;
}) => {
  const { data: userData } = useQuery(GetMe);

  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    if (userData?.authenticatedItem?.aiKey?.openapiKey) {
      setApiKey(userData?.authenticatedItem?.aiKey?.openapiKey);
    }
  }, [userData]);

  const update = async () => {
    // if user already has an api key, update it
    if (userData?.authenticatedItem?.aiKey?.id) {
      await apolloClient.mutate({
        mutation: UpdateAIKey,
        variables: {
          where: {
            id: userData?.authenticatedItem?.aiKey?.id,
          },
          data: {
            openapiKey: apiKey,
          },
        },
      });
    } else {
      // if user doesn't have an api key, create one
      await apolloClient.mutate({
        mutation: UpdateUser,
        variables: {
          where: {
            id: userData?.authenticatedItem?.id,
          },
          data: {
            aiKey: {
              create: {
                openapiKey: apiKey,
              },
            },
          },
        },
      });

      toast.success("API Key added successfully");

      onConnect();
    }

    toast.success("API Key updated successfully");
    onClose();
  };

  return (
    <div
      className={`modal-container z-[100] ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="w-full max-w-2xl bg-white modal-content no-scrollbar">
        <div className="flex flex-col gap-[30px]">
          <div className="w-full">
            <p className="text-xl font-bold">Add OpenAI API Key</p>
          </div>
          <div className="divider-x"></div>
          <div className="flex flex-col gap-[20px]">
            <div className="inline-form-container">
              <div className="inline-form-element">
                <p className="mb-2 font-semibold">OpenAI API Key</p>
                <input
                  // type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="API"
                  className="form-input"
                />
                {/* <p className="mt-6 mb-2 font-semibold">Secret Key</p>
                <input
                  // type="password"
                  value={apiKey}
                  // onChange={(e) => setApiKey(e.target.value)}
                  placeholder="123456"
                  className="form-input"
                />
                <span className="flex mt-6 font-semibold gap-x-2">
                  White Link
                  <Switch />
                </span>
                <div className="flex items-center mt-6 font-semibold gap-x-2">
                  Upload Logo
                  TODO: setup cropper
                  <img src="/images/avatarFallback.png" alt="" />
                </div>
                <p className="mt-6 mb-2 font-semibold">
                  Go High-Level(GHL) business IT
                </p>
                <input
                  // type="password"
                  value={apiKey}
                  // onChange={(e) => setApiKey(e.target.value)}
                  placeholder="API"
                  className="form-input"
                />
                <p className="mt-6 mb-2 font-semibold">API</p>
                <input
                  // type="password"
                  value={apiKey}
                  // onChange={(e) => setApiKey(e.target.value)}
                  placeholder="123456"
                  className="form-input"
                /> */}
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
                <button className="btn-submit" onClick={update}>
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
