// @ts-nocheck

// import IconRotateLeft from "@svgs/IconRotateLeft";
import langSnippet from "@utils/LangSnippet";
import "react-toastify/dist/ReactToastify.css";
import CheckButtons from "@components/core/CheckButtons";
import CheckBox from "@components/core/CheckBox";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import Select from "react-tailwindcss-select";
import IconMessage from "@svgs/IconMessage";
import { useQuery } from "@apollo/client";
import { GetMe } from "@graphql/declarations/geMe";
import { AUTHSTORE } from "@graphql/authStorage";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  CreateBotConfig,
  GetBotConfig,
  ListBotConfig,
  UpdateBotConfig,
} from "./graphql/declarations/botConfig";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apolloClient } from "./graphql/client";
import CarrierModal from "./components/pages/main/modals/CarrierModal";
import { SheetSidebar } from "./components/common/SidebarSheet";
import { twMerge } from "tailwind-merge";
import { GetGHL } from "./graphql/declarations/ghs";
import ApiKeyModal from "./components/pages/main/modals/ApiKeyModal";
import HealthSherpaExcelExplore from "./components/pages/main/modals/HealthSherpaExcelExplore";
import { Textarea } from "./components/ui/textarea";
import ChatBubble from "./components/common/ChatBubble";
import { SendHorizonal } from "lucide-react";

