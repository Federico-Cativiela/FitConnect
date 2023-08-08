/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserOnExtraActivity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `userId` on the `Paystore` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `UserOnExtraActivity` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Paystore" DROP CONSTRAINT "Paystore_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnExtraActivity" DROP CONSTRAINT "UserOnExtraActivity_userId_fkey";

-- AlterTable
ALTER TABLE "Paystore" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserOnExtraActivity" DROP CONSTRAINT "UserOnExtraActivity_pkey",
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "UserOnExtraActivity_pkey" PRIMARY KEY ("userId", "extraActivityId");

-- AddForeignKey
ALTER TABLE "Paystore" ADD CONSTRAINT "Paystore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnExtraActivity" ADD CONSTRAINT "UserOnExtraActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
