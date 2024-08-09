import useFormProvider from "@/providers/useFormProvider";
import { generalSettingsSchema } from "@/types/FormTypes";
import React, { useEffect } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { converTimeToISO } from "@/lib/utils";
import { apolloClient } from "@/graphql/client";
import { GetGroup, UpdateGroup } from "@/graphql/declarations/geMe";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";

const GeneralSettingsPage = () => {
  const { generalSettingsForm: form } = useFormProvider();
  const { gid } = useParams();

  const { data: groupData } = useQuery(GetGroup, {
    variables: {
      where: {
        id: gid,
      },
    },
    skip: !gid,
  });

  useEffect(() => {
    // set value for multiple fields of the form
    if (groupData) {
      const {
        enable_botIsAssistant,
        botAssistantName,
        check_dndNotice,
        dndNoticeMessage,
        enable_noSSN,
        enable_checkProfanity,
        availability_enabled,
        availability_start,
        availability_end,
      } = groupData.group!;
      form.setValue("agentNameCustom", enable_botIsAssistant || false);
      form.setValue("agentName", botAssistantName ?? "");
      form.setValue("sendDNDReminder", check_dndNotice || false);
      form.setValue("dndReminderMessage", dndNoticeMessage ?? "");
      form.setValue("noSSN", enable_noSSN || false);
      form.setValue("profanityStop", enable_checkProfanity || false);
      form.setValue("sendOnlyOnAvailableTime", availability_enabled || false);
      form.setValue(
        "availabilityTimeStart",
        `${availability_start || "09"}:00`.padStart(5, "0")
      );
      form.setValue(
        "availabilityTimeEnd",
        `${availability_end || "17"}:00`.padStart(5, "0")
      );
    }
  }, [groupData]);

  const processSubmit = async (
    formData: z.infer<typeof generalSettingsSchema>
  ) => {
    // console.log(formData);
    /**
     * agentNameCustom: z.ZodBoolean;
    agentName: z.ZodString;
    sendDNDReminder: z.ZodBoolean;
    dndReminderMessage: z.ZodString;
    noSSN: z.ZodBoolean;
    profanityStop: z.ZodBoolean;
    sendOnlyOnAvailableTime: z.ZodBoolean;
    availabilityTimeStart: z.ZodString;
    availabilityTimeEnd: z.ZodString;
     */

    const hourStart = formData.availabilityTimeStart.split(":")[0];
    const hourEnd = formData.availabilityTimeEnd.split(":")[0];

    const result = await apolloClient.mutate({
      mutation: UpdateGroup,
      variables: {
        where: {
          id: gid,
        },
        data: {
          enable_botIsAssistant: formData.agentNameCustom,
          botAssistantName: formData.agentName,
          check_dndNotice: formData.sendDNDReminder,
          dndNoticeMessage: formData.dndReminderMessage,
          enable_noSSN: formData.noSSN,
          enable_checkProfanity: formData.profanityStop,
          availability_enabled: formData.sendOnlyOnAvailableTime,
          availability_start: Number(hourStart),
          availability_end: Number(hourEnd),
        },
      },
    });

    toast.success("Settings updated successfully");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(processSubmit)}
        className="flex px-8 flex-col items-center w-full py-8 mx-auto space-y-4"
      >
        <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
          <h3 className="font-bold">Customize Bot Name (Agent Name)</h3>
          <FormField
            control={form.control}
            name="agentNameCustom"
            render={({ field }) => (
              <FormItem className="w-full flex gap-x-2 items-center">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">Customize Bot Name</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("agentNameCustom") && (
            <>
              <FormField
                control={form.control}
                name="agentName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Bot Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Default: [agent first name] [agent last name]'s Assistant"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-xs text-black/80">
                You can use variables like [agent first name], [agent last
                name], [agent full name]
              </p>
            </>
          )}
        </div>
        <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
          <h3 className="font-bold">DND Settings</h3>
          <FormField
            control={form.control}
            name="sendDNDReminder"
            render={({ field }) => (
              <FormItem className="w-full flex gap-x-2 items-center">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">
                  Send DND Reminders on Footer
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("sendDNDReminder") && (
            <FormField
              control={form.control}
              name="dndReminderMessage"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>DND Reminder Message</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Default: Reply STOP to unsubscribe"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <p>
            <b>Note: GoHighLevel will automatically prevent sending messages</b>{" "}
            if User disabled messages by sending 'STOP'. User can re-enable and
            receive messages again by sending a 'START'.
          </p>
        </div>

        <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
          <h3 className="font-bold">Active Profiling</h3>
          <FormField
            control={form.control}
            name="profileBuilder"
            render={({ field }) => (
              <FormItem className="w-full flex gap-x-2 items-center">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">
                  Update GHL Profile Info based on conversation
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="activeSurvey"
            render={({ field }) => (
              <FormItem className="w-full flex gap-x-2 items-center">
                <FormControl className="">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">
                  Explicitly Ask for User's Information after ChatGPT Provides
                  an Insurance Plan (Check Custom Fields for the fields to be
                  extracted)
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
          <h3 className="font-bold">AI Behavior</h3>
          <FormField
            control={form.control}
            name="noSSN"
            render={({ field }) => (
              <FormItem className="w-full flex gap-x-2 items-center">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">
                  Never ask for SSN (Social Security Number)
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profanityStop"
            render={({ field }) => (
              <FormItem className="w-full flex gap-x-2 items-center">
                <FormControl className="">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">
                  Automatically stop conversation if profanity is detected
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
          <h3 className="font-bold">Messages Time Frame</h3>
          <FormField
            control={form.control}
            name="sendOnlyOnAvailableTime"
            render={({ field }) => (
              <FormItem className="w-full flex gap-x-2 items-center">
                <FormControl className="">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">
                  Don't send messages outside of the client's local working
                  hours. Queue them for the next available time.
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("sendOnlyOnAvailableTime") && (
            <div className="w-full flex flex-col">
              <label htmlFor="availabilityTimeStart">Working Hours Time</label>
              <div className="flex items-center gap-x-4">
                <Input
                  value={form.watch("availabilityTimeStart")}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    form.setValue("availabilityTimeStart", e.target.value);
                  }}
                  className="w-auto"
                  id="availabilityTimeStart"
                  placeholder="09:00"
                  type="time"
                />
                to
                <Input
                  value={form.watch("availabilityTimeEnd")}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    form.setValue("availabilityTimeEnd", e.target.value);
                  }}
                  className="w-auto"
                  id="availabilityTimeEnd"
                  placeholder="17:00"
                  type="time"
                />
              </div>
            </div>
          )}
          <p className="text-sm">This is an experimental feature</p>
          <p className="text-sm">
            You'll have to set the client's individual timezone so that we can
            send the message on the right schedule (or we will use the default
            sub acocunt timezone)
          </p>
        </div>
        <Button
          className="py-3 w-full text-white bg-primary rounded-xl"
          type="submit"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default GeneralSettingsPage;
