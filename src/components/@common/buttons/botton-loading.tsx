"use client";

import styled from "styled-components";
import { Spinner } from "@common/loading/spinner";
import { spacing4, spacing48 } from "../spacing";

export const ButtonLoadingContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.backdrop};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLoading = () => {
  return (
    <ButtonLoadingContainer>
      <Spinner size={spacing48} thickness={spacing4} />
    </ButtonLoadingContainer>
  );
};
