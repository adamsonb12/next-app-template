"use client";

import { useCountdown } from "@common/countdown";
import { DatePicker } from "@common/fields/date";
import { spacing16 } from "@common/spacing";
import { Heading1 } from "@common/typography/heading";
import { Paragraph } from "@common/typography/paragraph";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: ${spacing16};
`;

const CountDownContainer = styled.div`
  display: flex;
  gap: ${spacing16};
`;

const SegmentContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
`;

export default function CountdownPage() {
  const [date, setDate] = useState<null | Date>(null);
  const { seconds, minutes, hours, days } = useCountdown(date || new Date());

  return (
    <Container>
      <DatePicker date={date} onChange={(newDate) => setDate(newDate)} />

      <CountDownContainer>
        <SegmentContainer>
          <Heading1>{days}</Heading1>
          <Paragraph>Days</Paragraph>
        </SegmentContainer>
        <SegmentContainer>
          <Heading1>{hours}</Heading1>
          <Paragraph>Hours</Paragraph>
        </SegmentContainer>
        <SegmentContainer>
          <Heading1>{minutes}</Heading1>
          <Paragraph>Minutes</Paragraph>
        </SegmentContainer>
        <SegmentContainer>
          <Heading1>{seconds}</Heading1>
          <Paragraph>Seconds</Paragraph>
        </SegmentContainer>
      </CountDownContainer>
    </Container>
  );
}
