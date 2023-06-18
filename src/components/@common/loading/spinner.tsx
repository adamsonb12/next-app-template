"use client";

import styled from "styled-components";

interface SpinnerProps {
  size?: string;
  color?: string;
  thickness?: string;
}

const SpinnerContainer = styled.div<SpinnerProps>`
  position: relative;
  width: ${(props) => props.size ?? "80px"};
  height: ${(props) => props.size ?? "80px"};
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 80%;
    height: 80%;
    border: ${(props) => props.thickness ?? "8px"} solid
      ${(props) => props.color ?? props.theme.colors.white};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color ?? props.theme.colors.white}
      transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = (props: SpinnerProps) => {
  return (
    <SpinnerContainer {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerContainer>
  );
};
