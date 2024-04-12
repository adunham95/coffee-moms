<script lang="ts">
	export let stats: { title: string; stat: string; type?: string }[] = [];
</script>

<div
	class="rounded border-2 border-brand-bg-900 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4 mb-4"
>
	{#each stats as stat}
		<div class=" px-4 py-6 sm:px-6 lg:px-8">
			<p class="text-sm font-medium leading-6 text-grey-600">{stat.title}</p>
			<p class="mt-2 flex items-baseline gap-x-2">
				<span class="text-4xl font-semibold tracking-tight text-grey-800">{stat.stat}</span>
				{#if stat.type}
					<span class="text-sm text-grey-600">mins</span>
				{/if}
			</p>
		</div>
	{/each}
</div>
