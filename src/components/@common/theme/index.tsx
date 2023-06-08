"use client";

import { DefaultTheme } from "styled-components";

import { electricThemeColors } from "./electric";
import {
  defaultBreakPoints,
  defaultFontSize,
  defaultSpacing,
} from "./theme-defaults";

export const theme: DefaultTheme = {
  colors: electricThemeColors,
  fontSize: defaultFontSize,
  breakPoints: defaultBreakPoints,
  spacing: defaultSpacing,
};
