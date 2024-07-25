import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import { oaKeySelector } from "@state/Setting";
// import IconSave from "@svgs/IconSave";
import { OpenAiAPIKeyInterface } from "@/types/AppState";
import { useQuery } from "@apollo/client";
import {
  CreateGroup,
  GetGroup,
  GetMe,
  UpdateAIKey,
  UpdateGroup,
  UpdateUser,
} from "@/graphql/declarations/geMe";
import { apolloClient } from "@/graphql/client";
import { toast } from "react-toastify";
import { Switch } from "@/components/ui/switch";
import { useParams } from "react-router-dom";

const CreateGroupModal = ({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: any;
  onCreate: any;
}) => {
  const { data: userData } = useQuery(GetMe);

  const [apiKey, setApiKey] = useState("");

  let { gid } = useParams();

  const { data: groupData } = useQuery(GetGroup, {
    variables: {
      where: {
        id: gid,
      },
    },
    skip: !gid,
  });

  useEffect(() => {
    if (groupData?.group?.aiKey?.openapiKey) {
      setApiKey(groupData?.group?.aiKey?.openapiKey);
    }
  }, [userData]);

  const update = async () => {
    // if user doesn't have an api key, create one
    const resp = await apolloClient.mutate({
      mutation: CreateGroup,
      variables: {
        data: {
          name: apiKey,
          members: {
            create: [
              {
                user: {
                  connect: {
                    id: userData?.authenticatedItem?.id,
                  },
                },
                access: 3,
              },
            ],
          },
        },
      },
    });

    toast.success("Group created successfully");

    onCreate({
      id: resp.data?.createGroup?.id,
      name: apiKey,
    });
  };

  return (
    <div
      className={`modal-container z-[100] ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="w-full max-w-2xl p-8 bg-white modal-content no-scrollbar">
        <div className="flex flex-col gap-[30px]">
          <div className="w-full">
            <p className="text-xl font-bold">Create a new Group</p>
          </div>
          <div className="divider-x"></div>
          <div className="flex flex-col gap-[20px]">
            <div className="inline-form-container">
              <div className="inline-form-element">
                <p className="mb-2 font-semibold">Group Name</p>
                <input
                  // type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Group Name"
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
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
