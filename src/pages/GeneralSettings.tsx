import useFormProvider from "@/providers/useFormProvider";
import { generalSettingsSchema } from "@/types/FormTypes";
import React from "react";
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

const GeneralSettingsPage = () => {
  const [availableTime, setAvailableTime] = React.useState({
    from: "",
    to: "",
  });

  const { generalSettingsForm: form } = useFormProvider();

  React.useEffect(() => {
    if (availableTime.from && availableTime.to) {
      console.log(availableTime.from);
      const ISOTimestampFrom = converTimeToISO(availableTime.from);
      const ISOTimestampTo = converTimeToISO(availableTime.to);
      console.log(ISOTimestampFrom);
      form.setValue(
        "availabilityTime",
        `${ISOTimestampFrom} /to/ ${ISOTimestampTo}`
      );
    }
  }, [availableTime.from, availableTime.to]);

  const processSubmit = async (
    formData: z.infer<typeof generalSettingsSchema>
  ) => {
    console.log(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(processSubmit)}
        className="flex px-8 md:px-0 flex-col items-center w-full max-w-2xl py-8 mx-auto space-y-4"
      >
        <FormField
          control={form.control}
          name="agentName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Agent Name</FormLabel>
              <FormControl>
                <Input placeholder="eg. Bruce Banner" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dnd"
          render={({ field }) => (
            <FormItem className="w-full flex gap-x-2 items-center">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="!mt-0">Stop Testing if DND</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ssn"
          render={({ field }) => (
            <FormItem className="w-full flex gap-x-2 items-center">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="!mt-0">Stop Asking for SSN</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profanity"
          render={({ field }) => (
            <FormItem className="w-full flex gap-x-2 items-center">
              <FormControl className="">
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="!mt-0">
                Stop Testing if Received Profanity
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex flex-col">
          <label htmlFor="timeAvailable">Time Available</label>
          <div className="flex items-center gap-x-4">
            <Input
              value={availableTime.from}
              onChange={(e) =>
                setAvailableTime({ ...availableTime, from: e.target.value })
              }
              className="w-auto"
              id="timeAvailable"
              type="time"
            />
            to
            <Input
              value={availableTime.to}
              onChange={(e) =>
                setAvailableTime({ ...availableTime, to: e.target.value })
              }
              className="w-auto"
              id="timeAvailable"
              type="time"
            />
          </div>
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
