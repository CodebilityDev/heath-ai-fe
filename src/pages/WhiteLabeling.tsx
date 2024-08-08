import React, { useEffect, useMemo, useRef, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useFormProvider from "@/providers/useFormProvider";
import { analyticsSchema, brandingSchema } from "@/types/FormTypes";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { BiQuestionMark } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import { apolloClient } from "@/graphql/client";
import { File_generateUploadURL } from "@/graphql/declarations/ghs";
import { Loader2 } from "lucide-react";

const languages = ["English", "Spanish"];

const WhiteLabeling = () => {
  return (
    <main className="max-w-screen-lg px-4 mx-auto mt-8">
      <Tabs className="w-full" defaultValue="analytics">
        <div className="flex justify-center mx-auto">
          <TabsList className="z-10 w-full h-auto p-2 bg-white rounded-none">
            <div className="p-1 mt-4 border rounded-md bg-primary-light">
              <TabsTrigger value="analytics">Analytics Tools</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
            </div>
          </TabsList>
        </div>
        <TabsContent value="analytics">
          <AnalyticsFormComponent />
        </TabsContent>
        <TabsContent value="branding">
          <BrandingFormComponent />
        </TabsContent>
      </Tabs>
      <div className="w-full text-center py-6 mt-8">
        <p className="footer-text">© 2024 Obamacare AI. All Rights Reserved.</p>
      </div>
    </main>
  );
};

const AnalyticsFormComponent = () => {
  const [languageState, setLanguageState] = useState(languages[0]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const { analyticsForm: form } = useFormProvider();

  const handleFile = async (e: any) => {
    setLoadingImage(true);
    console.log(e.target.files[0].name);
    const message = await apolloClient.mutate({
      mutation: File_generateUploadURL,
      variables: {
        input: {
          fileID: e.target.files[0].name,
        },
      },
    });

    const s3PutUrl = message.data?.file_generateUploadURL?.putURL;
    const s3GetUrl = message.data?.file_generateUploadURL?.getURL;

    const fileUploadResponse = await fetch(s3PutUrl!, {
      method: "PUT",
      body: e.target.files[0],
    });

    if (!fileUploadResponse.ok) {
      toast.error("File upload failed");
      setLoadingImage(false);
      return;
    }

    toast.success("File upload successfully");
    setImageUrl(s3GetUrl!);
    setLoadingImage(false);
    form.setValue("imageUrl", s3GetUrl!);
  };

  const handleSubmitForm = (formData: z.infer<typeof analyticsSchema>) => {
    console.log(formData);
  };

  const handleLanguageChange = (index: number) => {
    setLanguageState(languages[index]);
    form.setValue("language", languages[index]);
  };
  return (
    <>
      <div className="border border-primary rounded-md p-4 flex flex-col gap-y-2">
        <h1 className="text-xl">Your free, custom ACA, Marketing site</h1>
        <hr className="h-px border-0 bg-gray-light dark:bg-gray-700" />
        <div className="flex mt-2 gap-x-12 lg:flex-row flex-col">
          <div className="flex flex-col gap-y-2">
            <div>
              <h2 className="font-bold">Let client self-enroll</h2>
              <p className="mt-1 text-sm text-gray">
                Client can shop and enroll on their own. Scale your business
                online by sharing your link via email, social media, or ads.
              </p>
            </div>
            <div>
              <h2 className="font-bold">UTM tag generator</h2>
              <p className="mt-1 text-sm text-gray">
                You can easily add UTM parameters to your client link and use
                them to track your traffic.
              </p>
            </div>
            <div>
              <h2 className="font-bold">Trach their progress</h2>
              <p className="mt-1 text-sm text-gray">
                Your Leads list tracks shoppers on your site. Any shoppers who
                enroll appear on you. Clients List.
              </p>
            </div>
            <div>
              <h2 className="font-bold">Custom to you</h2>
              <p className="mt-1 text-sm text-gray">
                All enrollments use your NPN, So you get commission.
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              if (!fileInputRef.current) return;
              fileInputRef.current.click();
            }}
            className="bg-gray-light cursor-pointer rounded-md flex items-center justify-center w-full max-w-[25rem] overflow-hidden self-center h-72 lg:self-auto lg:flex-shrink-0 lg:mt-0 mt-8"
          >
            <input
              onChange={handleFile}
              type="file"
              hidden
              ref={fileInputRef}
              accept="image/*"
            />
            {loadingImage ? (
              <Loader2 className="w-12 h-12 transition animate-spin" />
            ) : (
              <img
                className={twMerge(
                  imageUrl && "w-full h-full object-cover rounded-md"
                )}
                src={imageUrl || "/images/image-placeholder.png"}
                onLoad={() => console.log("image loaded")}
              />
            )}
          </div>
        </div>
      </div>
      <h1 className="mt-8 text-xl">UTM tag generator</h1>
      <p className="mt-2">
        You can define UTM Parameters to customize your dlient link and use them
        to track your traffic. <span className="text-primary">Learn more.</span>
      </p>
      <div className="mt-4 rounded-md flex gap-y-3 flex-col">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitForm)}
            className="flex flex-col w-full space-y-4"
          >
            <div className="p-4 bg-primary-light rounded-md flex flex-col gap-y-3">
              <h1 className="text-xl">Add UTM parameters</h1>
              <hr className="h-px border-0 bg-gray-light dark:bg-gray-700" />
              <FormField
                control={form.control}
                name="baseUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold flex gap-x-2 items-center">
                      Base URL
                      <span className="border border-black rounded-full">
                        <BiQuestionMark />
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="border-primary px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold flex items-center">
                      Source
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="border-primary px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="medium"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold flex items-center">
                      Medium
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="border-primary px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="campaigningName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold flex items-center">
                      Campaigning Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="border-primary px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col">
                <label htmlFor="languageTab" className="m-0 font-bold">
                  Language
                </label>
                <div
                  className="flex mt-1 border border-primary rounded-md overflow-hidden self-start"
                  id="languageTab"
                >
                  {languages.map((language, indexItem) => (
                    <Button
                      type="button"
                      className={twMerge(
                        "w-full py-3 text-primary bg-transparent rounded-none px-6",
                        language === languageState && "bg-primary text-white"
                      )}
                      key={`language-${indexItem}${
                        languageState === language && "active"
                      }`}
                      onClick={() => handleLanguageChange(indexItem)}
                    >
                      {language}
                    </Button>
                  ))}
                </div>
              </div>
              <hr className="h-px border-0 bg-gray-light dark:bg-gray-700" />
              <label htmlFor="generatedLink" className="m-0 font-bold">
                Generated Marketing Campaign URL
              </label>
              <div className="flex gap-x-2">
                <Input
                  value="https://www.healthsharpa.com/?_agent_id=myacaexpress"
                  readOnly
                  className="border-primary px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="button"
                  onClick={async (e: any) => {
                    e.preventDefault();

                    await navigator.clipboard.writeText(
                      e.target.parentElement.querySelector("input").value
                    );
                    toast.info("Copied to clipboard");
                  }}
                >
                  Copy
                </Button>
              </div>
              <div className="border self-start p-4 rounded-md ">
                <QRCode
                  value="https://www.healthsharpa.com/?_agent_id=myacaexpress"
                  size={100}
                />
              </div>
            </div>
            <h1 className="text-xl">Your Direct Link</h1>
            <p className="text-sm mt-2">
              you can edit the link to your landing page using letter, dashes,
              and underscores to customize.
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold text-sm">Warning: </span> Your previour
              link will no longer workonce you take this action. You might also
              notice that navigating backwards in your current. browser window
              will throw an merror. We highly recommend opening a new tab or
              window after upddating your link.
            </p>
            <div className="bg-primary-light p-4 mt-4 rounded-md flex gap-y-3 flex-col">
              <a
                className="underline text-primary"
                href="https://www.healthsharpa.com/?_agent_id=myacaexpress"
              >
                https://www.healthsharpa.com/?_agent_id=myacaexpress
              </a>
              <div className="flex gap-x-2">
                <Button type="button">Copy</Button>
                <Button variant="outline" type="button">
                  Edit
                </Button>
                <Button variant="outline" type="button">
                  Convert to Spanish
                </Button>
              </div>
            </div>
            <h1 className="text-xl mt-8">Google Analytics</h1>
            <p className="mt-4">
              Enter just the code, ex:UA-123456-1, and not the entire script.
            </p>
            <Input />
            <Button className="self-end px-8 py-6" type="submit">
              Update
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

