<script lang="ts">
	import { generatePageName } from '../../../helpers/generatePageName';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<svelte:head>
	<title>{generatePageName('Users')}</title>
</svelte:head>

<div>
	<h1>Users</h1>
	<main>
		<div>
			{#each data.users as user}
				<li>
					{user.profile?.firstName || ''}
					{user.profile?.lastName || ''}
				</li>
			{/each}
		</div>
	</main>
</div>
