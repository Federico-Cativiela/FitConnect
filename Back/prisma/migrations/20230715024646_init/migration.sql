/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idUser` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserOnExtraActivity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `uid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Paystore" DROP CONSTRAINT "Paystore_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnExtraActivity" DROP CONSTRAINT "UserOnExtraActivity_userId_fkey";

-- AlterTable
ALTER TABLE "Paystore" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "idUser",
ADD COLUMN     "uid" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "UserOnExtraActivity" DROP CONSTRAINT "UserOnExtraActivity_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserOnExtraActivity_pkey" PRIMARY KEY ("userId", "extraActivityId");

-- AddForeignKey
ALTER TABLE "Paystore" ADD CONSTRAINT "Paystore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnExtraActivity" ADD CONSTRAINT "UserOnExtraActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
