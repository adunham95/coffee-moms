import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
	const user = await prisma.user.findFirst({ where: { id }, include: { profile: true } });

	return { user };
}) satisfies PageServerLoad;
