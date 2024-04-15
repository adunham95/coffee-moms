/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();

		const entries = data.getAll('availability');
		const formattedData = Object.fromEntries(data);
		console.log({ data, formattedData, locals, entries });
	},
};
