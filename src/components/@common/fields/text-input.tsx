"use client";
import { fontSize16 } from "@common/font-size";
import { spacing12, spacing16, spacing4 } from "@common/spacing";
import React from "react";
import styled, { keyframes } from "styled-components";

export const TextInput = styled.input.attrs(() => ({ type: "text" }))<{
  hasError?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme.colors.danger : props.theme.colors.neutral};
  border-radius: 4px;
  caret-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  display: block;
  font-size: ${fontSize16};
  padding: ${spacing12} ${spacing16};
  width: 100%;
  box-sizing: border-box;

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.disabled};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;

const kf = keyframes`
  from {
    transform: translateX(-100%);
  }
  to   {
    transform: translateX(100%);
  }
`;

const LoadingAnimation = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border-radius: ${spacing4};
  z-index: 100;
  background-image: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.33),
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.primary},
    rgba(255, 255, 255, 0.33)
  );
  animation: 2000ms ${kf} ease-in-out infinite;
`;

const LoadingInputContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
`;

const LoadingInput = styled.input.attrs(() => ({
  type: "text",
  disabled: true,
}))<{
  hasError?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme.colors.danger : props.theme.colors.neutral};
  border-radius: 4px;
  caret-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  display: block;
  font-size: ${fontSize16};
  padding: ${spacing12} ${spacing16};
  width: 100%;
  box-sizing: border-box;

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.disabled};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;

export const LoadingTextInput = (
  props: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "disabled">
) => {
  return (
    <LoadingInputContainer>
      <LoadingInput {...props} />
      <LoadingAnimation />
    </LoadingInputContainer>
  );
};
