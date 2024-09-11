"use client";

import { fontSize10, fontSize12, fontSize14 } from "@common/font-size";
import {
  spacing16,
  spacing2,
  spacing20,
  spacing24,
  spacing8,
} from "@common/spacing";
import { Heading4, Heading5 } from "@common/typography/heading";
import { Label } from "@common/typography/label";
import { Paragraph } from "@common/typography/paragraph";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export const Experience = styled.div``;

const SmallParagraph = styled(Paragraph)`
  font-size: ${fontSize10};
`;

export const Muted = styled.div`
  font-size: ${fontSize14};
  letter-spacing: -0.015em;
  color: ${(props) => props.theme.colors.muted};
`;

const Row = styled.div`
  display: flex;
  gap: ${spacing24};
  align-items: center;
`;

const LabelWrapper = styled.div`
  width: 75px;
`;

const DateColumn = styled.div`
  margin-left: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing2};
`;

const SidebarColumn = styled.div`
  margin-top: ${spacing16};
  display: flex;
  flex-direction: column;
  gap: ${spacing20};
`;
const List = styled.ul`
  margin: 0;
  list-style-type: "- ";
`;

export const ZenaSummary = () => {
  return (
    <Column>
      <Row>
        <Image width={40} height={40} src={"/zena.png"} alt="Zena" />
        <Column>
          <Heading4>Senior Software Engineer</Heading4>
          <Row>
            <Label>Zena - San Francisco, CA</Label>
            <Label>0 to 1</Label>
          </Row>
        </Column>
        <DateColumn>
          <Muted>2023 - 2024</Muted>
        </DateColumn>
      </Row>
      <Paragraph
        style={{
          fontSize: fontSize12,
        }}
      >
        Platform of financial tools for main street business&#39;
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Managed many complex integrations, like Quickbooks, Unit and Stripe.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Utilized OpenSearch for efficient transaction management and
            integrated Stripe for subscriptions, payment processing, and card
            issuing.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>Launched to Beta in 3.5 months</SmallParagraph>
        </li>
      </List>
    </Column>
  );
};

export const SwyfSummary = () => {
  return (
    <Column>
      <Row>
        <Image width={40} height={40} src={"/swyf.png"} alt="Swyf" />
        <Column>
          <Heading4>Senior Software Engineer</Heading4>
          <Row>
            <Label>Swyf - South Jordan UT</Label>
            <Label>0 to 1</Label>
          </Row>
        </Column>
        <DateColumn>
          <Muted>2022 - 2023</Muted>
        </DateColumn>
      </Row>
      <Paragraph
        style={{
          fontSize: fontSize12,
        }}
      >
        Built a banking platform with thousands of signups per week during test
        launch.
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Architected and implemented a fintech application for both iOS and
            Android using React Native, Expo, and GraphQL.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Delivered a complete MVP after 7 weeks exceeding the original scope
            of requested features.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Developed a Next.js marketing platform to drive user engagement and
            facilitate mobile app sign-ups.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Enhanced backend functionality in Elixir/Phoenix to calculate
            customer rewards, improving the overall user experience.
          </SmallParagraph>
        </li>
      </List>
    </Column>
  );
};

export const AeonSummary = () => {
  return (
    <Column>
      <Row>
        <Image width={40} height={40} src={"/aeon-logo.jpg"} alt="Swyf" />
        <Column>
          <Heading4>Senior Software Engineer</Heading4>
          <Row>
            <Label>AeonAI - Lehi UT</Label>
            <Label>0 to 1</Label>
          </Row>
        </Column>
        <DateColumn>
          <Muted>2020 - 2022</Muted>
        </DateColumn>
      </Row>
      <Paragraph
        style={{
          fontSize: fontSize12,
        }}
      >
        Team lead shipping app to search large amounts of commercial real estate
        data.
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Led the migration of a monolithic architecture to multiple Java,
            Kotlin, and TypeScript microservices, improving development
            velocity.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Developed GRPC interfaces to enable seamless communication between
            the server and Front End application.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Maintained Cypress tests to ensure consistent functionality across
            features.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Hands-on experience with AWS, including deploying and managing S3
            buckets and EC2 instances.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Led a team of engineers in collaboration with the Product Manager to
            steer product direction, optimizing for rapid revenue growth.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Created complex searches and visualizations handling large volumes
            of geo-spatial data.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Delivered features that enabled users to interact with extensive
            real estate and financial data.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Transitioned the web app to Next.js and TypeScript, leveraging a
            GraphQL server for data consumption.
          </SmallParagraph>
        </li>
      </List>
    </Column>
  );
};

export const ChurchSummary = () => {
  return (
    <Column>
      <Row>
        <Image
          width={70}
          height={70}
          src={"/church.jpeg"}
          alt="Swyf"
          style={{ marginLeft: -12 }}
        />
        <Column style={{ marginLeft: -20 }}>
          <Heading4>Developer V</Heading4>
          <Row>
            <Label>
              The Church of Jesus Christ of Latter-day Saints - Riverton UT
            </Label>
          </Row>
        </Column>
        <DateColumn>
          <Muted>2014 - 2022</Muted>
        </DateColumn>
      </Row>
      <Paragraph
        style={{
          fontSize: fontSize12,
        }}
      >
        Team lead delivering app to manage church finances for 92% of currencies
        and countries worldwide.
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Promoted to Team Lead, overseeing a team of 2 front-end and 3
            back-end developers.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Reorganized the development process, significantly improving
            throughput and increasing management satisfaction.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Upgraded REST APIs to GraphQL, streamlining development and boosting
            team velocity.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Led the transition from Java to Kotlin, modernizing the codebase and
            improving efficiency.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Upgraded the front end of a finance app to Apollo, reducing
            complexity and enhancing maintainability.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Converted multiple applications from Angular to React, improving
            performance and developer experience.
          </SmallParagraph>
        </li>
      </List>
    </Column>
  );
};

