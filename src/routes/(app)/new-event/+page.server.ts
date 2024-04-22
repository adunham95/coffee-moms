import type { Actions } from './$types';
import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const title = data.get('event-name');
		const details = data.get('event-details');
		const type = data.get('event-type');
		console.log({ data: { title }, locals });

		if (!title || typeof title !== 'string' || title.length < 2) {
			return fail(400, {
				message: 'Invalid title',
			});
		}

		if (!type || typeof type !== 'string') {
			return fail(400, {
				message: 'Invalid title',
			});
		}

		if (typeof details !== 'string') {
			return fail(400, {
				message: 'Invalid title',
			});
		}

		try {
			const newEvent = await prisma.event.create({
				data: {
					title,
					type,
					details: details || '',
					ownerId: locals.user?.id || '',
				},
			});

			console.log(newEvent);

			redirect(302, `/event/${newEvent.id}`);
		} catch (error) {
			console.error(error);
		}
	},
};
