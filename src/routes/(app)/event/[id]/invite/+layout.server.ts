import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
	const { id } = event.params;
	const user = event.locals.user;

	const eventData = await prisma.event.findFirst({
		where: { id: parseInt(id) },
		include: {
			owner: true,
			attendees: true,
		},
	});

	const attendeeData = await prisma.attendee.findFirst({
		where: { eventId: parseInt(id), userId: user?.id },
	});

	console.log(eventData, attendeeData);
	if (!eventData) error(404, 'Event Not Found');

	if (eventData.securitySettings === 'private' && user?.id !== eventData.ownerId)
		error(404, 'Event Not Found');

	console.log({ user, includesUser: eventData.attendees.some((a) => a.userId === user?.id) });
	if (
		eventData.securitySettings === 'attendee-only' &&
		eventData.attendees.some((a) => a.userId !== user?.id)
	)
		error(404, 'Event Not Found');

	return {
		user,
		eventData,
		attendeeData,
	};
};
