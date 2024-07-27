import DialogComponent from "@/components/common/DialogComponent";
import NavigationButtons from "@/components/common/NavigationButtons";
import AvatarIcon from "@/components/core/AvatarIcon";
import ApiKeyModal from "@/components/pages/main/modals/ApiKeyModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { sidebarLinks } from "@/constans/sidebar";
import { AUTHSTORE } from "@/graphql/authStorage";
import { ListBotConfig } from "@/graphql/declarations/botConfig";
import { GetGroup, GetMe } from "@/graphql/declarations/geMe";
import { GetGHL } from "@/graphql/declarations/ghs";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TemplateList from "../common/TemplateList";
import { useTemplateContext } from "@/providers/Template-Provider";

export function Sidebar({ className }: { className?: string }) {
  let { gid } = useParams();
  const { data: userData } = useQuery(GetMe);
  const { data: GHLData } = useQuery(GetGHL, {
    variables: {
      input: {
        groupID: gid!,
      },
    },
    skip: !gid,
  });
  const [apiKeyModal, setApiKeyModal] = useState(false);
  const [healthSherpaModal, setHealthSherpaModal] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // set and use template
  const { setTemplate, template } = useTemplateContext();

  const { data: groupData } = useQuery(GetGroup, {
    variables: {
      where: {
        id: gid,
      },
    },
    skip: !gid,
  });

  const { data: botList, loading } = useQuery(ListBotConfig, {
    variables: {
      where: {
        group: {
          id: {
            equals: gid,
          },
        },
      },
    },
    skip: !gid,
  });

  const botID = botList?.botConfigs?.[0]?.id;

  return (
    <>
      <div
        className={twMerge(
          "h-screen overflow-auto flex-col no-scrollbar py-6 border border-gray-light shadow-lg",
          className
        )}
      >
        <div className="px-2 pb-4 md:px-8">
          <h1 className="text-lg font-bold">Agency Information</h1>
          <div className="flex p-2 mt-6 border shadow-md bg-primary-light rounded-xl">
            <div className="flex items-center flex-1 overflow-hidden gap-x-2">
              <AvatarIcon />
              <div className="flex flex-col overflow-hidden">
                <p className="text-xs truncate rounded-md md:text-base">
                  {userData?.authenticatedItem?.email ?? (
                    <Skeleton className="h-4 mb-2 w-52 bg-gray-light" />
                  )}
                </p>
                <hr className="h-px border-0 bg-gray dark:bg-gray-700" />
                <div className="flex justify-start">
                  <span>
                    <DialogComponent
                      trigger={
                        <Button
                          variant="ghost"
                          className="w-8 h-8 p-0 rounded-full group hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                          <BiSolidUserDetail
                            size={24}
                            className="transition text-black/50 group-hover:text-primary"
                          />
                        </Button>
                      }
                    >
                      <div className="pb-8">
                        <div className="bg-gradient-to-b to-[#a393f337] from-[#624ff600] w-full overflow-hidden flex rounded-xl mt-6 py-4">
                          <div className="flex flex-1 px-4 overflow-hidden gap-x-4">
                            <AvatarIcon className="w-24 h-24" />
                            <div className="flex flex-col flex-1">
                              <Input
                                className="h-auto p-0 text-sm font-bold bg-transparent border-none rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                value={userData?.authenticatedItem?.email || ""}
                                onChange={(e) => {
                                  e.preventDefault();
                                }}
                              />
                              <p className="mt-2 text-sm">
                                {GHLData?.ghl_me?.business.name ?? "--"}
                              </p>
                              <p className="text-sm">
                                {GHLData?.ghl_me?.address || "Not Provided"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 border rounded-xl">
                          <div className="p-4 rounded-xl">
                            <p className="flex text-xs gap-x-2 sm:text-base">
                              <span className="font-bold text-primary">
                                API Key:{" "}
                              </span>
                              {/* {userData?.authenticatedItem?.aiKey?.openapiKey
                                ? "Connected"
                                : "Not Connected"} */}
                            </p>
                          </div>
                          <hr className="h-px border-0 bg-gray dark:bg-gray-700" />
                          <div className="p-4 rounded-xl shado-md">
                            <p className="flex text-xs gap-x-2 sm:text-base">
                              <span className="font-bold text-primary">
                                GHL Access:{" "}
                              </span>
                              {/* {userData?.authenticatedItem?.ghlAccess
                                ? "Connected"
                                : "Not Connected"} */}
                            </p>
                            <p className="flex items-center text-xs text-primary gap-x-2 sm:text-base">
                              Name:{" "}
                              <span className="text-xs text-black md:text-sm">
                                {GHLData?.ghl_me?.name ?? "No Data"}
                              </span>
                            </p>
                            <p className="flex items-center text-xs text-primary gap-x-2 sm:text-base">
                              Email:{" "}
                              <span className="text-xs text-black md:text-sm">
                                {GHLData?.ghl_me?.email ?? "No Data"}
                              </span>
                            </p>
                            <p className="flex items-center text-xs text-primary gap-x-2 sm:text-base">
                              Phone:{" "}
                              <span className="text-xs text-black md:text-sm">
                                {GHLData?.ghl_me?.phone ?? "No Data"}
                              </span>
                            </p>
                            <p className="flex items-center text-xs text-primary gap-x-2 sm:text-base">
                              State:{" "}
                              <span className="text-xs text-black md:text-sm">
                                {GHLData?.ghl_me?.state ?? "No Data"}
                              </span>
                            </p>
                            <p className="flex items-center text-xs text-primary gap-x-2 sm:text-base">
                              Country:
                              <span className="text-xs text-black md:text-sm">
                                {GHLData?.ghl_me?.country ?? "No Data"}{" "}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogComponent>
                  </span>
                  <Button
                    onClick={() => {
                      AUTHSTORE.clear();
                      window.location.href = "/";
                    }}
                    className="w-8 h-8 p-0 rounded-full group hover:bg-transparent"
                    variant="ghost"
                  >
                    <FaSignOutAlt
                      size={18}
                      className="transition text-black/50 group-hover:text-red-400"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   ( */}
        <Tabs
          defaultValue="navigation"
          className="w-full flex-1 overflow-hidden flex flex-col"
        >
          <div className="flex">
            <TabsList className="mx-auto">
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
          </div>
          <ScrollArea className="mt-4 md:px-6 border-t">
            <TabsContent
              value="navigation"
              className="mt-0 h-full overflow-hidden flex flex-col flex-1"
            >
              <div className="py-4">
                {sidebarLinks({
                  groupID: gid || "",
                }).map(({ category, links }, categoryIndex) => (
                  <>
                    {category === "Settings" && (
                      <hr className="h-px mt-12 border-0 bg-gray dark:bg-gray-700" />
                    )}
                    <div
                      className={twMerge(
                        "mt-8 flex flex-col",
                        category === "Settings" && "mt-2",
                        categoryIndex === 0 && "mt-0"
                      )}
                      key={`category-${categoryIndex}`}
                    >
                      <p className="mb-2 text-base text-black/60">{category}</p>
                      <div className="space-y-2">
                        {links.map(({ name, icon, to, type }, linkIndex) => (
                          <NavigationButtons
                            type={(type as any) || undefined}
                            linkProps={{
                              to,
                              pathname,
                            }}
                            onClick={() => {
                              if (type === "btn") {
                                if (name === "Health sherpa excel exports") {
                                  setHealthSherpaModal(true);
                                } else if (name === "Open AI Keys") {
                                  setApiKeyModal(true);
                                } else if (
                                  name === "Shareable Chatbot Page" &&
                                  !loading
                                ) {
                                  window.open("/chat?id=" + botID, "_blank");
                                }
                              }
                            }}
                            disabled={
                              type === "btn" &&
                              name === "Shareable Chatbot Page" &&
                              loading
                            }
                            key={`link-${categoryIndex}-${linkIndex}`}
                          >
                            <img src={icon} alt="svg1" className="mr-2" />
                            <p
                              className={twMerge(
                                "text-sm",
                                pathname === to && "text-primary font-bold"
                              )}
                            >
                              {name === "Shareable Chatbot Page" && loading
                                ? "Loading Chatbot Link"
                                : name}
                            </p>
                          </NavigationButtons>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabsContent>
          </ScrollArea>
          <TabsContent
            value="templates"
            className="mt-0 h-full overflow-hidden flex flex-col flex-1"
          >
            <TemplateList templates={template} />
          </TabsContent>
        </Tabs>

        <div className="flex flex-col gap-2 px-2 pt-4 border-t-2 md:px-8">
          <p className="">
            <span className="text-xs">Current Group:</span> <br />
            <span className="font-bold">{GHLData?.ghl_me?.business.name}</span>
          </p>
          <Button
            variant="outline"
            className="w-full py-2 font-bold hover:text-white hover:bg-primary"
            onClick={() => {
              // const baseURL = import.meta.env.VITE_GRAPHQL_URL.replace(
              //   "/api/graphql",
              //   ""
              // );
              // const redirect = `${baseURL}/api/ghapi/auth/signin?redirect=${window.location.href}&userID=${userData?.authenticatedItem?.id}`;
              // fetch(redirect, {
              //   method: "GET",
              //   headers: {
              //     Authorization: `Bearer ${AUTHSTORE.get()}`,
              //   },
              // }).then((res) => {
              //   if (res.ok) {
              //     res.json().then((data) => {
              //       window.location.href = data.url;
              //     });
              //   }
              // });
              window.location.href = "/app";
            }}
          >
            Change Sub Account / Group
          </Button>
        </div>
        {/* Separate */}
      </div>
      <ApiKeyModal
        open={apiKeyModal}
        onClose={() => setApiKeyModal(false)}
        onConnect={() => {}}
      />
      {/* <HealthSherpaExcelExplore
        open={healthSherpaModal}
        onClose={() => setHealthSherpaModal(false)}
        onConnect={() => {}}
      /> */}
    </>
  );
}
