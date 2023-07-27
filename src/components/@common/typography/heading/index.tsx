"use client";

import styled from "styled-components";
import {
  fontSize16,
  fontSize18,
  fontSize20,
  fontSize22,
  fontSize26,
  fontSize28,
  fontSize32,
  fontSize48,
} from "../../font-size";
import { breakWidth880 } from "@common/break-points";

export const Heading1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize32};
  line-height: 1.4;
  margin: 0;
  text-align: start;
  letter-spacing: -0.03em;
  font-weight: 600;

  @media screen and (min-width: ${breakWidth880}) {
    font-size: ${fontSize48};
  }
`;

export const Heading2 = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize28};
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  text-align: start;
  letter-spacing: -0.03em;

  @media screen and (min-width: ${breakWidth880}) {
    font-size: ${fontSize32};
  }
`;

export const Heading3 = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize22};
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  text-align: start;

  letter-spacing: -0.03em;

  @media screen and (min-width: ${breakWidth880}) {
    font-size: ${fontSize26};
  }
`;

export const Heading4 = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize20};
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  text-align: start;
`;

export const Heading5 = styled.h5`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize18};
  font-weight: 400;
  line-height: 1;
  margin: 0;
  text-align: start;
`;

export const Heading6 = styled.h6`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fontSize16};
  font-weight: 400;
  line-height: 1;
  margin: 0;
  text-align: start;
`;
