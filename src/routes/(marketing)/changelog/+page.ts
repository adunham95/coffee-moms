import { get_change_logs } from '$lib/changelog';

export const load = async () => {
	const changes = await get_change_logs();

	return {
		changes,
	};
};
