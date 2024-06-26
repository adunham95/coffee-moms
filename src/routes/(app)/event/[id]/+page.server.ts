import { error, redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log({ user: event.locals });
	const { id } = event.params;
	if (!event.locals.user) redirect(302, '/login');

	const eventData = await prisma.event.findFirst({
		where: { id: parseInt(id) },
		include: {
			attendees: {
				include: {
					user: { include: { loginToken: { where: { eventId: parseInt(id) }, take: 1 } } },
				},
			},
			avaliblity: true,
		},
	});

	console.log(eventData);

	if (!eventData) error(404, 'Event Not Found');

	return {
		user: event.locals.user,
		eventData,
	};
};
