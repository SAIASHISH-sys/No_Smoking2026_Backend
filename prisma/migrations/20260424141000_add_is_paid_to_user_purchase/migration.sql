/*
  Warnings:

  - You are about to drop the column `stock` on the `Merch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Merch" DROP COLUMN "stock";

-- AlterTable
ALTER TABLE "UserPurchase" ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false;
