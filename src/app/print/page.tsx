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
  Skills,
  Contacts,
  Education,
  PublishedApps,
  ZenaSummary,
  Mentoring,
} from "./components";
import { Paragraph } from "@common/typography/paragraph";

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
      <Experience>
        <Heading5>Summary</Heading5>
        <hr />
        <Paragraph>
          I am a full-stack developer with 12 years of experience, focused on
          team velocity, delivering, and user-focused solutions. Specializing in{" "}
          <Bold>React</Bold>, <Bold>Next.js</Bold>, <Bold>Expo</Bold>, and{" "}
          <Bold>GraphQL</Bold> to create seamless web and mobile experiences. I
          excel at collaborating with product leaders to refine complex ideas
          into core features. I have been involved in three startups,
          successfully guiding three distinct products through to production.
          With a robust background in backend development using{" "}
          <Bold>Node</Bold>, <Bold>Java</Bold>, and <Bold>Kotlin</Bold>, I bring
          a comprehensive skill set to every project. Additionally, as a mentor,
          I have successfully guided five developers from novice to full-time
          employment.
        </Paragraph>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <Skills />
        </div>
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
    </>
  );
}
