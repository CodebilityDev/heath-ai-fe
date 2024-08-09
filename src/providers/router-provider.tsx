import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import SignInPage from "@/pages/SignIn";
import MainLayout from "@/layout";
import SignUpPage from "@/pages/SignUp";
import ForgotPasswordPage from "@/pages/ForgotPassword";
import ResetPasswordPage from "@/pages/ResetPassword";

import { ProtectedPath } from "./ProtectedPath";
import Landing from "@/pages/Landing";
import ChatPage from "@/pages/ChatPage";
import { BotEditor } from "@/pages/BotEditor";
import ConversationChatBuilder from "@/pages/ConversationChatBuilder";
import { GroupList } from "@/pages/GroupList";
import { WaitParam } from "./ParamWaitProvider";
import { Dashboard } from "@/pages/Dashboard";
import { WelcomeMessageEditor } from "@/pages/WelcomeMessageEditor";
import { AutoReplyEditor } from "@/pages/AutoReplyEditor";
import { AppLayout } from "@/components/layout/AppLayout";
import GeneralSettingsPage from "@/pages/GeneralSettings";
import CustomFieldsPage from "@/pages/CustomFields";
import QueuedMessagePage from "@/pages/QueuedMessages";
import WhiteLabeling from "@/pages/WhiteLabeling";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "app",
        element: <ProtectedPath />,
        children: [
          {
            path: "",
            element: <GroupList />,
          },

          {
            path: "view/:gid",
            element: <AppLayout />,
            children: [
              {
                path: "",
                element: <Dashboard />,
              },
              {
                path: "welcome",
                element: <WelcomeMessageEditor />,
              },
              {
                path: "autoreply",
                element: <AutoReplyEditor />,
              },
              {
                path: "general-settings",
                element: <GeneralSettingsPage />,
              },
              {
                path: "custom-fields",
                element: <CustomFieldsPage />,
              },
              {
                path: "queued-messages",
                element: <QueuedMessagePage />,
              },
              {
                path: "conversationalchatbuilder",
                element: <ConversationChatBuilder />,
              },
              {
                path: "whitelabeling",
                element: <WhiteLabeling />,
              },
            ],
          },
        ],
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
    ],
  },
]);

export const RouterProviderComponent = () => {
  return <RouterProvider router={router} />;
};
