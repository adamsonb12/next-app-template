import { queryField } from "nexus";

export const getServer = queryField("getServer", {
  type: "String",

  async resolve(_root, args, ctx) {
    const service = ctx.starterService();
    return service.getServer();
  },
});
