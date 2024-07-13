import React, { useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

// Pages
import App from "../App";
import SignInPage from "@pages/SignIn";
import MainLayout from "../../src/layout";
import SignUpPage from "@pages/SignUp";
import Main from "@/pages/Main";
import ForgotPasswordPage from "@pages/ForgotPassword";
import ResetPasswordPage from "@pages/ResetPassword";
import Appv2 from "../Appv2";
import { ProtectedPath } from "./ProtectedPath";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/app",
        element: (
          <ProtectedPath>
            <Appv2 />
          </ProtectedPath>
        ),
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "/chatConfig",
        element: <Main />,
      },
    ],
  },
]);

export const RouterProviderComponent = () => {
  return <RouterProvider router={router} />;
};
