import type { Actions } from './$types';
import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { generateId } from 'lucia';
import { tokenType } from '@prisma/client';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const title = data.get('event-name');
		const details = data.get('event-details');
		const greeting = data.get('invite-greeting');
		const type = data.get('event-type');
		const locationName = data.get('location-name');
		const street = data.get('street');
		const street2 = data.get('street2');
		const city = data.get('city');
		const state = data.get('state');
		const zip = data.get('zip');
		const rsvp = data.get('rsvp');
		const securitySettings = data.get('security-settings');

		const attendees = data.getAll('attendee').filter((a) => a !== '') || [];
		const proposedTimes = data.getAll('time-preference').filter((a) => a !== '') || [];

		console.log({
			data: { title, attendees, proposedTimes, rsvp, securitySettings, type, greeting },
			locals,
		});
		let id = 0;

		if (!title || typeof title !== 'string' || title.length < 2) {
			return fail(400, {
				message: 'Invalid title',
			});
		}

		if (!type || typeof type !== 'string') {
			console.log(type);
			return fail(400, {
				message: 'Invalid type',
			});
		}

		if (details && typeof details !== 'string') {
			return fail(400, {
				message: 'Invalid details',
			});
		}

		if (locationName && typeof locationName !== 'string') {
			return fail(400, {
				message: 'Invalid location name',
			});
		}

		if (street && typeof street !== 'string') {
			return fail(400, {
				message: 'Invalid street',
			});
		}

		if (street2 && typeof street2 !== 'string') {
			return fail(400, {
				message: 'Invalid street',
			});
		}

		if (city && typeof city !== 'string') {
			return fail(400, {
				message: 'Invalid city',
			});
		}

		if (state && typeof state !== 'string') {
			return fail(400, {
				message: 'Invalid state',
			});
		}

		if (zip && typeof zip !== 'string') {
			return fail(400, {
				message: 'Invalid zip',
			});
		}

		if (securitySettings && typeof securitySettings !== 'string') {
			return fail(400, {
				message: 'Invalid security settings',
			});
		}

		if (greeting && typeof greeting !== 'string') {
			return fail(400, {
				message: 'Invalid greeting',
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

		try {
			const newEvent = await prisma.event.create({
				data: {
					title,
					type,
					details: details || '',
					ownerId: locals.user?.id || '',
					locationName,
					street,
					street2,
					city,
					state,
					zip,
					availabilityEnabled: proposedTimes.length > 0,
					rsvpEnabled: rsvp === 'on',
					securitySettings,
					invitationGreeting: greeting,
					attendees: {
						createMany: {
							data: newAttendees.map((a) => {
								return { userId: a.id };
							}),
						},
					},
					loginTokens: {
						createMany: {
							data: [
								{ token: generateId(7), tokenType: tokenType.event },
								...newAttendees.map((a) => {
									return {
										userId: a.id,
										token: generateId(7),
										tokenType: tokenType.event_recipient,
									};
								}),
							],
						},
					},
				},
			});

			const myAttendee = await prisma.attendee.create({
				data: {
					userId: locals.user?.id || '',
					eventId: newEvent.id,
				},
			});

			const myAvailability = await prisma.avalibility.createMany({
				data: proposedTimes.map((time) => {
					return {
						attendeeId: myAttendee.id,
						eventId: newEvent.id,
						date: new Date(time as string),
					};
				}),
			});

			console.log({ myAttendee, myAvailability });

			id = newEvent.id;
		} catch (error) {
			console.error(error);
		}

		redirect(302, `/event/${id}`);
	},
};
