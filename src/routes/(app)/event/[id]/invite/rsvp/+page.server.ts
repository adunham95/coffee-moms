import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const rsvp = data.get('attending');
		const eventId = data.get('event-id');
		const attendeeId = data.get('attendee-id');
		const name = data.get('name');
		const phone = data.get('phone');
		const details = data.get('details');
		const userId = locals.user?.id;
		const attending = rsvp === 'on';

		console.log({ rsvp, eventId, userId, name, details, attending, phone, attendeeId });

		if (!eventId || typeof eventId !== 'string') {
			return;
		}

		if (!name || typeof name !== 'string') {
			return;
		}
	},
};
