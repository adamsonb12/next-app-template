"use client";

import styled, { useTheme } from "styled-components";
import { Spinner } from "@common/loading/spinner";
import { spacing4, spacing48 } from "../spacing";

export const ButtonLoadingContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLoading = ({ color }: { color?: string }) => {
  const { colors } = useTheme();

  return (
    <ButtonLoadingContainer>
      <Spinner
        size={spacing48}
        thickness={spacing4}
        color={color ?? colors.primary}
      />
    </ButtonLoadingContainer>
  );
};
