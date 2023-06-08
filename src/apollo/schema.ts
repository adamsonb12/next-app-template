import { makeSchema, connectionPlugin } from "nexus";
import { join } from "path";

import * as Query from "../server/graphql/queries";
import * as Mutation from "../server/graphql/mutations";
import { GraphqlDate } from "../server/graphql/types/date";
import { GraphqlDateTime } from "../server/graphql/types/date-time";

const dirName = join(process.cwd(), "/src/apollo");
// Recursively traverses the value passed to types looking for
// any valid Nexus or graphql-js objects to add to the schema,
// so you can be pretty flexible with how you import types here.
export const schema = makeSchema({
  types: [Mutation, Query, GraphqlDate, GraphqlDateTime],
  // or types: { Account, Node, Query }
  // or types: [Account, [Node], { Query }]
  contextType: {
    module: join(process.cwd(), "/src/server/context/index.ts"),
    export: "HttpContext",
  },
  outputs: {
    typegen: join(dirName, "nexus-typegen.ts"),
    schema: join(dirName, "schema.graphql"),
  },
  plugins: [
    // ... other plugins
    connectionPlugin(),
  ],
});
