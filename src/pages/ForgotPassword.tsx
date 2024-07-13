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
} from "@graphql/declarations/auth";
import { AUTHSTORE } from "@graphql/authStorage";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  const processSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    let formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData.entries()) as {
      email: string;
    };

    const register = await apolloClient.mutate({
      mutation: RequestResetPassword,
      variables: {
        email: data.email,
      },
    });

    if (register.data?.authclient_requestPasswordReset) {
      toast.success("Reset link sent successfully. Check your email");
    } else {
      toast.error("Failed to send reset link");
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
            <h2 className="text-xl font-bold">Forgot Password</h2>
            <br />
            <form
              className="flex flex-col items-center w-full max-w-md space-y-4"
              onSubmit={processSubmit}
            >
              <Input
                name="email"
                logo={<MdEmail className="size-5 text-gray" />}
                placeholder="Email or Username"
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

export default ForgotPasswordPage;
