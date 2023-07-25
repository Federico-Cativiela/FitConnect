/*
  Warnings:

  - You are about to drop the column `idMembership` on the `Paystore` table. All the data in the column will be lost.
  - You are about to drop the column `idUser` on the `Paystore` table. All the data in the column will be lost.
  - Added the required column `invoice` to the `Paystore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Paystore" DROP CONSTRAINT "Paystore_membershipId_fkey";

-- AlterTable
ALTER TABLE "Paystore" DROP COLUMN "idMembership",
DROP COLUMN "idUser",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "invoice" TEXT NOT NULL,
ALTER COLUMN "membershipId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Paystore" ADD CONSTRAINT "Paystore_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("idMembership") ON DELETE SET NULL ON UPDATE CASCADE;
