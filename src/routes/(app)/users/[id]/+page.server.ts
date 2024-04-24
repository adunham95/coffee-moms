import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
	const user = await prisma.user.findFirst({ where: { id } });

	return { user };
}) satisfies PageServerLoad;
