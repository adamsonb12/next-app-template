"use client";

import styled from "styled-components";

import { fontSize16 } from "../../font-size";
import { spacing8 } from "../../spacing";

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize16};
  font-weight: 400;
  line-height: 1.7;
  margin: 0;
  & strong,
  & b {
    font-weight: 900;
  }
  & a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
  }
  & em,
  & i {
    color: ${(props) => props.theme.colors.textSecondary};
  }
  & + & {
    margin-top: ${spacing8};
  }
`;
