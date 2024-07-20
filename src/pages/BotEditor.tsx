import langSnippet from "@/utils/LangSnippet";
import "react-toastify/dist/ReactToastify.css";
import CheckButtons from "@/components/core/CheckButtons";
import CheckBox from "@/components/core/CheckBox";
import Select from "react-tailwindcss-select";
import { useQuery } from "@apollo/client";
import { GetMe } from "@/graphql/declarations/geMe";
import { AUTHSTORE } from "@/graphql/authStorage";
import { BiSolidUserDetail } from "react-icons/bi";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ApiKeyModal from "@/components/pages/main/modals/ApiKeyModal";
import HealthSherpaExcelExplore from "@/components/pages/main/modals/HealthSherpaExcelExplore";
import { ConfigInterface, TestConfigInterface } from "@/types/Setting";
import {
  CreateBotConfig,
  ListBotConfig,
  UpdateBotConfig,
} from "@/graphql/declarations/botConfig";
import { apolloClient } from "@/graphql/client";
import { toast } from "react-toastify";
import { SheetSidebar } from "@/components/common/SidebarSheet";
import IconMessage from "@/assets/svgs/IconMessage";
import CarrierModal from "@/components/pages/main/modals/CarrierModal";
import { GetGHL } from "@/graphql/declarations/ghs";
import { useLocation, useNavigate } from "react-router-dom";
import AvatarIcon from "@/components/core/AvatarIcon";
import { sidebarLinks } from "@/constans/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import NavigationButtons from "@/components/common/NavigationButtons";
import DialogComponent from "@/components/common/DialogComponent";
import { FaSignOutAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/common/DatePicker";

function Sidebar({ className }: { className?: string }) {
  const { data: userData } = useQuery(GetMe);
  const { data: GHLData } = useQuery(GetGHL);
  const [apiKeyModal, setApiKeyModal] = useState(false);
  const [healthSherpaModal, setHealthSherpaModal] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { data: botList, loading } = useQuery(ListBotConfig, {
    variables: {
      where: {
        user: {
          id: {
            equals: userData?.authenticatedItem?.id,
          },
        },
      },
    },
    skip: !userData?.authenticatedItem?.id,
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
        <div className="pb-6 px-2 md:px-8">
          <h1 className="text-lg font-bold">Agency Information</h1>
          <div className="border flex p-2 bg-primary-light shadow-md rounded-xl mt-6">
            <div className="flex items-center flex-1 gap-x-2 overflow-hidden">
              <AvatarIcon />
              <div className="flex flex-col overflow-hidden">
                <p className="truncate text-xs md:text-base">
                  {userData?.authenticatedItem?.email}
                </p>
                <hr className="h-px bg-gray border-0 mt-1 dark:bg-gray-700" />
                <div className="flex justify-start">
                  <span>
                    <DialogComponent
                      trigger={
                        <Button
                          variant="ghost"
                          className="rounded-full group p-0 h-8 w-8  hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                          <BiSolidUserDetail
                            size={24}
                            className="text-black/50 transition group-hover:text-primary"
                          />
                        </Button>
                      }
                    >
                      <div className="bg-gradient-to-b to-[#a393f337] from-[#624ff600] w-full overflow-hidden flex rounded-xl mt-6 py-4">
                        <div className="flex flex-1 px-4 gap-x-4 overflow-hidden">
                          <AvatarIcon className="w-24 h-24" />
                          <div className="flex flex-col flex-1">
                            <Input
                              className="text-sm bg-transparent font-bold p-0 rounded-none border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto"
                              value={userData?.authenticatedItem?.email || ""}
                              onChange={(e) => {
                                e.preventDefault();
                              }}
                            />
                            <p className="mt-2 text-sm">
                              Waterproffing company
                            </p>
                            <p className="text-sm">
                              Duffy, Australian Capital Territory, 2611
                            </p>
                            <p className="text-xs mt-2 text-gray">
                              Member Since, Dec 2007
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs flex gap-x-2 sm:text-base">
                        <span className="text-primary font-bold">
                          API Key:{" "}
                        </span>
                        {userData?.authenticatedItem?.aiKey?.openapiKey
                          ? "Connected"
                          : "Not Connected"}
                      </p>
                      <p className="text-xs flex gap-x-2 sm:text-base">
                        <span className="text-primary font-bold">
                          GHL Access:{" "}
                        </span>
                        {userData?.authenticatedItem?.ghlAccess
                          ? "Connected"
                          : "Not Connected"}
                      </p>
                      <div>
                        <p className="text-xs text-primary flex items-center gap-x-2 sm:text-base">
                          Name:{" "}
                          <span className="text-black text-xs md:text-sm">
                            {GHLData?.ghl_me?.name ?? "No Data"}
                          </span>
                        </p>
                        <p className="text-xs text-primary flex items-center gap-x-2 sm:text-base">
                          Email:{" "}
                          <span className="text-black text-xs md:text-sm">
                            {GHLData?.ghl_me?.email ?? "No Data"}
                          </span>
                        </p>
                        <p className="text-xs text-primary flex items-center gap-x-2 sm:text-base">
                          Phone:{" "}
                          <span className="text-black text-xs md:text-sm">
                            {GHLData?.ghl_me?.phone ?? "No Data"}
                          </span>
                        </p>
                        <p className="text-xs text-primary flex items-center gap-x-2 sm:text-base">
                          State:{" "}
                          <span className="text-black text-xs md:text-sm">
                            {GHLData?.ghl_me?.state ?? "No Data"}
                          </span>
                        </p>
                        <p className="text-xs text-primary flex items-center gap-x-2 sm:text-base">
                          Country:
                          <span className="text-black text-xs md:text-sm">
                            {GHLData?.ghl_me?.country ?? "No Data"}{" "}
                          </span>
                        </p>
                      </div>
                    </DialogComponent>
                  </span>
                  <Button
                    onClick={() => {
                      AUTHSTORE.clear();
                      window.location.href = "/";
                    }}
                    className="p-0 group rounded-full h-8 w-8 hover:bg-transparent"
                    variant="ghost"
                  >
                    <FaSignOutAlt
                      size={18}
                      className="text-black/50 group-hover:text-red-400 transition"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   ( */}

        <ScrollArea className="px-2 md:px-8">
          {sidebarLinks.map(({ category, links }, categoryIndex) => (
            <>
              {category === "Settings" && (
                <hr className="h-px bg-gray border-0 mt-12 dark:bg-gray-700" />
              )}
              <div
                className={twMerge(
                  "mt-8 flex flex-col",
                  category === "Settings" && "mt-2",
                  categoryIndex === 0 && "mt-0"
                )}
                key={`category-${categoryIndex}`}
              >
                <p className="text-base text-black/60 mb-2">{category}</p>
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
        </ScrollArea>
        <div className="px-2 md:px-8">
          <Button
            variant="outline"
            className="w-full font-bold hover:text-white hover:bg-primary mt-8 py-6"
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
            {userData?.authenticatedItem?.ghlAccess
              ? "Reconnect to GHL"
              : "Apply to GHL"}
          </Button>
        </div>
        {/* Separate */}
      </div>
      <ApiKeyModal
        open={apiKeyModal}
        onClose={() => setApiKeyModal(false)}
        onConnect={() => {}}
      />
      <HealthSherpaExcelExplore
        open={healthSherpaModal}
        onClose={() => setHealthSherpaModal(false)}
        onConnect={() => {}}
      />
    </>
  );
}

function Content() {
  const [carrierModal, setCarrierModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectValue>(null);
  const [configSet, setConfig] = useState<ConfigInterface | undefined>();
  const [testConfig, setTestConfig] = useState<TestConfigInterface>({
    firstName: "",
    lastName: "",
    dob: null,
    income: "",
    dependents: "",
    postalCode: "",
    message: "",
  });

  const { data: userData, loading: userLoading } = useQuery(GetMe);
  const [date, setDate] = useState<Date>();
  const { data, loading } = useQuery(ListBotConfig, {
    variables: {
      where: {
        user: {
          id: {
            equals: userData?.authenticatedItem?.id,
          },
        },
      },
    },
    skip: !userData?.authenticatedItem?.id,
  });

  useEffect(() => {
    if (data?.botConfigs) {
      if (data.botConfigs.length === 0) {
        if (!userData?.authenticatedItem?.id) {
          return;
        }
        console.log("Creating bot config");
        apolloClient
          .mutate({
            mutation: CreateBotConfig,
            variables: {
              data: {
                name: userData?.authenticatedItem?.id,
                user: {
                  connect: {
                    id: userData?.authenticatedItem?.id,
                  },
                },
              },
            },
          })
          .then((res) => {
            toast.success("Bot config initialized");
            apolloClient.resetStore();
          });
      } else {
        setConfig(data.botConfigs[0]);
      }
    }
  }, [data]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!data?.botConfigs?.[0]) {
      return;
    }
    apolloClient
      .mutate({
        mutation: UpdateBotConfig,
        variables: {
          where: { id: data?.botConfigs[0].id },
          data: {
            companyStatement: configSet?.companyStatement,
            tonestyle: configSet?.tonestyle,
            priorityPlan: configSet?.priorityPlan,
            healthInsuranceCarriers: configSet?.healthInsuranceCarriers,
            presentationStrategy: configSet?.presentationStrategy,
            specificQuestions: configSet?.specificQuestions,
            summaryPrompt: configSet?.summaryPrompt,
            welcomeMessage: configSet?.welcomeMessage,
          },
        },
      })
      .then((res) => {
        if (res.data?.updateBotConfig) {
          toast.success("Bot config updated successfully");
        } else {
          toast.error("Failed to update bot config");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update bot config");
      });
  };

  const testWelcomeMessage = () => {
    console.log(testConfig);
  };

  return (
    <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
      <div className="sticky top-0 left-0 z-50 flex justify-between w-full px-8 bg-white header-container">
        <p className="text-2xl font-bold">
          Federal<span className="text-2xl text-primary">Plans</span>
        </p>
        <span className="block lg:hidden">
          <SheetSidebar>
            <Sidebar className="border-none shadow-none flex" />
          </SheetSidebar>
        </span>
      </div>
      <form className="mt-8 form-container" onSubmit={handleSubmit}>
        <div className="form-content">
          {userLoading || loading ? (
            <p className="text-xl font-bold animate-pulse">Loading...</p>
          ) : (
            <p className="text-xl font-bold">
              BOT ID:{" "}
              <span className="font-mono bg-gray-light">
                {data?.botConfigs?.[0]?.id}
              </span>
            </p>
          )}
          <div className="w-full">
            <p className="form-label">{langSnippet.mission.label}</p>
            <textarea
              rows={6}
              placeholder={langSnippet.mission.placeholder}
              className="form-input"
              onChange={(e) => {
                setConfig({
                  ...configSet,
                  companyStatement: e.target.value,
                });
              }}
              value={configSet?.companyStatement ?? ""}
            ></textarea>
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.tone.label}</p>
            <input
              type="text"
              placeholder={langSnippet.tone.placeholder}
              className="form-input"
              onChange={(e) => {
                setConfig({ ...configSet, tonestyle: e.target.value });
              }}
              value={configSet?.tonestyle ?? ""}
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.plan.label}</p>
            <CheckButtons
              options={langSnippet.plan.options}
              type="plan"
              handleChange={(e: any, value: string) => {
                setConfig({ ...configSet, priorityPlan: value });
              }}
              value={configSet?.priorityPlan ?? ""}
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.carrier.label}</p>
            <div className="form-carrier-container">
              <div className={"checked-carriers-container"}>
                {configSet?.healthInsuranceCarriers
                  ?.split(",")
                  .map((carrier: string, idx: number) => {
                    return (
                      <CheckBox
                        checked={true}
                        label={carrier}
                        type="carrier"
                        handleChange={() => {}}
                        key={idx}
                      />
                    );
                  }) ?? []}
              </div>
              <button
                className="btn-primary-lg btn-outlined"
                onClick={(e: any) => {
                  e.preventDefault();
                  setCarrierModal(true);
                }}
              >
                + Add Carriers
              </button>
            </div>
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.recommendedPlan.label}</p>
            <CheckButtons
              options={langSnippet.recommendedPlan.options}
              type="recommendedPlan"
              handleChange={(e: any, value: string) => {
                setConfig({ ...configSet, presentationStrategy: value });
              }}
              value={configSet?.presentationStrategy ?? ""}
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.chatbotQuestion.label}</p>
            <input
              type="text"
              placeholder={langSnippet.chatbotQuestion.placeholder}
              className="form-input"
              onChange={(e) => {
                setConfig({
                  ...configSet,
                  specificQuestions: e.target.value,
                });
              }}
              value={configSet?.specificQuestions ?? ""}
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.summary.label}</p>
            <input
              type="text"
              placeholder={langSnippet.summary.placeholder}
              className="form-input"
              onChange={(e) => {
                setConfig({
                  ...configSet,
                  summaryPrompt: e.target.value,
                });
              }}
              value={configSet?.summaryPrompt ?? ""}
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.exMessage.label}</p>
            <textarea
              rows={6}
              placeholder={langSnippet.exMessage.placeholder}
              className="form-input"
              onChange={(e) => {
                setConfig({
                  ...configSet,
                  welcomeMessage: e.target.value,
                });
              }}
              value={configSet?.welcomeMessage ?? ""}
            ></textarea>
          </div>
          <button
            type="submit"
            className="sticky w-full bottom-6 btn-submit"
            onClick={() => {}}
          >
            Save
          </button>
        </div>
      </form>
      <form
        className="mt-8 form-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-content">
          <div className="w-full h-1 bg-gray-light-100"></div>
          <p className="w-full p-2 pt-0 -mt-2 font-bold text-center">
            Test Bot Sample
          </p>
          <div className="inline-form-container">
            <div className="inline-form-element">
              <p className="mb-2">First name</p>
              <input
                type="text"
                placeholder="Ex: John"
                className="form-input"
                value={testConfig.firstName}
                onChange={(e) =>
                  setTestConfig({
                    ...testConfig,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="inline-form-element">
              <p className="mb-2">Last name</p>
              <input
                type="text"
                placeholder="Ex: John"
                className="form-input"
                value={testConfig.lastName}
                onChange={(e) =>
                  setTestConfig({
                    ...testConfig,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="inline-form-container">
            <div className="inline-form-element">
              <p className="mb-2">Date of Birth</p>
              <DatePicker date={date} setDate={setDate} />
            </div>
            <div className="inline-form-element">
              <p className="mb-2">income</p>
              <select
                className="form-input hci-select"
                value={testConfig.income}
                onChange={(e) =>
                  setTestConfig({ ...testConfig, income: e.target.value })
                }
              >
                <option value={0}>0-10k/year</option>
                <option value={1}>11-30k/year</option>
              </select>
            </div>
          </div>
          <div className="inline-form-container">
            <div className="inline-form-element">
              <p className="mb-2">Number of Dependents</p>
              <select
                value={testConfig.dependents}
                onChange={(e) =>
                  setTestConfig({
                    ...testConfig,
                    dependents: e.target.value,
                  })
                }
                className="form-input hci-select"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className="inline-form-element">
              <p className="mb-2">Postal Code</p>
              <input
                required
                type="text"
                placeholder="123456"
                className="form-input"
                value={testConfig.postalCode}
                onChange={(e) =>
                  setTestConfig({
                    ...testConfig,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="divider-x"></div>
          <div className="flex flex-col w-full">
            <div className="relative flex flex-1 w-full">
              <textarea
                rows={1}
                placeholder="Hi how may i help you, please enter..."
                className="p-4 pl-12 w-full border rounded-[12px] border-primary focus:ring-primary h-40 focus:border-primary resize-none overflow-y-hidden"
              />
              <div className="absolute top-4 left-4">
                <IconMessage />
              </div>
            </div>
            <div className="flex w-full gap-2 pt-2">
              <button
                className="flex-1 btn-submit"
                onClick={testWelcomeMessage}
              >
                Test welcome message
              </button>
              <button className="flex-1 btn-submit">
                Save/Delete favourite format
              </button>
            </div>
          </div>
          <div className="divider-x"></div>
          <div className="form-submit-container justify-center mb-[150px]">
            <div className="relative flex flex-1 w-full">
              <div className="inline-form-element">
                <p className="mb-2">Users Select</p>
                <div className="flex flex-col items-center w-full md:flex-row">
                  <div className="relative flex flex-1 w-full mb-4 md:mr-4 md:mb-0">
                    <Select
                      isClearable={true}
                      primaryColor={"violet"}
                      isMultiple={true}
                      options={[]}
                      value={selectedItem}
                      placeholder={"No users selected"}
                      classNames={{
                        menuButton: (value: any) => {
                          return "multi-select-menu-button";
                        },
                        menu: "multi-select-menu",
                        list: "multi-select-list",
                        tagItem: (value: any) => {
                          return "multi-select-tag-item";
                        },
                      }}
                      onChange={(e: any) => setSelectedItem(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center w-full h-full md:w-auto">
                    <button className="btn-submit">
                      Text message to users
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="footer-container">
        <p className="footer-text">© 2024 Obamacare AI. All Rights Reserved.</p>
      </div>
      <CarrierModal
        className="w-full"
        open={carrierModal}
        options={langSnippet.carrier.options}
        onClose={() => setCarrierModal(false)}
        state={configSet?.healthInsuranceCarriers?.split(",") ?? []}
        setState={(value: any) => {
          setConfig({
            ...configSet,
            healthInsuranceCarriers: value.carriers.join(","),
          });
        }}
        // onSave={onCarrierSave}
      />
    </div>
  );
}

export const BotEditor = () => {
  return (
    <div className="flex justify-end w-full">
      <Sidebar className="w-[350px] hidden lg:flex" />
      <Content />
    </div>
  );
};
