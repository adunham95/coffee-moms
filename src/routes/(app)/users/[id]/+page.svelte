<script lang="ts">
	import { generatePageName } from '../../../../helpers/generatePageName';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<svelte:head>
	<title>{generatePageName(data.user?.profile?.firstName || 'Profile')}</title>
</svelte:head>

<div>
	<h1>User</h1>
	<main>
		<div>
			{data.user?.profile?.firstName}
		</div>
	</main>
</div>
