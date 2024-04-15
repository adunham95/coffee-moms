/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();

		const formattedData = Object.fromEntries(data);
		console.log({ data, formattedData, locals });
	},
};
