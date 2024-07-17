import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import SignInPage from "@/pages/SignIn";
import MainLayout from "@/layout";
import SignUpPage from "@/pages/SignUp";
import ForgotPasswordPage from "@/pages/ForgotPassword";
import ResetPasswordPage from "@/pages/ResetPassword";

import { ProtectedPath } from "./ProtectedPath";
import Landing from "@/pages/Landing";
import App from "@/App";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/app",
        element: (
          <ProtectedPath>
            <App />
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
    ],
  },
]);

export const RouterProviderComponent = () => {
  return <RouterProvider router={router} />;
};
