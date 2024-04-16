<script lang="ts">
	import Card from './Card/Card.svelte';
	import CardBody from './Card/CardBody.svelte';

	export let stats: { title: string; stat: string; type?: string }[] = [];
</script>

<div class="rounded border-2 border-theme-border p-4">
	<h3 class="text-lg font-semibold leading-6 text-theme-content pb-2">Stats</h3>

	<div class=" grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
		{#each stats as stat}
			<Card>
				<CardBody>
					<dt class="truncate text-sm font-medium text-theme-secondary-content">{stat.title}</dt>
					<dd class="mt-1 text-3xl font-semibold tracking-tight text-theme-content">{stat.stat}</dd>
				</CardBody>
			</Card>
		{/each}
	</div>
</div>
