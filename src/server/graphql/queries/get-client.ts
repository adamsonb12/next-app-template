import { queryField } from "nexus";

export const getClient = queryField("getClient", {
  type: "String",

  async resolve(_root, args, ctx) {
    const service = ctx.starterService();
    return service.getClient();
  },
});
