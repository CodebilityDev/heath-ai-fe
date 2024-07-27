import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import { oaKeySelector } from "@state/Setting";
// import IconSave from "@svgs/IconSave";
import { OpenAiAPIKeyInterface } from "@/types/AppState";
import { useQuery } from "@apollo/client";
import {
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
import {
  CreateSnippet,
  DeleteSnippet,
  GetSnippet,
  UpdateSnippet,
} from "@/graphql/declarations/snippets";

const SnippetModal = ({
  open,
  onClose,
  onConnect,
}: {
  open: string | false;
  onClose: any;
  onConnect: any;
}) => {
  const { data: userData } = useQuery(GetMe);

  const [name, setName] = useState("");
  const [data, setData] = useState("");

  let { gid } = useParams();
  const isNew = open === "(new)";

  const { data: initialData } = useQuery(GetSnippet, {
    variables: {
      where: {
        id: open as string,
      },
    },
    skip: !open || isNew,
  });

  useEffect(() => {
    // console.log(initialData);
    setConfirmDelete(false);
    if (initialData) {
      setName(initialData.snippet?.name || "");
      setData(initialData.snippet?.content || "");
    }
  }, [initialData]);

  const update = async () => {
    if (isNew) {
      await apolloClient.mutate({
        mutation: CreateSnippet,
        variables: {
          data: {
            name,
            content: data,
            group: {
              connect: {
                id: gid,
              },
            },
          },
        },
      });
    } else {
      if (typeof open !== "string") {
        return;
      }
      await apolloClient.mutate({
        mutation: UpdateSnippet,
        variables: {
          where: {
            id: open,
          },
          data: {
            name,
            content: data,
          },
        },
      });
    }
    toast.success(isNew ? "Template Created" : "Template Updated");
    apolloClient.resetStore();
    onClose();
  };

  const [confirmDelete, setConfirmDelete] = useState(false);

  const deleteSnippet = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      setTimeout(() => {
        setConfirmDelete(false);
      }, 3000);
      return;
    }
    if (typeof open !== "string") {
      return;
    }
    await apolloClient.mutate({
      mutation: DeleteSnippet,
      variables: {
        where: {
          id: open,
        },
      },
    });
    toast.success("Template Deleted");
    apolloClient.resetStore();
    onClose();
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
            <p className="text-xl font-bold">
              {isNew ? "New Template" : "Edit Template"}
            </p>
          </div>
          <div className="divider-x"></div>
          <div className="flex flex-col gap-[20px]">
            <div className="inline-form-container">
              <div className="inline-form-element">
                <p className="mb-2 font-semibold">Name</p>
                <input
                  // type="password"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="New Template"
                  className="form-input"
                />
              </div>
            </div>
            <div className="inline-form-container">
              <div className="inline-form-element">
                <p className="mb-2 font-semibold">Data</p>
                <textarea
                  // type="password"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  placeholder="Config Data"
                  className="form-input"
                  rows={3}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full">
            {!isNew && (
              <button
                className="text-red-700 bg-white border border-red-500 btn-submit"
                onClick={deleteSnippet}
              >
                {confirmDelete ? "Are you sure?" : "Delete"}
              </button>
            )}
            <div className="flex gap-[24px] justify-end content-center font-bold items-center flex-1">
              <div>
                <button className="flex items-center" onClick={onClose}>
                  Close
                </button>
              </div>
              <div>
                <button className="btn-submit" onClick={update}>
                  {isNew ? "Create" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnippetModal;
