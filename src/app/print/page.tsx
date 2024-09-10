"use client";

import { fontSize14 } from "@common/font-size";
import { spacing24, spacing32, spacing4, spacing8 } from "@common/spacing";
import { Heading1, Heading5 } from "@common/typography/heading";
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
  PublishedApps,
  ZenaSummary,
  Mentoring,
} from "./components";

const List = styled.ul`
  margin: 0;
  font-size: ${fontSize14};
  list-style-type: "- ";

  & > * {
    margin-bottom: ${spacing8};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  padding-top: ${spacing8};
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
      <Heading1
        style={{
          paddingBottom: spacing4,
        }}
      >
        Jason Hamm
      </Heading1>
      <Contacts />
      <Grid>
        <Experience>
          <Heading5>Summary</Heading5>
          <hr />
          <List>
            <li>
              Full stack developer with 12 years of experience in{" "}
              <Bold>JavaScript</Bold>, <Bold>Typescript</Bold>, and the Front
              End ecosystem.
            </li>
            <li>
              Extensive experience working with <Bold>Java</Bold>; currently
              liking <Bold>Kotlin</Bold> a lot.
            </li>
            <li>
              Expertise in developing web applications using <Bold>React</Bold>,{" "}
              <Bold>NextJS</Bold>, and <Bold>GraphQL</Bold>.
            </li>
            <li>
              Skilled in building mobile applications with{" "}
              <Bold>React Native</Bold>, <Bold>Expo</Bold>, and{" "}
              <Bold>GraphQL</Bold>.
            </li>
            <li>
              Experienced leader invested in mentoring and guiding other
              developers.
            </li>
          </List>
          <Heading5 style={{ marginTop: spacing32 }}>Experience</Heading5>
          <hr />
          <Column>
            <ZenaSummary />
            <SwyfSummary />
            <AeonSummary />
            <ChurchSummary />
            <AvailitySummary />
            <Education />
            <PublishedApps />
            <Mentoring />
          </Column>
        </Experience>
        <Aside>
          <AsideColumn>
            <Strengths />
          </AsideColumn>
        </Aside>
      </Grid>
    </>
  );
}
