"use client";

import { breakWidth720 } from "@common/break-points";
import { spacing16 } from "@common/spacing";
import styled from "styled-components";

export const Table = styled.table<{ totalColumns: number }>`
  display: none;

  @media screen and (min-width: ${breakWidth720}) {
    display: grid;

    tr {
      grid-template-columns: repeat(${(props) => props.totalColumns}, 1fr);
    }
  }
`;

export const TableHead = styled.thead`
  display: grid;
  width: 100%;
`;

export const TableBody = styled.tbody`
  & > :nth-child(even) {
    background: ${(props) => props.theme.colors.disabled};
  }
`;

export const TableRow = styled.tr`
  display: grid;
  padding: ${spacing16};

  > :first-child {
    justify-content: flex-start;
  }

  > :last-child {
    justify-content: flex-end;
    text-align: right;
  }
`;

export const HeaderCell = styled.th`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const BodyCell = styled.td`
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
`;

export const MobileTableCardsContainer = styled.div`
  display: grid;
  gap: ${spacing16};
  padding: ${spacing16};
  & > :nth-child(even) {
    background: ${(props) => props.theme.colors.disabled};
  }

  @media screen and (min-width: ${breakWidth720}) {
    display: none;
  }
`;

export const MobileRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const Key = styled.div`
  font-weight: 500;
`;
const Value = styled.div``;

export const MobileRow = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}) => {
  return (
    <MobileRowContainer>
      <Key>{label}</Key>
      <Value>{value}</Value>
    </MobileRowContainer>
  );
};
