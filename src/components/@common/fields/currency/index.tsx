"use client";

import styled from "styled-components";

import { NumberFieldProps, NumberInput } from "../number";
import { spacing24, spacing8 } from "@common/spacing";
import { fontSize16 } from "@common/font-size";

const Container = styled.div`
  position: relative;
  display: grid;
`;

const StyledNumberInput = styled(NumberInput)`
  padding-left: ${spacing24};
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${spacing8};
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize16};
  line-height: ${fontSize16};
  height: ${fontSize16};
  margin: auto;
`;

export const CurrencyInput = ({ ...props }: NumberFieldProps) => {
  return (
    <Container>
      {/* @ts-ignore */}
      <StyledSpan>$</StyledSpan>
      <StyledNumberInput {...props} />
    </Container>
  );
};
