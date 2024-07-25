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
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
  const { gid } = useParams();
  const [welcomeMessage, setWelcomeMessage] = useState(false);
  const [updateChange, setUpdateChange] = useState(false);
  const [autoReply, setAutoReply] = useState(false);

  const { data: groupData } = useQuery(GetGroup, {
    variables: {
      where: {
        id: gid,
      },
    },
    skip: !gid,
  });

  useEffect(() => {
    setWelcomeMessage(groupData?.group?.enable_globalWelcome ? true : false);
    setUpdateChange(
      groupData?.group?.enable_globalContactUpdate ? true : false
    );
    setAutoReply(groupData?.group?.enable_globalAutoReply ? true : false);
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
            enable_globalWelcome: welcomeMessage,
            enable_globalContactUpdate: updateChange,
            enable_globalAutoReply: autoReply,
          },
        },
      })
      .then(() => {
        toast.success("Settings Updated Successfully");
      });
  };

  return (
    <div className="flex flex-col gap-6 px-8 py-8">
      <div className="p-4 rounded-md bg-slate-100">
        <div className="flex item-center gap-x-2">
          <Switch
            checked={welcomeMessage}
            onCheckedChange={() => setWelcomeMessage((prev) => !prev)}
          />
          Enable Welcome Messages
        </div>
        <br />
        <p>Send Welcome Messages to newly created Contacts</p>
        <p>
          Tweak Welcome Message Settings{" "}
          <Link to={`/app/view/${gid}/welcome`}>
            <span className="text-blue-600 underline">Here</span>
          </Link>
        </p>
      </div>
      <div className="p-4 rounded-md bg-slate-100">
        <div className="flex item-center gap-x-2">
          <Switch
            checked={updateChange}
            onCheckedChange={() => setUpdateChange((prev) => !prev)}
          />
          Enable Contact Update Welcome Messages
        </div>
        <br />
        <p>Send Welcome Messages when contact information updates</p>
        <p>
          Tweak Welcome Message Settings{" "}
          <Link to={`/app/view/${gid}/welcome`}>
            <span className="text-blue-600 underline">Here</span>
          </Link>
        </p>
      </div>
      <div className="p-4 rounded-md bg-slate-100">
        <div className="flex item-center gap-x-2">
          <Switch
            checked={autoReply}
            onCheckedChange={() => setAutoReply((prev) => !prev)}
          />
          Enable Conversation Auto Reply via ChatGPT
        </div>
        <br />
        <p>Let ChatGPT take the wheel on entertaining your Contact's queries</p>
        <p>
          Tweak Auto Reply Settings{" "}
          <Link to={`/app/view/${gid}/autoreply`}>
            <span className="text-blue-600 underline">Here</span>
          </Link>
        </p>
      </div>
      <Button
        variant="outline"
        className="w-full py-2 font-bold hover:text-white hover:bg-primary"
        onClick={updateToggles}
      >
        Update Settings
      </Button>
    </div>
  );
}

export const Dashboard = () => {
  return <Content />;
};
