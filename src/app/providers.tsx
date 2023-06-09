"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { StyledComponentsRegistry } from "@/lib/styled-component-registry";
import { theme } from "@/providers/theme";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};
