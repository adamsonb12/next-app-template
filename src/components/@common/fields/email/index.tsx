"use client";

import { InputHTMLAttributes } from "react";
import { TextInput } from "../text-input";

export const EmailInput = (
  props: Omit<InputHTMLAttributes<HTMLInputElement>, "max" | "type"> & {
    hasError?: boolean;
  }
) => {
  return (
    <TextInput maxLength={160} name="email" autoComplete="email" {...props} />
  );
};
