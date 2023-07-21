-- AlterTable
ALTER TABLE "ExtraActivity" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'no tiene descripcion',
ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT true;
