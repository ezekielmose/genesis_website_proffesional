import "dotenv/config";

import { hash } from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
const fullName = process.env.ADMIN_NAME?.trim();
const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing.");
}

if (!fullName) {
  throw new Error("ADMIN_NAME is missing.");
}

if (!email) {
  throw new Error("ADMIN_EMAIL is missing.");
}

if (!password || password.length < 12) {
  throw new Error(
    "ADMIN_PASSWORD must contain at least 12 characters."
  );
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const passwordHash = await hash(password!, 12);

  const user = await prisma.user.upsert({
    where: {
      email: email!,
    },

    update: {
      fullName: fullName!,
      passwordHash,
      role: "ADMIN",
      active: true,
    },

    create: {
      fullName: fullName!,
      email: email!,
      passwordHash,
      role: "ADMIN",
      active: true,
    },

    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      active: true,
    },
  });

  console.log("Admin account ready:", user);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
