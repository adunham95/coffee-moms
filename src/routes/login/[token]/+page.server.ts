import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import { tokenType } from '@prisma/client';
import { lucia } from '$lib/server/auth';

export const load: PageServerLoad = async (event) => {
	const { token } = event.params;
	console.log({ token });

	const tokenData = await prisma.loginToken.findFirst({ where: { token } });

	console.log({ tokenData });

	if (!tokenData?.userId) {
		redirect(302, '/login');
	}

	//TODO Check expiration

	const session = await lucia.createSession(tokenData?.userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	console.log(session, sessionCookie);
	event.cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '.',
		...sessionCookie.attributes,
	});

	switch (tokenData?.tokenType) {
		case tokenType.event_recipeint:
			redirect(302, `/event/${tokenData.eventId}/attendee`);
			break;

		default:
			redirect(302, '/dashboard');
	}
};
