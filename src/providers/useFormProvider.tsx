import {
  analyticsSchema,
  brandingSchema,
  generalSettingsSchema,
  signInSchema,
  signUpSchema,
} from "@/types/FormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useFormProvider = () => {
  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const generalSettingsForm = useForm<z.infer<typeof generalSettingsSchema>>({
    resolver: zodResolver(generalSettingsSchema),
    defaultValues: {
      agentName: "",
      agentNameCustom: false,
      availabilityTimeEnd: "17:00:00",
      availabilityTimeStart: "09:00:00",
      sendDNDReminder: false,
      dndReminderMessage: "",
      noSSN: false,
      profanityStop: false,
      sendOnlyOnAvailableTime: false,
    },
  });

  const analyticsForm = useForm<z.infer<typeof analyticsSchema>>({
    resolver: zodResolver(analyticsSchema),
    defaultValues: {
      imageUrl: "",
      baseUrl: "https://www.healthsharpa.com/?_agent_id=mycaexpress",
      source: "",
      medium: "",
      campaigningName: "",
      language: "English",
    },
  });

  const brandingForm = useForm<z.infer<typeof brandingSchema>>({
    resolver: zodResolver(brandingSchema),
    defaultValues: {
      campaigningName: "",
      companyPhone: "",
    },
  });

  return {
    signInForm,
    signUpForm,
    generalSettingsForm,
    analyticsForm,
    brandingForm,
  };
};

export default useFormProvider;
