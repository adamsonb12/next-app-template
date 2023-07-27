import { LinkButton } from "@common/buttons/link";
import { Card } from "@common/card";
import { Label } from "@common/typography/label";
import { spacing16, spacing2 } from "@common/spacing";
import Link from "next/link";
import styled from "styled-components";
import { useLocalizationContext } from "@/providers/localization";
import { ReactNode } from "react";
import { Paragraph } from "@common/typography/paragraph";

export const Data = styled(Paragraph)`
  margin-left: ${spacing2};
`;

const Container = styled(Card)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  padding: ${spacing16};
`;

const MainContentSection = styled.section`
  display: grid;
  gap: ${spacing16};
`;

// @ts-ignore
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const EditButton = styled(LinkButton)`
  display: flex;
  justify-content: flex-end;
`;

export const DataContainer = styled.div`
  display: grid;
  width: 100%;
`;

export const KeyValue = ({ key, value }: { key: string; value: string }) => {
  return (
    <DataContainer>
      <Label>{key}</Label>
      <Data>{value}</Data>
    </DataContainer>
  );
};

export const InformationCard = ({
  children,
  editLink,
}: {
  children: ReactNode;
  editLink: string;
}) => {
  const { getTranslation } = useLocalizationContext();

  return (
    <Container>
      <MainContentSection>{children}</MainContentSection>

      <StyledLink passHref href={editLink}>
        <EditButton>Edit</EditButton>
      </StyledLink>
    </Container>
  );
};

export const InformationCardLoading = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { getTranslation } = useLocalizationContext();

  return (
    <Container>
      <MainContentSection>{children}</MainContentSection>

      <EditButton>Edit</EditButton>
    </Container>
  );
};
