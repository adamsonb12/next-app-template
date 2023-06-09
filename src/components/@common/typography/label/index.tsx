"use client";

import styled from "styled-components";
import { fontSize14 } from "../../font-size";

export const Label = styled.label`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize14};
  cursor: pointer;
  font-weight: 300;
`;
