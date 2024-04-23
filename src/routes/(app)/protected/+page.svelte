<script>
	import { generatePageName } from '$helpers/generatePageName';

	export let data;
</script>

<svelte:head>
	<title>{generatePageName('Protected')}</title>
</svelte:head>

<h1 class="text-2xl font-semibold text-center">
	Hi! You are registered with email: {data.user.email}.
</h1>
