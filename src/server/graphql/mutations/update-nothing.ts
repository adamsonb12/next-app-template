import { idArg, mutationField, nonNull } from "nexus";

export const updateNothing = mutationField("updateNothing", {
  type: "Boolean",

  async resolve(_, args, ctx) {
    return true;
  },
});
