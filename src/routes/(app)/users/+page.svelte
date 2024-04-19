<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

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
