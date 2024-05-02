<script>
	import Spinner from '$components/Spinner.svelte';
	import { generatePageName } from '$helpers/generatePageName';
</script>

<svelte:head>
	<title>{generatePageName('Logging in')}</title>
</svelte:head>

<div class="flex w-vw h-full justify-center items-center">
	<Spinner />
</div>
