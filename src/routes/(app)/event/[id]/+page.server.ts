import { redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log({ user: event.locals });
	const { id } = event.params;
	if (!event.locals.user) redirect(302, '/login');

	const eventData = await prisma.event.findFirst({
		where: { id: parseInt(id) },
		include: { attendees: { include: { user: true } }, loginTokens: true, avaliblity: true },
	});

	console.log(eventData);

	return {
		user: event.locals.user,
		eventData,
	};
};
