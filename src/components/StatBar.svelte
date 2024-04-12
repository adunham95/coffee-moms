<script lang="ts">
	import Icon from './Icon.svelte';

	export let stats: { title: string; stat: string; type?: string }[] = [];
</script>

<div class="rounded border-2 border-brand-bg-900 p-4">
	<h3 class="text-lg font-semibold leading-6 text-gray-900 pb-2">Stats</h3>

	<div class=" grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
		{#each stats as stat}
			<div class="group overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 relative">
				<dt class="truncate text-sm font-medium text-gray-500">{stat.title}</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{stat.stat}</dd>
				<!-- <span
					class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
					aria-hidden="true"
				>
					<Icon name="pointerOut" fill="currentColor" />
				</span> -->
			</div>
		{/each}
	</div>
</div>
