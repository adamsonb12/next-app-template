import { PrismaClient } from "@prisma/client";

export * from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

const SHOW_PRISMA_LOGS = process.env.SHOW_PRISMA_LOGS === "true";

export const prisma: PrismaClient =
  process.env.NODE_ENV === "production"
    ? new PrismaClient({
        ...(SHOW_PRISMA_LOGS && { log: ["query"] }),
      })
    : (() => {
        // @ts-ignore
        if (!global.prisma) {
          // @ts-ignore
          global.prisma = new PrismaClient({
            ...(SHOW_PRISMA_LOGS && { log: ["query"] }),
          });
        }
        // @ts-ignore
        return global.prisma;
      })();
