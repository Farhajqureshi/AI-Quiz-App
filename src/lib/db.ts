import { PrismaClient } from "@prisma/client";
import "server-only";

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient;
}

export let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

// Ye code PrismaClient ke liye singleton pattern use karta hai — taaki production mein ek hi instance ho aur development mein bar-bar new instance na bane (jo errors de sakta hai).

// 🧠 Key Points:

// Production mein direct new PrismaClient() banaya jaata hai.

// Development mein ek global variable (global.cachedPrisma) ka use hota hai taaki ek hi instance baar-baar reuse ho.

// Ye approach Next.js with Prisma mein hot reload ke during multiple client instantiation error ko prevent karta hai.