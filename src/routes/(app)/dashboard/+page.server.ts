import { redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log({ user: event.locals });
	if (!event.locals.user) redirect(302, '/login');

	const events = await prisma.event.findMany({
		where: {
			ownerId: event.locals.user.id,
		},
		include: {
			owner: true,
			attendees: {
				include: {
					user: true,
				},
			},
		},
	});

	const attendeeEvents = await prisma.attendee.findMany({
		where: {
			userId: event.locals.user.id,
		},
		include: {
			event: { include: { owner: true } },
		},
	});

	return {
		user: event.locals.user,
		events,
		attendeeEvents,
	};
};
