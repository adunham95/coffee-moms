import type { PageServerLoad } from './$types';
import { getUserById } from '../../../../db/users';

export const load = (async ({ params: { id } }) => {
	const user = await getUserById(id);

	return { user };
}) satisfies PageServerLoad;