function Sidebar({ className }: { className?: string }) {
  const { data } = useQuery(GetMe);
  const { data: GHLData } = useQuery(GetGHL);
  const [apiKeyModal, setApiKeyModal] = useState(false);
  const [healthSherpaModal, setHealthSherpaModal] = useState(false);

  return (
    <>
      <div
        className={twMerge(
          "lg:h-screen lg:overflow-y-auto no-scrollbar border border-gray-light shadow-lg",
          className
        )}
      >
        <div className="mt-2">
          <p className="font-bold text-lg">My Account</p>
        </div>
        <div className="">
          <div className="sm:py-2">
            <p className="text-xs sm:text-base lg:text-normal">
              {data?.authenticatedItem?.email}
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
        <hr className="h-px my-4 bg-gray-light border-0" />
        <div className="">
          <p className="font-bold text-lg">Agency information</p>
        </div>
        {data?.authenticatedItem?.ghlAccess && (
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
        <div>
          <button
            className={"bg-primary-light mt-2 w-full py-2 rounded-md"}
            onClick={() => {
              const baseURL = import.meta.env.VITE_GRAPHQL_URL.replace(
                "/api/graphql",
                ""
              );
              const redirect = `${baseURL}/api/ghapi/auth/signin?redirect=${window.location.href}&userID=${data?.authenticatedItem?.id}`;
              fetch(redirect, {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${AUTHSTORE.get("token")}`,
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
                  {data?.authenticatedItem?.ghlAccess
                    ? "Reconnect to GHL"
                    : "Connect to GHL"}
                </span>
              }
            </p>
          </button>
        </div>
        <div className="my-4 sm:mt-12">
          <p className="font-bold text-lg">ChatGPT Settings</p>
        </div>
        <div className="-mt-4">
          <div className="p-2">
            <p className="text-xs sm:text-base">
              API Key:{" "}
              <>
                {data?.authenticatedItem?.aiKey?.openapiKey
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
          <p className="font-bold text-lg">Tools</p>
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

        <div className="mt-8 sm:mt-12">
          <span>Formats</span>
        </div>
        <div className="divider-x"></div>
        <div className="formats-buttons-container"></div>
        <div className="flex mt-8">
          <button className="inline">
            <FaArrowRotateLeft className="size-4 sm:size-5" />
          </button>
          <span className="ml-2 font-medium text-sm sm:text-base">History</span>
        </div>
        <div className="divider-x"></div>
        <div className="sidebar-history">
          <p className="truncate ... py-1 text-sm sm:text-base">
            How should the chatbot summarize How should the chatbot summarize
            How should the chatbot summarize
          </p>
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
  const [tab, setTab] = useState<string>();

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
  const [configSet, setConfig] = useState<
    | {
        companyStatement?: string | null;
        tonestyle?: string | null;
        priorityPlan?: string | null;
        healthInsuranceCarriers?: string | null;
        presentationStrategy?: string | null;
        specificQuestions?: string | null;
        summaryPrompt?: string | null;
        welcomeMessage?: string | null;
      }
    | undefined
  >();

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

  const handleChatSubmit = (e: any) => {
    console.log(e);
  };

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

  const [testConfig, setTestConfig] = useState<{
    firstName: string;
    lastName: string;
    dob: DateValueType;
    income: string;
    dependents: string;
    postalCode: string;
    message: string;
  }>({
    firstName: "",
    lastName: "",
    dob: null,
    income: "",
    dependents: "",
    postalCode: "",
    message: "",
  });

  const testWelcomeMessage = () => {
    console.log(testConfig);
  };

  const convoStarter = [
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
    `"Explain quantum computing in simple terms"`,
  ];

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

      <Tabs
        onValueChange={(e) => setTab(e)}
        defaultValue="welcomeTab"
        className="w-full bg"
      >
        <TabsList className="w-full bg-transparent p-0 px-4 mt-[22px] md:mt-[30px]">
          <div className="bg-gradient-to-b from-[#ffffff] to-[#ffffff00] backdrop-blur-sm flex justify-center w-full z-10 py-4">
            <div className="p-2 bg-gray-light rounded-xl">
              <TabsTrigger
                className="rounded-xl py-2 md:py-4"
                value="welcomeTab"
              >
                👋 Welcome messages
              </TabsTrigger>
              <TabsTrigger className="rounded-xl py-2 md:py-4" value="chatTab">
                💬 Start chating
              </TabsTrigger>
            </div>
          </div>
        </TabsList>
        <TabsContent value="welcomeTab">
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
                <p className="form-label">
                  {langSnippet.recommendedPlan.label}
                </p>
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
                <p className="form-label">
                  {langSnippet.chatbotQuestion.label}
                </p>
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
            <p className="footer-text">
              © 2024 Obamacare AI. All Rights Reserved.
            </p>
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
        </TabsContent>
        <TabsContent
          value="chatTab"
          className={twMerge(
            "relative justify-center items-center flex flex-col"
          )}
        >
          <div className="h-[calc(100vh-10rem+10px)] md:h-[calc(100vh-10rem)] flex flex-col w-full">
            <div className="h-[calc(100%-3rem)] md:h-[calc(100%-6rem)] flex -mt-[5rem] overflow-y-auto flex-col-reverse  relative">
              {/* TODO: Only for unlogged users */}
              <p className="flex fixed top-36 left-1/2 lg:left-[calc(50%+11rem)] -translate-x-1/2 items-center gap-x-2 bg-[#F9F9F9] text-center justify-center py-2 px-6 w-full lg:w-auto rounded-md mt-8 text-xs">
                <img src="/images/alert.svg" alt="alert" className="size-4" />
                <p className="text-xs">
                  Please{" "}
                  <a href="/sign-in" className="text-xs underline">
                    login
                  </a>{" "}
                  or{" "}
                  <a href="/sign-up" className="text-xs underline">
                    signup
                  </a>{" "}
                  to save and revisit your chat history!
                </p>
              </p>
              <div className="flex gap-4 py-8 px-2 md:px-8 w-full max-w-6xl mx-auto">
                <div className="flex gap-4 flex-col overflow-hidden">
                  {/* Dump all the messages here. Both user and chatbot. Just make
                  sure to differentiate between them. */}
                  {/* {Array.from({ length: 5 }).map((_, index) => (
                    // Opacity-5 if current Session is !== to the session of the message object. This is to hide the messages that are from the previous session if the user is not logged in. It will only show the message of the current session
                    <ChatBubble
                      userChat="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae provident delectus veniam. Earum quo veritatis iure dignissimos recusandae alias officiis?"
                      chatBotResponse={`Ok What is your zip code, age and estimated yearly income, is it safe to say you make more than 22k/year and do you live alone or have dependents? \n\nOk great if you like any of the plans above and are ready, lets start building a more precise quote for you with other details in mind like if you are taking any special meds or like to keep alignment with your current provider.  Would you like to get started?`}
                      className="opacity-40 blur-sm"
                    />
                  ))}
                  <ChatBubble
                    userChat="What is the best obamacare silver plan in my area?"
                    chatBotResponse={`Ok What is your zip code, age and estimated yearly income, is it safe to say you make more than 22k/year and do you live alone or have dependents? \n\nOk great if you like any of the plans above and are ready, lets start building a more precise quote for you with other details in mind like if you are taking any special meds or like to keep alignment with your current provider.  Would you like to get started?`}
                  />
                  <ChatBubble
                    userChat="Yes"
                    chatBotResponse={`Ok great, i just need a couple personal details and I can do the heavy lifting.  I just need your first and last name, dob and consent to look on your behalf.`}
                  />
                  <ChatBubble
                    userChat="John smith” 11/11/1980"
                    chatBotResponse={`Perfect now here is a link to confirm your consent so that i can find the best plan on your behalf.  Aka do the heavy lifting based on 100’s of variables
https://api.leadconnectorhq.com/widget/survey/G7G1OQqFDfdSB1TGnii2`}
                  /> */}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full left-[50%] -translate-x-1/2 flex flex-col">
              <form
                className="w-full max-w-6xl px-4 mx-auto form-container flex flex-col"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-3 w-full gap-x-2 md:gap-x-4 gap-y-2 ">
                  {/* Only show when there is no conversation for the current session. Even if there is a conversation history, as long as the sesssion is new and the user is not logged in, show this convo starter */}
                  {convoStarter.map((convo, index) => (
                    <div
                      key={`convo-${index}`}
                      className="bg-[#624FF61A] text-xs md:text-sm text-primary text-center px-4 md:px-8 py-4 rounded-xl"
                    >
                      {convo} →
                    </div>
                  ))}
                </div>
                <div className="relative flex flex-1 w-full gap-x-2 md:gap-x-4 mt-10">
                  <div className="grow-wrap max-h-[10rem] md:min-h-[58px] w-full">
                    <Textarea
                      name="text"
                      autoComplete="off"
                      autoCorrect="off"
                      autoFocus
                      spellCheck={false}
                      rows={1}
                      tabIndex={0}
                      id="text"
                      placeholder="Hi how may i help you, please enter..."
                      className="max-h-[10rem] w-full rounded-[12px] border border-primary"
                      onInput={(e) =>
                        (e.target.parentNode.dataset.replicatedValue =
                          e.target.value)
                      }
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-4">
                    <IconMessage />
                  </div>

                  <button
                    className="flex-1 btn-submit self-end"
                    // onClick={testWelcomeMessage}
                  >
                    <p className="hidden md:block">Send</p>
                    <SendHorizonal size={18} className="md:hidden block" />
                  </button>
                </div>
              </form>
              <div className="flex justify-center py-4 lg:mt-8">
                <p className="footer-text">
                  © 2024 Obamacare AI. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const Main = () => {
  return (
    <div className="flex justify-end w-full">
      <Sidebar className="w-[350px] hidden lg:block p-8" />
      <Content />
    </div>
  );
};

export default function Appv2() {
  return (
    <>
      <Main />
    </>
  );
}
