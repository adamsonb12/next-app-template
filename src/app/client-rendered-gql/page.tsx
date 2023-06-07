"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import gql from "graphql-tag";

const query = gql`
  query Client {
    client
  }
`;

export default function PollPage() {
  const { data } = useSuspenseQuery(query);

  // @ts-ignore
  return <div>{data.client}</div>;
}
