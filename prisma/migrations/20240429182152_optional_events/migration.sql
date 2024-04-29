-- AddForeignKey
ALTER TABLE "LoginToken" ADD CONSTRAINT "LoginToken_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