export const AvailitySummary = () => {
  return (
    <Column>
      <Row>
        <Image width={40} height={40} src={"/availity.jpeg"} alt="Swyf" />
        <Column>
          <Heading4>Developer I</Heading4>
          <Row>
            <Label>Availity, LLC - Jacksonville FL</Label>
          </Row>
        </Column>
        <DateColumn>
          <Muted>2011 - 2014</Muted>
        </DateColumn>
      </Row>
      <List>
        <li>
          <SmallParagraph>
            Initiated Angular development in the Jacksonville, FL office,
            leading the adoption of modern front-end practices.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Developed RESTful services in Java to support Angular and Backbone
            applications, enhancing backend functionality.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Managed and maintained a Ruby on Rails application to provide
            real-time status updates for all company projects.
          </SmallParagraph>
        </li>
      </List>
    </Column>
  );
};

const PageBreak = styled.div`
  @media print {
    page-break-after: always;
  }
`;

export const Strengths = () => {
  return (
    <div>
      <Heading5>Skills</Heading5>
      <hr />
      <SidebarColumn>
        <Label>JavaScript</Label>
        <Label>TypeScript</Label>
        <Label>Java</Label>
        <Label>Kotlin</Label>
        <Label>GraphQL</Label>
        <Label>Nexus (GQL)</Label>
        <Label>GRPC</Label>
        <Label>NextJs</Label>
        <Label>Prisma</Label>
        <Label>Postgres</Label>
        <Label>Expo</Label>
        <Label>React Native</Label>
        <Label>React</Label>
        <Label>Styled Components</Label>
      </SidebarColumn>
    </div>
  );
};

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing8};
`;

const MaxWidth = styled.div`
  max-width: 350px;
`;

const ContactsRow = styled.div`
  display: flex;
  gap: 12px;
`;

const Pipe = styled.div`
  border-right: solid 1px ${(props) => props.theme.colors.muted};
`;

export const Contacts = () => {
  return (
    <div
      style={{
        marginTop: "-8px",
        marginBottom: "24px",
      }}
    >
      <ContactsRow>
        <ContactRow>
          {/* <Icon path={mdiEmail} color={colors.muted} /> */}
          <Muted>jasonhamm.me@gmail.com</Muted>
        </ContactRow>
        <Pipe />
        <ContactRow>
          {/* <Icon path={mdiLink} color={colors.muted} /> */}
          <MaxWidth>
            <Muted>https://www.linkedin.com/in/m-jason-hamm</Muted>
          </MaxWidth>
        </ContactRow>
      </ContactsRow>
    </div>
  );
};

export const Education = () => {
  return (
    <div>
      <Heading5>Education</Heading5>
      <hr />
      <Heading4>Armstrong Atlantic University</Heading4>
      <Muted>Savannah, GA</Muted>
      <Paragraph
        style={{
          fontSize: fontSize12,
        }}
      >
        Bachelor of Science - Computer Science
      </Paragraph>
    </div>
  );
};

const MobileAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppStoreLink = styled.div`
  font-size: ${fontSize14};
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

export const PublishedApps = () => {
  return (
    <div>
      <Heading5>Published Mobile App</Heading5>
      <hr />
      <Heading4>
        <MobileAppWrapper>
          <div
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <div>Who&#39;s In</div>
            <div>-</div>
            <AppStoreLink>
              <Link href="https://www.whosin.games/">Link</Link>
            </AppStoreLink>
          </div>
          <Paragraph>
            <List>
              <li
                style={{
                  fontSize: fontSize12,
                }}
              >
                Organize and oversee pickup basketball games.
              </li>
              <li
                style={{
                  fontSize: fontSize12,
                }}
              >
                Notify participants about upcoming games.
              </li>
              <li
                style={{
                  fontSize: fontSize12,
                }}
              >
                Update users with any changes to the status of games.
              </li>
            </List>
          </Paragraph>
        </MobileAppWrapper>
      </Heading4>
    </div>
  );
};

export const Mentoring = () => {
  return (
    <div>
      <Heading5>Mentoring</Heading5>
      <hr />
      <Heading4>
        <MobileAppWrapper>
          <Paragraph>
            <List>
              <li
                style={{
                  fontSize: fontSize12,
                }}
              >
                Guided two developers from the Road 2 Hire program (Charlotte,
                NC) through mentorship until securing full-time employment
                (2022).
              </li>
              <li
                style={{
                  fontSize: fontSize12,
                }}
              >
                Mentored two developers from DevMountain (Salt Lake City, UT)
                through to successful job placement (2018, 2023).
              </li>
              <li
                style={{
                  fontSize: fontSize12,
                }}
              >
                Provided mentorship to a self-taught developer (Atlanta, GA),
                supporting them until they secured employment (2019).
              </li>
            </List>
          </Paragraph>
        </MobileAppWrapper>
      </Heading4>
    </div>
  );
};
