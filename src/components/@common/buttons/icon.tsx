import styled from "styled-components";
import { A11y } from "./a11y";
import { spacing12, spacing8 } from "@common/spacing";

export const IconButton = styled(A11y)`
  border-radius: 50%;
  width: auto;
  height: auto;
  padding: ${spacing8};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  :hover,
  :active {
    background-color: ${(props) => props.theme.colors.neutral};
  }
`;
