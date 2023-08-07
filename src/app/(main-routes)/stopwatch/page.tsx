"use client";

import { DangerButton } from "@common/buttons/danger";
import { PrimaryButton } from "@common/buttons/primary";
import { SecondaryButton } from "@common/buttons/secondary";
import { useCountdown } from "@common/countdown";
import { DatePicker } from "@common/fields/date";
import { spacing16 } from "@common/spacing";
import { useStopwatch } from "@common/stopwatch";
import { Heading1 } from "@common/typography/heading";
import { Paragraph } from "@common/typography/paragraph";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: ${spacing16};
`;

const Buttons = styled.div`
  display: grid;
  gap: ${spacing16};
`;

const StopwatchContainer = styled.div`
  display: flex;
  gap: ${spacing16};
`;

const SegmentContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
`;

export default function StopwatchPage() {
  const [date, setDate] = useState<null | Date>(null);
  const {
    time,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    days,
    hours,
    minutes,
    seconds,
  } = useStopwatch();

  return (
    <Container>
      <Buttons>
        {!isRunning && (
          <PrimaryButton onClick={() => startTimer()}>startTimer</PrimaryButton>
        )}
        {(time > 0 || isRunning) && (
          <SecondaryButton onClick={() => resetTimer()}>reset</SecondaryButton>
        )}
        {isRunning && (
          <DangerButton onClick={() => pauseTimer()}>pause</DangerButton>
        )}
      </Buttons>

      <StopwatchContainer>
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
      </StopwatchContainer>
    </Container>
  );
}
