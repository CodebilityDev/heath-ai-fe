import langSnippet from "@/utils/LangSnippet";
import "react-toastify/dist/ReactToastify.css";
import CheckButtons from "@/components/core/CheckButtons";
import CheckBox from "@/components/core/CheckBox";
import Select from "react-tailwindcss-select";
import { useQuery } from "@apollo/client";
import { GetMe } from "@/graphql/declarations/geMe";
import { AUTHSTORE } from "@/graphql/authStorage";
import { FaArrowRotateLeft } from "react-icons/fa6";
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
import { useNavigate } from "react-router-dom";

function Sidebar({ className }: { className?: string }) {
  const { data: userData } = useQuery(GetMe);
  const { data: GHLData } = useQuery(GetGHL);
  const [apiKeyModal, setApiKeyModal] = useState(false);
  const [healthSherpaModal, setHealthSherpaModal] = useState(false);
  const navigate = useNavigate();

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
          "lg:h-screen lg:overflow-y-auto no-scrollbar border border-gray-light shadow-lg",
          className
        )}
      >
        <div className="mt-2">
          <p className="text-lg font-bold">Tools</p>
        </div>
        <div className="">
          <button
            className={"bg-primary-light mt-2 w-full py-2 rounded-md"}
            onClick={() => {
              navigate("/chatbot");
            }}
          >
            <p className={"text-xs sm:text-base btn-text"}>Bot Editor</p>
          </button>
          {!loading ? (
            <button
              className={"bg-primary-light mt-2 w-full py-2 rounded-md"}
              onClick={() => {
                // navigate("/chat?id=" + botID);
                // open in new tab
                window.open("/chat?id=" + botID, "_blank");
              }}
            >
              <p className={"text-xs sm:text-base btn-text"}>
                Shareable Chatbot Page
              </p>
            </button>
          ) : (
            <p className="p-4 text-center">Loading Chatbot Link</p>
          )}
        </div>
        <hr className="h-px my-4 border-0 bg-gray-light" />
        <div className="mt-2">
          <p className="text-lg font-bold">My Account</p>
        </div>
        <div className="">
          <div className="sm:py-2">
            <p className="text-xs sm:text-base lg:text-normal">
              {userData?.authenticatedItem?.email}
            </p>
          </div>
          <button
            className={"bg-primary-light mt-2 w-full py-2 rounded-md"}
            onClick={() => {
              AUTHSTORE.clear();
              window.location.href = "/";
            }}
          >
            <p className={"text-xs sm:text-base btn-text"}>Sign Out</p>
          </button>
        </div>
        <hr className="h-px my-4 border-0 bg-gray-light" />
        <div className="">
          <p className="text-lg font-bold">Agency information</p>
        </div>
        <div className="my-4">
          {userData?.authenticatedItem?.ghlAccess && (
            <div className="-mt-4">
              <div className="p-2">
                <p>
                  Name: <>{GHLData?.ghl_me?.name}</>
                </p>
                <p>
                  Email: <>{GHLData?.ghl_me?.email}</>
                </p>
                <p>
                  Phone: <>{GHLData?.ghl_me?.phone}</>
                </p>
                <p>
                  State: <>{GHLData?.ghl_me?.state}</>
                </p>
                <p>
                  Country: <>{GHLData?.ghl_me?.country}</>
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            className={"bg-primary-light mt-2 w-full py-2 rounded-md"}
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
            <p className={"text-primary"}>
              {
                <span className="text-xs sm:text-base">
                  {userData?.authenticatedItem?.ghlAccess
                    ? "Reconnect to GHL"
                    : "Connect to GHL"}
                </span>
              }
            </p>
          </button>
        </div>
        <div className="my-4 sm:mt-12">
          <p className="text-lg font-bold">ChatGPT Settings</p>
        </div>
        <div className="-mt-4">
          <div className="p-2">
            <p className="text-xs sm:text-base">
              API Key:{" "}
              <>
                {userData?.authenticatedItem?.aiKey?.openapiKey
                  ? "Connected"
                  : "Not Connected"}
              </>
            </p>
          </div>
          <button
            className={"bg-primary-light mt-2 w-full py-2 rounded-md"}
            onClick={() => {
              setApiKeyModal(true);
            }}
          >
            <p className={" text-primary text-xs sm:text-base"}>
              Add OpenAI API Key
            </p>
          </button>
        </div>
        <div className="my-4 sm:mt-8">
          <p className="text-lg font-bold">Tools</p>
        </div>
        <div className="-mt-4">
          <button
            className={"bg-primary-light mt-2 w-full py-2 rounded-md"}
            onClick={() => {
              setHealthSherpaModal(true);
            }}
          >
            <p className={"text-xs sm:text-base text-primary"}>
              Health sherpa excel exports
            </p>
          </button>
        </div>
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
            <Sidebar className="border-none shadow-none" />
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
              // TODO: Type Error
              {/* <Datepicker
                asSingle={true}
                useRange={false}
                inputClassName="form-input"
                placeholder={"Select date"}
              /> */}
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
                    // TODO: TS error
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
      <Sidebar className="w-[350px] hidden lg:block p-8" />
      <Content />
    </div>
  );
};
