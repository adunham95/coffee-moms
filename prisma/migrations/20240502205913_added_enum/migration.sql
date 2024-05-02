/*
  Warnings:

  - The `tokenType` column on the `LoginToken` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "tokenType" AS ENUM ('login', 'event_recipeint');

-- AlterTable
ALTER TABLE "LoginToken" DROP COLUMN "tokenType",
ADD COLUMN     "tokenType" "tokenType" NOT NULL DEFAULT 'login';
