import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	console.log({ user: event.locals });
	if (!event.locals.user) redirect(302, '/login');
	return {
		user: event.locals.user,
	};
};
