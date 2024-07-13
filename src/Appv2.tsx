import IconRotateLeft from "@svgs/IconRotateLeft";
import langSnippet from "@utils/LangSnippet";
import "react-toastify/dist/ReactToastify.css";
import CheckButtons from "@components/core/CheckButtons";
import CheckBox from "@components/core/CheckBox";
import Datepicker from "react-tailwindcss-datepicker";
import Select from "react-tailwindcss-select";
import IconMessage from "@svgs/IconMessage";
import { useQuery } from "@apollo/client";
import { GetMe } from "@graphql/declarations/geMe";
import { AUTHSTORE } from "@graphql/authStorage";

function Sidebar() {
  const { data } = useQuery(GetMe);

  return (
    <div className="w-[325px] h-screen overflow-y-auto no-scrollbar border border-gray-light shadow-lg p-8 pt-8">
      <div className="sidebar-header">
        <p className="sidebar-title">My Account</p>
      </div>
      <div>
        <p>{data?.authenticatedItem?.email}</p>
        <button
          className={"btn btn-primary"}
          onClick={() => {
            AUTHSTORE.clear();
            window.location.href = "/";
          }}
        >
          <p className={"btn-text"}>Sign Out</p>
        </button>
      </div>
      <br />
      <div className="sidebar-header">
        <p className="sidebar-title">Agency information</p>
      </div>
      <div>
        <button className={"btn btn-primary"}>
          <p className={"btn-text"}>Connect to GHL</p>
        </button>
        <button className={"btn btn-primary"}>
          <p className={"btn-text"}>Add OpenAI API Key</p>
        </button>
        <button className={"btn btn-primary"}>
          <p className={"btn-text"}>Health sherpa excel exports</p>
        </button>
      </div>
      <div className="mt-8">
        <span>Formats</span>
      </div>
      <div className="divider-x"></div>
      <div className="formats-buttons-container"></div>
      <div className="flex mt-8">
        <button className="inline">
          <IconRotateLeft />
        </button>
        <span className="ml-2 font-medium">History</span>
      </div>
      <div className="divider-x"></div>
      <div className="sidebar-history">
        <p className="truncate ... py-1">
          How should the chatbot summarize How should the chatbot summarize How
          should the chatbot summarize
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
      <div className="sticky top-0 left-0 w-full bg-white header-container">
        <p className="header-title">
          Federal<span className="text-2xl text-primary">Plans</span>
        </p>
      </div>
      <div className="mt-8 form-container">
        <div className="form-content">
          <div className="w-full">
            <p className="form-label">{langSnippet.mission.label}</p>
            <textarea
              rows={6}
              placeholder={langSnippet.mission.placeholder}
              className="form-input"
            ></textarea>
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.tone.label}</p>
            <input
              type="text"
              placeholder={langSnippet.tone.placeholder}
              className="form-input"
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.plan.label}</p>
            <CheckButtons options={langSnippet.plan.options} type="plan" />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.carrier.label}</p>
            <div className="form-carrier-container">
              <div className={"checked-carriers-container"}></div>
              <button
                className="btn-primary-lg btn-outlined"
                onClick={(e: any) => {
                  e.preventDefault();
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
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.chatbotQuestion.label}</p>
            <input
              type="text"
              placeholder={langSnippet.chatbotQuestion.placeholder}
              className="form-input"
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.summary.label}</p>
            <input
              type="text"
              placeholder={langSnippet.summary.placeholder}
              className="form-input"
            />
          </div>
          <div className="w-full">
            <p className="form-label">{langSnippet.exMessage.label}</p>
            <textarea
              rows={6}
              placeholder={langSnippet.exMessage.placeholder}
              className="form-input"
            ></textarea>
          </div>
          <div className="inline-form-container">
            <div className="inline-form-element">
              <p className="mb-2">First name</p>
              <input
                type="text"
                placeholder="Ex: John"
                className="form-input"
              />
            </div>
            <div className="inline-form-element">
              <p className="mb-2">Last name</p>
              <input
                type="text"
                placeholder="Ex: John"
                className="form-input"
              />
            </div>
          </div>
          <div className="inline-form-container">
            <div className="inline-form-element">
              <p className="mb-2">Date of Birth</p>
              <Datepicker
                asSingle={true}
                useRange={false}
                inputClassName="form-input"
                placeholder={"Select date"}
              />
            </div>
            <div className="inline-form-element">
              <p className="mb-2">income</p>
              <select
                placeholder="0-10k/year"
                className="form-input hci-select"
              >
                <option value={0}>0-10k/year</option>
                <option value={1}>11-30k/year</option>
              </select>
            </div>
          </div>
          <div className="inline-form-container">
            <div className="inline-form-element">
              <p className="mb-2">Number of Dependents</p>
              <select placeholder="0" className="form-input hci-select">
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
              <button className="flex-1 btn-submit">
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
      </div>
      <div className="footer-container">
        <p className="footer-text">© 2024 Obamacare AI. All Rights Reserved.</p>
      </div>
    </div>
  );
}

const Main = () => {
  return (
    <div className="flex justify-end w-full">
      <Sidebar></Sidebar>
      <Content></Content>
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
