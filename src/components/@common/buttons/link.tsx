"use client";

import styled from "styled-components";

import { A11y } from "./a11y";

export const LinkButton = styled(A11y)`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.link};
`;
