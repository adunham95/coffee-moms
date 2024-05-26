/*
  Warnings:

  - The values [event_recipeint] on the enum `tokenType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "tokenType_new" AS ENUM ('login', 'event_recipient', 'event');
ALTER TABLE "LoginToken" ALTER COLUMN "tokenType" DROP DEFAULT;
ALTER TABLE "LoginToken" ALTER COLUMN "tokenType" TYPE "tokenType_new" USING ("tokenType"::text::"tokenType_new");
ALTER TYPE "tokenType" RENAME TO "tokenType_old";
ALTER TYPE "tokenType_new" RENAME TO "tokenType";
DROP TYPE "tokenType_old";
ALTER TABLE "LoginToken" ALTER COLUMN "tokenType" SET DEFAULT 'login';
COMMIT;

-- DropForeignKey
ALTER TABLE "LoginToken" DROP CONSTRAINT "LoginToken_userId_fkey";

-- AlterTable
ALTER TABLE "LoginToken" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LoginToken" ADD CONSTRAINT "LoginToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
