"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { A11y } from "./a11y";
import { ButtonLoading } from "./botton-loading";
import { spacing4, spacing48 } from "@common/spacing";

const StyledButton = styled(A11y)`
  background-color: ${(props) => props.theme.colors.danger};
  border-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.text};

  :hover {
    filter: brightness(0.85);
  }

  position: relative;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const DangerButton = ({ loading, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} disabled={!!loading}>
      {children}
      {loading && <ButtonLoading />}
    </StyledButton>
  );
};

const LoadingButtonContainer = styled.div`
  width: 100%;
  height: ${spacing48};
  background-color: ${(props) => props.theme.colors.danger};
  border-radius: ${spacing4};
  position: relative;
  overflow: hidden;
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
  width: 100%;
  height: 100%;
  border-radius: ${spacing4};
  z-index: 100;
  background-image: linear-gradient(
    270deg,
    ${(props) => props.theme.colors.danger},
    rgba(255, 255, 255, 0.33),
    rgba(255, 255, 255, 0.33),
    ${(props) => props.theme.colors.danger}
  );
  animation: 2000ms ${kf} ease-in-out infinite;
`;

export const DangerButtonLoading = () => {
  return (
    <LoadingButtonContainer>
      <LoadingAnimation />
    </LoadingButtonContainer>
  );
};