const BrandingFormComponent = () => {
  const inputColorRef = useRef<HTMLInputElement | null>(null);
  const [color, setColor] = useState("#624ff6");
  const handleBrandingSubmit = (formData: z.infer<typeof brandingSchema>) => {
    console.log(formData);
  };

  const handleColorPicker = (e: any) => {
    if (!inputColorRef.current) return;

    inputColorRef.current.click();
  };
  const { brandingForm: form } = useFormProvider();
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleBrandingSubmit)}>
          <div className="w-full flex flex-col p-4 bg-primary-light rounded-lg">
            <h1 className="text-xl">Add your company information</h1>
            <p className="mt-2 text-sm text-gray">
              you canshare your branded site with consumers using the methods
              below. Yo NPN goes on allapplications that are done througy your
              link. Set up your white-label setting below before sharing your
              link.
            </p>
            <div className="flex flex-col mt-8 gap-y-6">
              <FormField
                control={form.control}
                name="campaigningName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold flex gap-x-2 items-center">
                      Campaign Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="border-primary px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                        placeholder="myACAexpress"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyPhone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="font-bold flex gap-x-2 items-center">
                      Company Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="border-primary px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                        placeholder="(916) 8666-8476"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="self-end px-8 py-6 mt-8 rounded-xl"
              type="submit"
            >
              Update
            </Button>
          </div>
        </form>
      </Form>
      <hr className="my-8" />
      <div className="rounded-md flex flex-col gap-y-2">
        <div className="flex mt-2 gap-x-12 sm:flex-row sm:justify-between flex-col">
          <div className="flex flex-col gap-y-2">
            <div>
              <h2 className="font-bold">Let client self-enroll</h2>
              <p className="mt-1 text-sm text-gray">
                Select which life style photograph you’d like featured at the
                top of your homepage
              </p>
            </div>

            <div className="mt-4 self-center sm:self-start border flex items-center flex-col p-4 rounded-lg shadow-sm">
              <h2 className="text-base">Current life style photo</h2>
              <div className="rounded-full w-24 h-24 mt-2 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/images/default-lifestyle.png"
                  alt="lifestyle-photo"
                />
              </div>
              <Button className="mt-4 w-full" type="button">
                Upload Photo
              </Button>
            </div>
          </div>

          <div
            // onClick={() => {
            //   if (!fileInputRef.current) return;
            //   fileInputRef.current.click();
            // }}
            className="bg-gray-light cursor-pointer rounded-md flex items-center justify-center w-full max-w-[25rem] overflow-hidden self-center h-72 lg:self-auto lg:flex-shrink-0 sm:mt-0 mt-8"
          >
            <input
              // onChange={handleFile}
              type="file"
              hidden
              // ref={fileInputRef}
              accept="image/*"
            />
            <img
              // twMerge("w-full h-full object-cover rounded-md")
              className=""
              src={"/images/image-placeholder.png"}
              onLoad={() => console.log("image loaded")}
            />
            {/* {loadingImage ? (
              <Loader2 className="w-12 h-12 transition animate-spin" />
            ) : (
              
            )} */}
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="rounded-md flex flex-col gap-y-2">
        <div className="flex mt-2 gap-x-12 sm:flex-row sm:justify-between flex-col">
          <div className="flex flex-col gap-y-2">
            <div>
              <h2 className="font-bold">Logo Upload - Navigation Bar</h2>
              <p className="mt-1 text-sm text-gray">
                Please upload your logo at 80px height in either JPG, PNG, or
                TIFF Format.
              </p>
            </div>

            <div className="mt-4 self-center sm:self-start flex items-center flex-col rounded-lg shadow-sm">
              <Button className="mt-4 w-full" type="button">
                Upload Logo
              </Button>
            </div>
          </div>

          <div
            // onClick={() => {
            //   if (!fileInputRef.current) return;
            //   fileInputRef.current.click();
            // }}
            className="bg-gray-light cursor-pointer rounded-md flex items-center justify-center w-full max-w-[25rem] overflow-hidden self-center h-72 lg:self-auto lg:flex-shrink-0 sm:mt-0 mt-8"
          >
            <input
              // onChange={handleFile}
              type="file"
              hidden
              // ref={fileInputRef}
              accept="image/*"
            />
            <img
              // twMerge("w-full h-full object-cover rounded-md")
              className=""
              src={"/images/image-placeholder.png"}
              onLoad={() => console.log("image loaded")}
            />
            {/* {loadingImage ? (
              <Loader2 className="w-12 h-12 transition animate-spin" />
            ) : (
              
            )} */}
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center gap-x-4 bg-primary-light rounded-xl mt-8">
        <img src="/images/image-light.png" alt="lightbulb-image" />
        <p>
          <span className="font-bold">Tip:</span> The less white space around
          your logo, the better it will dispay. Please make sure your logo is as
          close to the edges of your file height as possible
        </p>
      </div>
      <hr className="my-8" />
      <h1 className="text-xl">Custom color palette</h1>
      <p className="mt-2">
        you can customize the color of your homepage by using the color section
        below.
      </p>
      <div className="mt-4 gap-8 flex-wrap flex justify-between items-center">
        <div
          className="py-2 px-4 items-center flex gap-x-2 rounded-md border-primary border cursor-pointer w-40"
          onClick={handleColorPicker}
        >
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            ref={inputColorRef}
            className="border-none bg-transparent w-6 h-7 rounded-lg overflow-hidden"
          />
          <p className="font-bold tracking-widest" style={{ color: color }}>
            {color}
          </p>
        </div>
        <div className="flex gap-x-4">
          <Button className="w-32 py-6" type="button" variant="outline">
            Reset to Default
          </Button>
          <Button className="w-32 py-6" type="button">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default WhiteLabeling;
