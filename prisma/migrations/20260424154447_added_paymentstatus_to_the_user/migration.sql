-- AlterTable
ALTER TABLE "User" ADD COLUMN     "paymentStatus" "OrderStatus" NOT NULL DEFAULT 'PENDING';
