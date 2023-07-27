"use client";

import styled, { keyframes, useTheme } from "styled-components";
import { A11y } from "./a11y";
import { spacing4, spacing48 } from "@common/spacing";
import { ButtonLoading } from "./botton-loading";

export const StyledButton = styled(A11y)`
  background-color: ${(props) => props.theme.colors.text};
  border-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.primary};

  :hover {
    filter: brightness(0.85);
  }

  :disabled {
    opacity: 0.69;
  }

  position: relative;
`;

const LoadingButtonContainer = styled.div`
  width: 100%;
  height: ${spacing48};
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${spacing4};
  position: relative;
  overflow: hidden;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const SecondaryButton = ({
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <StyledButton {...props} disabled={!!loading || disabled}>
      {children}
      {loading && <ButtonLoading />}
    </StyledButton>
  );
};

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
    rgba(255, 255, 255, 0.33),
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.primary},
    rgba(255, 255, 255, 0.33)
  );
  animation: 2000ms ${kf} ease-in-out infinite;
`;

export const SecondaryButtonLoading = () => {
  return (
    <LoadingButtonContainer>
      <LoadingAnimation />
    </LoadingButtonContainer>
  );
};
