/*
  Warnings:

  - A unique constraint covering the columns `[registrationrazorpayOrderId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[registrationrazorpayPaymentId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "registrationrazorpayOrderId" TEXT,
ADD COLUMN     "registrationrazorpayPaymentId" TEXT,
ADD COLUMN     "role" "role" NOT NULL DEFAULT 'USER';

-- CreateIndex
CREATE UNIQUE INDEX "User_registrationrazorpayOrderId_key" ON "User"("registrationrazorpayOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "User_registrationrazorpayPaymentId_key" ON "User"("registrationrazorpayPaymentId");
