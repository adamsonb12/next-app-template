"use client";

import { fontSize16 } from "@common/font-size";
import styled from "styled-components";

export const Main = styled.main`
  font-size: ${fontSize16};
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
`;
