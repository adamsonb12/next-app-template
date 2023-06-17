"use client";

import { fontSize16 } from "@common/font-size";
import { spacing12, spacing16 } from "@common/spacing";
import styled from "styled-components";

export const Select = styled.select`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.neutral};
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
`;
