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
import { Login, Register } from "@graphql/declarations/auth";
import { AUTHSTORE } from "@graphql/authStorage";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  const processSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    let formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    console.log(data);

    const register = await apolloClient.mutate({
      mutation: Register,
      variables: {
        email: data.email,
        password: data.password,
      },
    });

    if (register.data?.authclient_register) {
      const login = await apolloClient.mutate({
        mutation: Login,
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      if (
        login.data?.authclient_login?.__typename ===
        "ClientItemAuthenticationWithPasswordSuccess"
      ) {
        const token = login.data.authclient_login.sessionToken;

        AUTHSTORE.set(token);

        navigate("/");
      } else {
        toast.error("Failed to signin");
      }
    } else {
      toast.error("Failed to register");
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
            <div className="flex gap-x-2 w-full p-1.5 rounded-xl bg-[#F3F5F7]">
              <a href="/sign-in" className="w-full">
                <Button
                  className={twMerge(
                    "py-2.5 text-xs rounded-xl bg-transparent opacity-50 hover:bg-white hover:text-black hover:opacity-100",
                    pathname === "/sign-in" &&
                      "bg-primary text-white opacity-100 hover:opacity-100 hover:bg-primary hover:text-white"
                  )}
                >
                  Sign in
                </Button>
              </a>
              <a href="/sign-up" className="w-full">
                <Button
                  className={twMerge(
                    "py-2.5 text-xs rounded-xl bg-transparent hover:bg-white opacity-50 hover:text-black hover:opacity-100 ",
                    pathname === "/sign-up" &&
                      "bg-primary text-white hover:opacity-100 opacity-100 hover:bg-primary hover:text-white"
                  )}
                >
                  Sign up
                </Button>
              </a>
            </div>
            <div className="w-full space-y-2">
              <Button
                className={twMerge(
                  "py-3 flex justify-center items-center bg-transparent rounded-xl hover:bg-white hover:text-black hover:opacity-100 border-2 border-[#E8ECEF]"
                )}
              >
                <FcGoogle className="mr-2" />
                Continue with Google
              </Button>
              <Button
                className={twMerge(
                  "py-3  flex justify-center items-center bg-transparent rounded-xl hover:bg-white hover:text-black hover:opacity-100 border-2 border-[#E8ECEF]"
                )}
              >
                <BsApple className="mr-2" />
                Continue with Apple
              </Button>
            </div>
            <div className="inline-flex items-center justify-center w-full ">
              <hr className="w-full h-[2px] rounded-full my-4 bg-gray-200 border-0 bg-gray" />
              <span className="absolute px-3 text-xs font-medium -translate-x-1/2 bg-white text-gray left-1/2">
                OR
              </span>
            </div>
            <form
              className="flex flex-col items-center w-full max-w-md space-y-4"
              onSubmit={processSubmit}
            >
              <Input
                name="email"
                logo={<MdEmail className="size-5 text-gray" />}
                placeholder="Email or Username"
              />
              <Input
                name="password"
                logo={<IoIosLock className="size-5 text-gray" />}
                placeholder="Password"
                type="password"
              />
              <Button
                className="py-3 text-white bg-primary rounded-xl"
                type="submit"
              >
                Sign up to Healthcare Plans
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
