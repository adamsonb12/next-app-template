"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/components/@common/theme";
import { StyledComponentsRegistry } from "@/lib/styled-component-registry";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};
