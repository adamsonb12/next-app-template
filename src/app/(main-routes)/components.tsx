"use client";

import { fontSize14 } from "@common/font-size";
import Icon from "@mdi/react";
import { mdiCheck, mdiEmail, mdiLink, mdiPhone } from "@mdi/js";
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
import styled, { useTheme } from "styled-components";

export const Experience = styled.div``;

const SmallParagraph = styled(Paragraph)`
  font-size: ${fontSize14};
`;

export const Muted = styled.div`
  font-size: ${fontSize14};
  letter-spacing: -0.015em;
  color: ${(props) => props.theme.colors.muted};
`;

const NoWrapLabel = styled(Label)`
  white-space: nowrap;
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

const StrengthContainer = styled.div`
  padding: 1em;
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
      <Paragraph>
        Built a banking platform with thousands of signups per week during test
        launch.
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Created a Quickbooks (QBO) integration allowing Zena to sync
            expenses and receipts with Intuit.
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
      <Paragraph>
        Built a banking platform with thousands of signups per week during test
        launch.
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Architected and implemented a fintech app for both iOS and Android
            using React Native, Expo, and GraphQL.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Delivered a complete MVP after 7 weeks with more functionality than
            originally requested.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Created a NextJs app for marketing and allow users to sign up to the
            mobile app.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Added functionality in the Elixir / Phoenix backend to calculate
            customer rewards.
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
      <Paragraph>
        Team lead shipping app to search large amounts of commercial real estate
        data.
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Helped divide monolith into multiple Java / Kotlin / TypeScript
            microservices to allow higher velocity.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Created GRPC interfaces to communicate from server to Front End app.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Maintained Cypress tests to validate functionality
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Hands-on experience with Amazon Web Services (AWS) in deploying and
            managing S3 buckets and EC2 instances
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Lead team of engineers working with Product Manager to help
            determine direction of product to allow for quickest revenue.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Created searches and visualizations with large amounts of geo
            spatial data.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Shipped features allowing the user to see large amounts of real
            estate and financial data.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Transitioned web app to NextJs / Typescript consuming data from
            GraphQL server.
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
      <Paragraph>
        Team lead delivering app to manage church finances for 92% of currencies
        and countries worldwide.
      </Paragraph>
      <List>
        <li>
          <SmallParagraph>
            Promoted to team lead over 2 front end and 3 back end developers .
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Reorganized development process, increasing throughput and
            management satisfaction.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Update API REST services to GraphQL to facilitate development and
            increase velocity.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Initiate the transition from Java to Kotlin.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Upgrade front end of finance app to Apollo to remove complexity.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Worked on multiple apps converting from Angular to React.
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
            Initiated Angular development in the Jacksonville FL office.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Created REST services in Java to support Angular/Backbone apps.
          </SmallParagraph>
        </li>
        <li>
          <SmallParagraph>
            Maintained Ruby on Rails app to show status of all projects in the
            company.
          </SmallParagraph>
        </li>
      </List>
    </Column>
  );
};

export const Strengths = () => {
  const { colors } = useTheme();
  return (
    <div>
      <Heading5>Skills</Heading5>
      <hr />
      <StrengthContainer>
        <SidebarColumn>
          <Row>
            <LabelWrapper>
              <Label>JavaScript</Label>
            </LabelWrapper>
            <LabelWrapper>
              <Label>TypeScript</Label>
            </LabelWrapper>
          </Row>
          <Row>
            <LabelWrapper>
              <Label>Java</Label>
            </LabelWrapper>
            <LabelWrapper>
              <Label>Kotlin</Label>
            </LabelWrapper>
          </Row>
          <Row>
            <LabelWrapper>
              <Label>GraphQL</Label>
            </LabelWrapper>
            <LabelWrapper>
              <Label>NextJs</Label>
            </LabelWrapper>
          </Row>
          <Row>
            <LabelWrapper>
              <Label>Prisma</Label>
            </LabelWrapper>
            <LabelWrapper>
              <Label>Postgres</Label>
            </LabelWrapper>
          </Row>
          <Row>
            <LabelWrapper>
              <Label>Expo</Label>
            </LabelWrapper>
            <LabelWrapper>
              <NoWrapLabel>React Native</NoWrapLabel>
            </LabelWrapper>
          </Row>
          <Row>
            <LabelWrapper>
              <Label>React</Label>
            </LabelWrapper>
            <LabelWrapper>
              <NoWrapLabel>Styled Components</NoWrapLabel>
            </LabelWrapper>
          </Row>
        </SidebarColumn>
      </StrengthContainer>
    </div>
  );
};

const ContactRow = styled.div`
  display: flex;
  gap: ${spacing8};
`;

export const Contacts = () => {
  const { colors } = useTheme();
  return (
    <div>
      <Heading5>Contact</Heading5>
      <hr />
      <SidebarColumn>
        <ContactRow>
          <Icon path={mdiEmail} color={colors.muted} size={"5%"} />
          <Muted>jasonhamm.me@gmail.com</Muted>
        </ContactRow>
        <ContactRow>
          <Icon path={mdiPhone} color={colors.muted} size={"5%"} />
          <Muted>(904) 728-4799</Muted>
        </ContactRow>
        <ContactRow>
          <Icon path={mdiLink} color={colors.muted} size={"5%"} />
          <Muted>https://github.com/mjhamm75</Muted>
        </ContactRow>
        <ContactRow>
          <Icon path={mdiLink} color={colors.muted} size={"5%"} />
          <Muted>https://www.linkedin.com/in/m-jason-hamm</Muted>
        </ContactRow>
      </SidebarColumn>
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
      <Paragraph>Bachelor of Science - Computer Science</Paragraph>
    </div>
  );
};
