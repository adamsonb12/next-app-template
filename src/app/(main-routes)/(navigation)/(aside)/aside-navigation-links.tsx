"use client";
import { Paragraph } from "@common/typography/paragraph";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

// @ts-ignore
const NextLink = styled(Link)<{ isActive?: boolean }>`
  text-decoration: none;
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.colors.textSecondary};
  margin-left: 0.5em;
`;

const CategoryTitle = styled(Paragraph)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

export const AsideNavigationLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <CategoryTitle>Category 1</CategoryTitle>
      <NextLink href="/" isActive={pathname === "/"}>
        Home
      </NextLink>
      <NextLink href="/cool-route" isActive={pathname === "/cool-route"}>
        Cool Route
      </NextLink>
    </>
  );
};
