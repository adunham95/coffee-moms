import type { Actions } from './$types';
import prisma from '$lib/prisma';

export const actions: Actions = {
	save: async ({ request, locals }) => {
		const user = locals.user;
		const data = await request.formData();
		const eventId = data.get('eventId');

		if (!eventId || typeof eventId !== 'string') {
			return 'error';
		}

		console.log({ eventId });

		const attendee = await prisma.attendee.findFirst({
			where: { userId: user?.id, eventId: parseInt(eventId) },
		});

		if (attendee) {
			console.log('Attendee already exists', attendee);
			return;
		}

		const newAttendee = await prisma.attendee.create({
			data: {
				eventId: parseInt(eventId || '0'),
				userId: user?.id || '',
			},
		});

		return { success: true, attendee: newAttendee };
	},
};
