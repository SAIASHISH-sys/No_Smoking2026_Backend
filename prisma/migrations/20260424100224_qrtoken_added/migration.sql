/*
  Warnings:

  - A unique constraint covering the columns `[qrtoken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "qrtoken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_qrtoken_key" ON "User"("qrtoken");
