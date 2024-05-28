-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "availabilityEnabled" BOOLEAN DEFAULT false,
ADD COLUMN     "rsvpEnabled" BOOLEAN DEFAULT false,
ALTER COLUMN "securitySettings" SET DEFAULT 'private';
