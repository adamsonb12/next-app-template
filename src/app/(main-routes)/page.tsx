"use client";

import { fontSize24 } from "@common/font-size";
import { spacing12, spacing24, spacing32 } from "@common/spacing";
import { Heading1, Heading5 } from "@common/typography/heading";
import { Paragraph } from "@common/typography/paragraph";
import styled from "styled-components";
import {
  SwyfSummary,
  Experience,
  AeonSummary,
  ChurchSummary,
  AvailitySummary,
  Strengths,
  Contacts,
  Education,
  ZenaSummary,
} from "./components";
import { PublishedApps } from "../print/components";

const Subtitle = styled(Paragraph)`
  font-size: ${fontSize24};
  letter-spacing: -0.015em;
  margin-top: -${spacing12};
  margin-bottom: ${spacing12};
  color: ${(props) => props.theme.colors.danger};
`;

const Row = styled.div`
  display: flex;
  gap: ${spacing24};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 33.334%;
  padding-top: ${spacing32};
  gap: ${spacing32};
`;
const Bold = styled.span`
  font-weight: 500;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing24};
`;

const AsideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing32};
`;

const Aside = styled.div``;

export default function RootPage() {
  return (
    <>
      <Heading1>Jason Hamm</Heading1>
      <Subtitle>Senior Software Engineer - Typescript</Subtitle>
      <Grid>
        <Experience>
          <Heading5>Summary</Heading5>
          <hr />
          <Paragraph>
            I am a full stack developer with a decade of experience in{" "}
            <Bold>JavaScript</Bold>, <Bold>Typescript</Bold> and the entire
            Front End ecosystem. I have extensive experience working in{" "}
            <Bold>Java</Bold>, although my focus has shifted to{" "}
            <Bold>Kotlin</Bold>. I specialize in creating apps using{" "}
            <Bold>React</Bold>, <Bold>NextJs</Bold>, <Bold>GraphQL</Bold> for
            the web and <Bold>React Native</Bold>, <Bold>Expo</Bold>, and{" "}
            <Bold>GraphQL</Bold> for mobile.
          </Paragraph>
          <Heading5 style={{ marginTop: spacing32 }}>Experience</Heading5>
          <hr />
          <Column>
            <ZenaSummary />
            <SwyfSummary />
            <AeonSummary />
            <ChurchSummary />
            <AvailitySummary />
          </Column>
        </Experience>
        <Aside>
          <AsideColumn>
            <Contacts />
            <Strengths />
            <Education />
            <PublishedApps />
          </AsideColumn>
        </Aside>
      </Grid>
    </>
  );
}
