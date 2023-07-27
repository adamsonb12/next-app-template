import styled from "styled-components";
import { A11y } from "./a11y";
import { spacing12 } from "@common/spacing";

export const IconButton = styled(A11y)`
  border-radius: 50%;
  width: auto;
  height: auto;
  padding: ${spacing12};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  :hover,
  :active {
    opacity: 0.6;
  }
`;
