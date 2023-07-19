import { fontSize16 } from "@common/font-size";
import { spacing12, spacing16 } from "@common/spacing";
import styled from "styled-components";

export const TextArea = styled.textarea<{
  hasError?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme.colors.danger : props.theme.colors.neutral};
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

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
