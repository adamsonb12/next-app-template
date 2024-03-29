"use client";
import styled from "styled-components";
import { spacing12, spacing24, spacing8 } from "../spacing";
import { fontSize16 } from "../font-size";

export const A11y = styled.button.attrs((props) => ({
  type: props.type || "button",
}))<{
  loading?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.loading ? "not-allowed" : "pointer")};
  border-radius: ${spacing12};
  padding: ${spacing12} ${spacing24};
  margin: 0;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
  font-weight: 500;
  font-size: ${fontSize16};
  line-height: 1.75;
  letter-spacing: 0.075em;

  :focus {
    outline-color: ${(props) => props.theme.colors.primary};
    outline-style: solid;
  }

  /* for transitions on hover */
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
