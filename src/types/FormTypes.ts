import { passwordValidator } from "@/lib/utils";
import z from "zod";

export const signInSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string()
      // .min(8, { message: "Password must be at least 8 characters" })
      .max(32, { message: "Password must be at most 32 characters" }),
  })
  .required();

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(32, { message: "Password must be at most 32 characters long" })
      .refine((value: string) => /[a-z]/.test(value), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((value: string) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value: string) => /\d/.test(value), {
        message: "Password must contain at least one digit",
      })
      .refine(
        (value: string) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value),
        {
          message: "Password must contain at least one special character",
        }
      ),
    confirmPassword: z.string().min(1, { message: "Required" }),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });
