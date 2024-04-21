/*
  Warnings:

  - Added the required column `details` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Avalibility" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Avalibility_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Avalibility" ADD CONSTRAINT "Avalibility_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avalibility" ADD CONSTRAINT "Avalibility_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
