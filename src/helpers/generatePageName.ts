export function generatePageName(pageName?: string) {
	if (!pageName) {
		return 'Planner Bee';
	}
	return `${pageName} | Planner Bee`;
}
