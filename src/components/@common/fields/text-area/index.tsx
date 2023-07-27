import { fontSize16 } from "@common/font-size";
import { spacing12, spacing16 } from "@common/spacing";
import styled from "styled-components";

export const TextArea = styled.textarea<{
  hasError?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme.colors.danger : props.theme.colors.text};
  border-radius: 4px;
  caret-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  display: block;
  font-size: ${fontSize16};
  padding: ${spacing12} ${spacing16};
  width: 100%;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.misc.codeFontFamily};

  :focus {
    outline-color: ${(props) => props.theme.colors.primary};
    outline-style: solid;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
