import prisma from '$lib/prisma';

export const load = async (event) => {
	const { id } = event.params;

	const availabilityData = await prisma.avalibility.findMany({
		where: { eventId: parseInt(id) },
	});

	return { availabilityData };
};
