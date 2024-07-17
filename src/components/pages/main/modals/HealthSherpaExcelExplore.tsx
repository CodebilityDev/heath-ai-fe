import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { oaKeySelector } from "@/state/Setting";
import IconSave from "@/assets/svgs/IconSave";
import { OpenAiAPIKeyInterface } from "@/types/AppState";
import { useQuery } from "@apollo/client";
import { GetMe, UpdateAIKey, UpdateUser } from "@/graphql/declarations/geMe";
import { apolloClient } from "@/graphql/client";
import { toast } from "react-toastify";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import DragNdrop from "@/components/common/DragNDrop";

const HealthSherpaExcelExplore = ({
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
  const [files, setFiles] = useState([]);

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
  };

  return (
    <div
      className={`modal-container z-[100] ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="modal-content bg-white max-w-2xl w-full no-scrollbar">
        <div className="flex flex-col gap-[30px]">
          <div className="w-full">
            <p className="font-bold text-xl">Health Sherpa Excel Explore</p>
          </div>
          <div className="divider-x"></div>
          <div className="flex flex-col gap-[20px]">
            <div className="inline-form-container">
              <div className="inline-form-element">
                <p className="font-semibold mb-2">Description</p>
                <Textarea placeholder="Type your message here." />
                <p className="font-semibold mt-6 mb-2">Select Type</p>
                <Select>
                  <SelectTrigger className="w-72">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="z-[500]">
                    <SelectGroup>
                      <SelectLabel>Type</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="divider-x"></div>
                <div className="flex justify-center mt-8">
                  <DragNdrop onFilesSelected={setFiles} width="300px" />
                </div>
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
                <button
                  className="btn-submit"
                  // onClick={update}
                >
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

export default HealthSherpaExcelExplore;
