export async function shareOrCopy(data: { title: string; text: string; url: string }) {
	if (navigator.canShare(data)) {
		await navigator.share(data);
	} else {
		await navigator.clipboard.writeText(`${data.text} URL: ${data.url}`);
	}
}
