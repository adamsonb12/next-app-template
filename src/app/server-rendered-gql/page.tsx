import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`
  query Server {
    server
  }
`;

export default async function Page() {
  const client = getClient();
  const { data } = await client.query({ query });

  return <main>{data.server}</main>;
}
