import type { Actions } from './$types';
import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { generateId } from 'lucia';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const title = data.get('event-name');
		const details = data.get('event-details');
		const type = data.get('event-type');

		const attendees = data.getAll('attendee').filter((a) => a !== '');

		console.log({ data: { title, attendees }, locals });
		let id = 0;

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

		const newAttendees = await prisma.$transaction(
			attendees.map((attendeePhone) =>
				prisma.user.upsert({
					where: { phone: attendeePhone as string },
					update: {},
					create: {
						id: generateId(15),
						phone: attendeePhone as string,
						hashedPassword: generateId(15),
					},
				}),
			),
		);

		console.log(newAttendees);

		// const userId = generateId(15);
		// const randomPass = generateId(15);
		// const hashedPassword = await new Argon2id().hash(randomPass);
		// const upsertUser = await prisma.user.upsert({
		// 	where: {
		// 		phone: '8283989038',
		// 	},
		// 	update: {},
		// 	create: {
		// 		id: userId,
		// 		phone: '8283989038',
		// 		hashedPassword,
		// 	},
		// });

		try {
			const newEvent = await prisma.event.create({
				data: {
					title,
					type,
					details: details || '',
					ownerId: locals.user?.id || '',
					attendees: {
						createMany: {
							data: newAttendees.map((a) => {
								return { userId: a.id };
							}),
						},
					},
				},
			});
			id = newEvent.id;
			console.log(newEvent);
			console.log('id', id);
		} catch (error) {
			console.error(error);
		}

		redirect(302, `/event/${id}`);
	},
};
