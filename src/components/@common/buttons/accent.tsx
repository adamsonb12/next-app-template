"use client";

import styled from "styled-components";
import { A11y } from "./a11y";

export const AccentButton = styled(A11y)`
  background-color: ${(props) => props.theme.colors.accent};
  border-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.textLight};
`;
