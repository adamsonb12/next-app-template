"use client";

import { fontSize16 } from "@common/font-size";
import styled from "styled-components";

export const Select = styled.select`
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 4px;
  caret-color: ${(props) => props.theme.colors.textSecondary};
  color: ${(props) => props.theme.colors.textSecondary};
  display: block;
  font-size: ${fontSize16};
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline-color: ${(props) => props.theme.colors.primary};
    outline-style: solid;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;
