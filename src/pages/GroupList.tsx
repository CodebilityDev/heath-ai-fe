import CreateGroupModal from "@/components/pages/main/modals/CreateGroupModal";
import { Button } from "@/components/ui/button";
import { AUTHSTORE } from "@/graphql/authStorage";
import { GetGroups, GetMe } from "@/graphql/declarations/geMe";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

export const GroupList = () => {
  const { data: groupList } = useQuery(GetGroups, {
    fetchPolicy: "network-only",
  });
  const { data: userData } = useQuery(GetMe);

  const [createGroupModal, setCreateGroupModal] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <div className="sticky top-0 left-0 z-50 flex justify-between w-full px-8 bg-white header-container">
          <p className="text-2xl font-bold">
            Federal<span className="text-2xl text-primary">Plans</span>
          </p>
          <button
            className="px-4 py-2 text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            onClick={() => {
              AUTHSTORE.clear();
              window.location.href = "/";
            }}
          >
            Sign Out
          </button>
        </div>
        <div className="flex flex-col-reverse w-full max-w-screen-md gap-2 mx-auto mt-4">
          <div className="grid flex-[2] grid-cols-1 mt-0 md:mt-4 gap-2 w-full px-4">
            {groupList?.groups?.map((group) => {
              return (
                <a href={`/app/view/${group.id}`}>
                  <div
                    key={group.id}
                    className="p-4 break-all border border-gray-300 rounded-md shadow-md hover:border-blue-700"
                  >
                    <h2 className="font-bold">
                      {group.name}{" "}
                      {group.ghlAccess?.id ? (
                        <span className="p-1 text-xs bg-yellow-500 rounded-xl">
                          GHL
                        </span>
                      ) : (
                        ""
                      )}
                    </h2>

                    <p className="pt-1 text-xs">ID: {group.id}</p>
                  </div>
                </a>
              );
            })}
            <p className="text-sm text-center">
              Create a new group OR Connect to a GHL Account to tweak and modify
              your ChatGPT auto reply bot
            </p>
          </div>
          <div className="flex flex-col flex-[1] gap-2 p-4 w-full">
            <Button
              variant="outline"
              className="w-full py-3 font-bold hover:text-white hover:bg-primary"
              onClick={() => {
                const baseURL = import.meta.env.VITE_GRAPHQL_URL.replace(
                  "/api/graphql",
                  ""
                );
                const redirect = `${baseURL}/api/ghapi/auth/signin?redirect=${window.location.href}&userID=${userData?.authenticatedItem?.id}`;
                fetch(redirect, {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${AUTHSTORE.get()}`,
                  },
                }).then((res) => {
                  if (res.ok) {
                    res.json().then((data) => {
                      window.location.href = data.url;
                    });
                  }
                });
              }}
            >
              Connect to a GHL Account
            </Button>
            <p className="text-center">--- or ---</p>
            <Button
              variant="outline"
              disabled
              className="w-full py-3 font-bold hover:text-white hover:bg-primary"
              onClick={() => {
                setCreateGroupModal(true);
              }}
            >
              Create A New Group (Coming Soon)
            </Button>
          </div>
        </div>
      </div>
      <CreateGroupModal
        open={createGroupModal}
        onClose={() => setCreateGroupModal(false)}
        onCreate={(args: { id: string }) => {
          setCreateGroupModal(false);
          window.location.href = `/app/view/${args.id}`;
        }}
      />
    </>
  );
};
