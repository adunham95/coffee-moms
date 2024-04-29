/*
  Warnings:

  - You are about to drop the column `userId` on the `Avalibility` table. All the data in the column will be lost.
  - You are about to drop the column `attendeeId` on the `LoginToken` table. All the data in the column will be lost.
  - Added the required column `attendeeId` to the `Avalibility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `LoginToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `LoginToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Avalibility" DROP CONSTRAINT "Avalibility_userId_fkey";

-- DropForeignKey
ALTER TABLE "LoginToken" DROP CONSTRAINT "LoginToken_attendeeId_fkey";

-- AlterTable
ALTER TABLE "Avalibility" DROP COLUMN "userId",
ADD COLUMN     "attendeeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "LoginToken" DROP COLUMN "attendeeId",
ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Attendee_eventId_userId_idx" ON "Attendee"("eventId", "userId");

-- CreateIndex
CREATE INDEX "Event_ownerId_idx" ON "Event"("ownerId");

-- CreateIndex
CREATE INDEX "LoginToken_token_idx" ON "LoginToken"("token");

-- AddForeignKey
ALTER TABLE "LoginToken" ADD CONSTRAINT "LoginToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avalibility" ADD CONSTRAINT "Avalibility_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "Attendee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
