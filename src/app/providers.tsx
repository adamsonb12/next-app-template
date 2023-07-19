"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { StyledComponentsRegistry } from "@/lib/styled-component-registry";
import { theme } from "@/providers/theme";
import { ApolloWrapper } from "@/lib/apollo-provider";
import { LocalizationProvider } from "@/providers/localization";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <LocalizationProvider>
            <ApolloWrapper>{children}</ApolloWrapper>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};
