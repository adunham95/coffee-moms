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
		},
	});
	console.log(events);

	return {
		user: event.locals.user,
		events,
	};
};
