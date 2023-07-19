"use client";

import { PrimaryButton } from "@common/buttons/primary";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import NotFoundAnimation from "../assets/animations/404.json";
import { spacing16, spacing24, spacing32, spacing512 } from "@common/spacing";
import { useLocalizationContext } from "@/providers/localization";
import { Heading1 } from "@common/typography/heading";
import { breakWidth720 } from "@common/break-points";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  align-content: center;

  gap: ${spacing24};
  padding: ${spacing32} ${spacing16};

  @media screen and (min-width: ${breakWidth720}) {
    max-width: ${spacing512};
  }
`;

const NotFoundTitle = styled(Heading1)`
  text-align: center;
`;

// @ts-ignore
const StyledLottie = styled(Lottie)`
  width: 80%;
  justify-self: center;
`;

export default function NotFound() {
  const router = useRouter();
  const { getTranslation } = useLocalizationContext();

  return (
    <Wrapper>
      <Container>
        <NotFoundTitle>{getTranslation("genericErrorTitle")}</NotFoundTitle>
        <StyledLottie animationData={NotFoundAnimation} loop={true} />
        <PrimaryButton onClick={() => router.replace("/")}>
          {getTranslation("genericErrorConfirm")}
        </PrimaryButton>
      </Container>
    </Wrapper>
  );
}
