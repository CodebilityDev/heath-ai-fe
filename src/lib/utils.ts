import { z } from "zod";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function passwordValidator(password: string) {
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    return false;
  }

  const lowercaseRegex = /[a-z]/;
  if (!lowercaseRegex.test(password)) {
    return false;
  }

  const digitRegex = /\d/;
  if (!digitRegex.test(password)) {
    return false;
  }

  const symbolRegex = /[!@#$%^&*()_+\-=\[\]{}|;':"\\,.\/?]+/;
  if (!symbolRegex.test(password)) {
    return false;
  }
  return true;
}
