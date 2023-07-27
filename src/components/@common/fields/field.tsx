"use client";

import { fontSize12, fontSize14 } from "@common/font-size";
import { spacing8 } from "@common/spacing";
import { Paragraph } from "@common/typography/paragraph";
import { ReactNode } from "react";
import styled from "styled-components";

export interface FieldProps {
  children: ReactNode;
  label?: string;
  clarifier?: string;
  errorMessage?: string;
}

export const Field = ({
  children,
  label,
  clarifier,
  errorMessage,
  ...props
}: FieldProps) => {
  return (
    <FieldWrapper {...props} padTheBottom={!clarifier && !errorMessage}>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
      {clarifier && !errorMessage && (
        <FieldClarifier>{`*${clarifier}`}</FieldClarifier>
      )}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </FieldWrapper>
  );
};

export const FieldWrapper = styled.div<{
  padTheBottom?: boolean;
}>`
  display: grid;
  width: 100%;
`;

export const FieldError = styled(Paragraph)`
  color: ${(props) => props.theme.colors.danger};
  margin-top: ${spacing8};
  text-align: center;
  font-size: ${fontSize12};
`;

export const FieldLabel = styled(Paragraph)`
  margin-left: ${spacing8};
  font-style: italic;
  font-size: ${fontSize14};
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const FieldClarifier = styled(Paragraph)`
  margin-left: ${spacing8};
  font-size: ${fontSize12};
  color: ${(props) => props.theme.colors.textSecondary};
`;
