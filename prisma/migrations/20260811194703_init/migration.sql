-- CreateEnum
CREATE TYPE "LeadType" AS ENUM ('GENERAL_PROJECT', 'AI_RELIABILITY');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "leadType" "LeadType" NOT NULL DEFAULT 'GENERAL_PROJECT',
    "fullName" TEXT NOT NULL,
    "workEmail" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "phone" TEXT,
    "website" TEXT,
    "agentUrl" TEXT,
    "service" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_workEmail_idx" ON "Lead"("workEmail");

-- CreateIndex
CREATE INDEX "Lead_leadType_idx" ON "Lead"("leadType");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
