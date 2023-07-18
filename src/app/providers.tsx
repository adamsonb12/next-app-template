"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { StyledComponentsRegistry } from "@/lib/styled-component-registry";
import { theme } from "@/providers/theme";
import { ApolloWrapper } from "@/lib/apollo-provider";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <ApolloWrapper>{children}</ApolloWrapper>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};
