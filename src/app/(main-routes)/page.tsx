"use client";

import { LinkButton } from "@common/buttons/link";
import { fontSize20, fontSize22 } from "@common/font-size";
import { spacing16, spacing4 } from "@common/spacing";
import { Heading1 } from "@common/typography/heading";
import { Paragraph } from "@common/typography/paragraph";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import styled, { useTheme } from "styled-components";

const Container = styled.section`
  display: grid;
  gap: ${spacing16};
  align-items: flex-start;
`;

const Subtitle = styled(Paragraph)`
  font-size: ${fontSize20};
  letter-spacing: -0.015em;
`;

// @ts-ignore
const StyledLink = styled(Link)`
  text-decoration: none;
  width: max-content;
`;

const CallToAction = styled(LinkButton)`
  padding: 0;
  width: max-content;
  font-weight: 500;
  letter-spacing: -0.008em;
  font-size: ${fontSize22};
  gap: ${spacing4};
`;

export default function RootPage() {
  const { colors } = useTheme();

  return (
    <Container>
      <Heading1>Next App Template</Heading1>
      <Subtitle>To quote our holy Emperor Palpatine,</Subtitle>
      <StyledLink href="/cool-route">
        <CallToAction>
          DO IT
          <Icon path={mdiArrowRight} size={1} color={colors.primary} />
        </CallToAction>
      </StyledLink>
    </Container>
  );
}
