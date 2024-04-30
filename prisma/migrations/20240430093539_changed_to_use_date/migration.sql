/*
  Warnings:

  - You are about to drop the column `endDate` on the `Avalibility` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Avalibility` table. All the data in the column will be lost.
  - Added the required column `date` to the `Avalibility` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Avalibility" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "date" TIMESTAMPTZ(3) NOT NULL;
