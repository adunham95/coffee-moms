interface Changelog {
	version: string;
	date: string;
	title?: string;
	component: ConstructorOfATypedSvelteComponent;
}

export const get_change_logs = async () => {
	// Fetch posts from local Markdown files
	const posts: Changelog[] = await Promise.all(
		Object.entries(import.meta.glob('./data/changelog/*.md')).map(async ([path, resolver]) => {
			const resolved = (await resolver()) as {
				metadata: Changelog;
				default: ConstructorOfATypedSvelteComponent;
			};
			const { metadata, default: component } = resolved;
			const slug = path.split('/').pop()?.slice(0, -3) ?? '';
			return { title: 'New Features', ...metadata, slug, component };
		}),
	);

	let sorted_posts = posts.sort((a, b) => parseFloat(b.version) - parseFloat(a.version));

	sorted_posts = sorted_posts.map((post) => ({
		...post,
	}));

	return sorted_posts;
};
