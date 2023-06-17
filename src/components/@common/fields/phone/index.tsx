"use client";

import { InputHTMLAttributes } from "react";
import { TextInput } from "../text-input";

// TODO => restrict input with regex
export const PhoneNumberInput = (
  props: Omit<InputHTMLAttributes<HTMLInputElement>, "max" | "type"> & {
    hasError?: boolean;
  }
) => {
  return (
    <TextInput maxLength={160} name="phone" autoComplete="tel" {...props} />
  );
};
