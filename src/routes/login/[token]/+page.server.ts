import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async (event) => {
	const { token } = event.params;
	console.log({ token });

	const tokenData = await prisma.loginToken.findFirst({ where: { token } });

	console.log({ tokenData });
};
