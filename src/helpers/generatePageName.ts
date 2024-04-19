export function generatePageName(pageName?: string) {
	if (!pageName) {
		return 'Coffee Moms';
	}
	return `${pageName} | Coffee Moms`;
}
