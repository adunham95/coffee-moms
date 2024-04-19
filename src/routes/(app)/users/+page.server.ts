import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// 1.
	const response = await prisma.user.findMany({
		include: { profile: true },
	});

	// 2.
	return { users: response };
}) satisfies PageServerLoad;
