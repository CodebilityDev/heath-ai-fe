//@ts-nocheck

import Button from "@components/core/Button";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Input from "@components/core/Input";
import { apolloClient } from "@graphql/client";
import {
  Login,
  Register,
  RequestResetPassword,
  ResetPassword,
} from "@graphql/declarations/auth";
import { AUTHSTORE } from "@graphql/authStorage";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  const processSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    let formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData.entries()) as {
      password: string;
      "confirm-password": string;
    };

    if (data.password !== data["confirm-password"]) {
      toast.error("Passwords do not match");
      return;
    }

    // get token from url
    const token = new URLSearchParams(search).get("token");

    if (!token) {
      toast.error("Invalid reset link");
      return;
    }

    const register = await apolloClient.mutate({
      mutation: ResetPassword,
      variables: {
        token: token,
        password: data.password,
      },
    });

    if (register.data?.authclient_resetPassword) {
      toast.success("Password reset successfully. Please sign in");
      navigate("/sign-in");
    } else {
      toast.error("Failed to reset password");
    }
  };

  return (
    <main className="flex flex-1">
      <div
        style={{
          backgroundImage: `url('/images/splash.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-20 bg-black p min-w-[480px] w-1/3 overflow-hidden hidden lg:block max-w-[640px] relative"
      >
        <div className="z-50 max-w-[405px] w-full space-y-2">
          <h1 className="text-5xl font-bold leading-none text-white">
            Health care something
          </h1>
          <p className="text-gray ">
            Chat with the smartest AI - Experience the power of AI with us
          </p>
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="relative flex items-center justify-center w-full h-full">
          <a
            href="/"
            className="absolute p-1 transition rounded-full cursor-pointer top-2 hover:bg-gray-light right-2 bg-accent"
          >
            <IoClose className="size-4" />
          </a>
          <div className="flex flex-col items-center w-full max-w-md space-y-4">
            <h1 className="text-3xl font-bold">
              Federal<span className="text-3xl text-primary">Plans</span>
            </h1>
            <h2 className="text-xl font-bold">Reset Password</h2>
            <br />
            <form
              className="flex flex-col items-center w-full max-w-md space-y-4"
              onSubmit={processSubmit}
            >
              <Input
                name="password"
                type="password"
                logo={<IoIosLock className="size-5 text-gray" />}
                placeholder="New Password"
              />
              <Input
                name="confirm-password"
                type="password"
                logo={<IoIosLock className="size-5 text-gray" />}
                placeholder="Confirm New Password"
              />
              <Button
                className="py-3 text-white bg-primary rounded-xl"
                type="submit"
              >
                Send Reset URL Link
              </Button>
              <a
                href="/sign-in"
                className="self-start text-sm text-primary hover:underline"
              >
                Back to Sign-In Page
              </a>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
