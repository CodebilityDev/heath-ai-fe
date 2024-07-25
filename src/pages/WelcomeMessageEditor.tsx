import langSnippet from "@/utils/LangSnippet";
import "react-toastify/dist/ReactToastify.css";
import CheckButtons from "@/components/core/CheckButtons";
import CheckBox from "@/components/core/CheckBox";
import Select from "react-tailwindcss-select";
import { useQuery } from "@apollo/client";
import { GetGroup, GetMe, UpdateGroup } from "@/graphql/declarations/geMe";
import { AUTHSTORE } from "@/graphql/authStorage";
import { BiSolidUserDetail } from "react-icons/bi";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ApiKeyModal from "@/components/pages/main/modals/ApiKeyModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import HealthSherpaExcelExplore from "@/components/pages/main/modals/HealthSherpaExcelExplore";
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
import {
  GetGHL,
  ghl_getContacts,
  Ghl_sendMessage,
} from "@/graphql/declarations/ghs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AvatarIcon from "@/components/core/AvatarIcon";
import { sidebarLinks } from "@/constans/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import NavigationButtons from "@/components/common/NavigationButtons";
import DialogComponent from "@/components/common/DialogComponent";
import { FaSignOutAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/common/DatePicker";
import { Textarea } from "@/components/ui/textarea";
import { DeleteIcon, EditIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import ChatBot from "@/components/pages/main/ChatBot";
import { AIContextProvider } from "@/providers/AI-Provider";
import { Sidebar } from "../components/layout/AppSidebar";

function Content() {
  const [carrierModal, setCarrierModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectValue>(null);
  const [configSet, setConfig] = useState<ConfigInterface | undefined>();
  const [testConfig, setTestConfig] = useState<TestConfigInterface>({
    first_name: "",
    last_name: "",
    dob: "",
    message: "",
    number_of_tax_dependents: "",
    yearly_income: "",
    zip_code: "",
  });

  const { gid } = useParams();

  const { data: contactList } = useQuery(ghl_getContacts, {
    variables: {
      input: {
        groupID: gid!,
        query: "",
      },
    },
    skip: !gid,
  });

  const { data: userData, loading: userLoading } = useQuery(GetMe);
  const [date, setDate] = useState<Date>();

  const { data, loading } = useQuery(ListBotConfig, {
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
    // dont use cache
    fetchPolicy: "no-cache",
  });

  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [toggleSwitch2, setToggleSwitch2] = useState(false);
  const { data: groupData } = useQuery(GetGroup, {
    variables: {
      where: {
        id: gid,
      },
    },
    skip: !gid,
  });

  const [actualSend, setActualSend] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const [lastMessage, setLastMessage] = useState("");
  const [chatThread, setChatThread] = useState<
    {
      role: string;
      content: string;
    }[]
  >([]);
  const sendMessage = async () => {
    if (!selectedItem) {
      return;
    }
    if (!groupData?.group?.ghlAccess?.locationId) {
      toast.error("Please connect to GHL first");
      return;
    }
    setTestLoading(true);
    setLastMessage("");
    setChatThread([]);

    const message = await apolloClient.mutate({
      mutation: Ghl_sendMessage,
      variables: {
        input: {
          groupID: gid!,
          actualSend: actualSend,
          contactID: (selectedItem as any).value,
          location_id: groupData?.group?.ghlAccess?.locationId,
          dob: date?.toISOString(),
          first_name: testConfig.first_name,
          last_name: testConfig.last_name,
          yearly_income: testConfig.yearly_income,
          number_of_tax_dependents: testConfig.number_of_tax_dependents,
          zip_code: testConfig.zip_code,
        },
      },
    });

    // toast.success(JSON.stringify(message));
    setLastMessage(message.data?.ghl_sendMessage?.message ?? "");
    setTestLoading(false);
    setChatThread(JSON.parse(message.data?.ghl_sendMessage?.thread ?? "[]"));
  };

  useEffect(() => {
    if (!gid) {
      return;
    }
    if (data?.botConfigs) {
      if (data.botConfigs.length === 0) {
        if (!userData?.authenticatedItem?.id) {
          return;
        }
        console.log("Creating bot config ", gid);
        apolloClient
          .mutate({
            fetchPolicy: "no-cache",
            mutation: CreateBotConfig,
            variables: {
              data: {
                name: gid,
                group: {
                  connect: {
                    id: gid,
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
  }, [data, gid, userData]);

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
            welcomeMessageFormat: configSet?.welcomeMessageFormat,
            noZipCodeMessage: configSet?.noZipCodeMessage,
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

  useEffect(() => {
    setToggleSwitch(groupData?.group?.enable_globalWelcome ? true : false);
    setToggleSwitch2(
      groupData?.group?.enable_globalContactUpdate ? true : false
    );
  }, [groupData]);

  const updateToggles = async () => {
    await apolloClient
      .mutate({
        mutation: UpdateGroup,
        variables: {
          where: {
            id: gid,
          },
          data: {
            enable_globalWelcome: toggleSwitch,
            enable_globalContactUpdate: toggleSwitch2,
          },
        },
      })
      .then(() => {
        toast.success("Settings Updated Successfully");
      });
  };

  return (
    <>
      <div className="max-w-screen-lg px-4 mx-auto mt-8">
        <div className="p-4 bg-orange-100 rounded-xl">
          <h2 className="text-3xl font-bold text-orange-500">
            Welcome Message Builder
          </h2>
          <br />
          <p>
            This feature allows you to send welcome messages to newly created
            contacts. Jump start the conversation by asking for the user's zip
            code and show a health care plan recommendation.
          </p>
          <div className="flex mt-4 item-center gap-x-2">
            <Switch
              checked={toggleSwitch}
              onCheckedChange={() => setToggleSwitch((prev) => !prev)}
            />
            {!toggleSwitch
              ? "Enable Auto Welcome Message"
              : "Now Replying to Welcome Messages"}
          </div>
          <div className="flex mt-4 item-center gap-x-2">
            <Switch
              checked={toggleSwitch2}
              onCheckedChange={() => setToggleSwitch2((prev) => !prev)}
            />
            {!toggleSwitch2
              ? "Send Welcome Message when Contact Updates"
              : "Now Sending Message when Contact Updates"}
          </div>
          <Button
            variant="outline"
            className="w-full py-2 mt-4 font-bold bg-orange-100 hover:text-white hover:bg-primary"
            onClick={updateToggles}
          >
            Update Settings
          </Button>
        </div>
        <div className="p-2 mt-4">
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
        </div>
      </div>
      <Tabs defaultValue="builder" className="w-full">
        <div className="flex justify-center mx-auto">
          <TabsList className="z-10 w-full h-auto p-2 bg-white rounded-none">
            <div className="p-1 mt-4 border rounded-md bg-primary-light">
              <TabsTrigger value="builder">Message Settings</TabsTrigger>
              <TabsTrigger value="testingChat">Test/Send Message</TabsTrigger>
            </div>
          </TabsList>
        </div>
        <TabsContent value="builder">
          <form className="mt-8 form-container" onSubmit={handleSubmit}>
            <div className="form-content">
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
              {/* <div className="w-full">
                <p className="form-label">Pre Prompt Editor</p>
                <div className="form-carrier-container">
                  <div className={"w-full"}>
                    <Textarea
                      className="w-full h-32 mb-4 resize-none rounded-xl"
                      rows={2}
                      placeholder="Enter pre prompt"
                      onChange={(e: any) => {
                        setTextArea(e.target.value);
                      }}
                      value={textArea}
                    />
                    <div className="flex flex-wrap w-full gap-2 mb-4">
                      {prePrompts.map((prePrompt: string, idx: number) => (
                        <div
                          key={`prePrompt-${idx}`}
                          className="flex items-center justify-between px-4 py-2 overflow-hidden text-white rounded-lg w-72 gap-x-1 bg-primary"
                        >
                          <p className="truncate">{prePrompt}</p>
                          <div className="flex">
                            <Button
                              variant="ghost"
                              className="w-8 h-8 p-0 rounded-full hover:bg-transparent hover:text-green-300"
                              onClick={() => {
                                setEditMode((prev) => ({
                                  ...prev,
                                  mode: true,
                                  idxToEdit: idx,
                                }));
                                setTextArea(prePrompts[idx]);
                              }}
                            >
                              <EditIcon className="size-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              className="w-8 h-8 p-0 rounded-full hover:bg-transparent hover:text-red-300"
                              onClick={() => {
                                setPrePrompts(
                                  prePrompts.filter((_, i) => i !== idx)
                                );
                              }}
                            >
                              <DeleteIcon className="size-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="w-full">
                <p className="form-label">
                  {langSnippet.recommendedPlan.label}
                </p>
                <CheckButtons
                  options={langSnippet.recommendedPlan.options}
                  type="recommendedPlan"
                  handleChange={(e: any, value: string) => {
                    setConfig({
                      ...configSet,
                      presentationStrategy: value,
                    });
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
              <div className="w-full">
                <p className="form-label">{langSnippet.welcomeMessage.label}</p>
                <textarea
                  rows={6}
                  placeholder={langSnippet.welcomeMessage.placeholder}
                  className="form-input"
                  onChange={(e) => {
                    setConfig({
                      ...configSet,
                      welcomeMessageFormat: e.target.value,
                    });
                  }}
                  value={configSet?.welcomeMessageFormat ?? ""}
                ></textarea>
              </div>
              <div className="w-full">
                <p className="form-label">{langSnippet.noZipMessage.label}</p>
                <textarea
                  rows={6}
                  placeholder={langSnippet.noZipMessage.placeholder}
                  className="form-input"
                  onChange={(e) => {
                    setConfig({
                      ...configSet,
                      noZipCodeMessage: e.target.value,
                    });
                  }}
                  value={configSet?.noZipCodeMessage ?? ""}
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
        </TabsContent>
        <TabsContent value="testingChat" className="">
          <form
            className="mt-8 form-container"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-content">
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
                    value={testConfig.first_name}
                    onChange={(e) =>
                      setTestConfig({
                        ...testConfig,
                        first_name: e.target.value,
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
                    value={testConfig.last_name}
                    onChange={(e) =>
                      setTestConfig({
                        ...testConfig,
                        last_name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="inline-form-container">
                <div className="inline-form-element">
                  <p className="mb-2">Date of Birth</p>
                  <input
                    type="date"
                    className="form-input"
                    value={testConfig.dob}
                    onChange={(e) =>
                      setTestConfig({
                        ...testConfig,
                        dob: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="inline-form-element">
                  <p className="mb-2">income</p>
                  <select
                    className="form-input hci-select"
                    value={testConfig.yearly_income}
                    onChange={(e) =>
                      setTestConfig({
                        ...testConfig,
                        yearly_income: e.target.value,
                      })
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
                    value={testConfig.number_of_tax_dependents}
                    onChange={(e) =>
                      setTestConfig({
                        ...testConfig,
                        number_of_tax_dependents: e.target.value,
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
                    value={testConfig.zip_code}
                    onChange={(e) =>
                      setTestConfig({
                        ...testConfig,
                        zip_code: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="divider-x"></div>
              {/* <div className="flex flex-col w-full">
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
                <button className="flex-1 btn-submit" onClick={sendMessage}>
                  Test welcome message
                </button>
                <button className="flex-1 btn-submit">
                  Save/Delete favourite format
                </button>
              </div>
            </div> */}
              <div className="divider-x"></div>
              <div className="form-submit-container justify-center mb-[150px]">
                <div className="relative flex flex-1 w-full">
                  <div className="inline-form-element">
                    <p className="mb-2">Users Select</p>
                    <div className="flex flex-col items-center w-full md:flex-row">
                      <div className="relative flex flex-1 w-full mb-4 md:mr-4 md:mb-0">
                        <Select
                          value={selectedItem}
                          onChange={(e) => setSelectedItem(e)}
                          isClearable={true}
                          primaryColor={"violet"}
                          // isMultiple={true}
                          options={
                            contactList?.ghl_getContacts?.contacts?.map(
                              (contact) => ({
                                label: contact?.contactName ?? "",
                                value: contact?.id ?? "",
                              })
                            ) ?? []
                          }
                          // value={selectedItem}
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
                          // onChange={(e: any) => setSelectedItem(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center w-full h-full md:w-auto">
                        <button
                          className="btn-submit"
                          onClick={sendMessage}
                          disabled={testLoading || !selectedItem}
                        >
                          {(testLoading && "Sending...") ||
                            (!selectedItem && "Select User") ||
                            "Send Message"}
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      {/* checkbox */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="test"
                            name="test"
                            className="mr-2"
                            checked={actualSend}
                            onChange={(e) => setActualSend(e.target.checked)}
                          />
                          <label htmlFor="test">
                            Send real SMS Message to User
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 mt-4 border-t-2">
                      <p className="text-lg font-bold">Actual Message:</p>

                      <p className="whitespace-pre-wrap">{lastMessage}</p>
                    </div>
                    <div className="p-2 mt-8 font-mono text-xs break-all bg-slate-200">
                      <p className="font-bold">Chat Thread Debugging</p>
                      {chatThread.map((item, idx) => (
                        <div key={idx} className="py-2">
                          <p>
                            <b>{item.role}</b>:{" "}
                          </p>
                          <p className="max-h-[20rem] overflow-y-auto no-scrollbar">
                            {item.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </TabsContent>
      </Tabs>

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
    </>
  );
}

export const WelcomeMessageEditor = () => {
  return <Content />;
};
