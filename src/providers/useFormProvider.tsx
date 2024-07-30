import {
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
      dnd: false,
      ssn: false,
      profanity: false,
      availabilityTime: "",
    },
  });

  return {
    signInForm,
    signUpForm,
    generalSettingsForm,
  };
};

export default useFormProvider;
