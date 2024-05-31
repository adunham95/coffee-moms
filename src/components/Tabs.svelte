<script lang="ts">
	export let tabs: { id: string; title: string }[] = [];
	export let activeTab = '';
</script>

<div class="mt-3 sm:mt-4">
	<div class="block">
		<nav class=" flex space-x-8">
			{#each tabs as tab}
				<button
					on:click={() => {
						activeTab = tab.id;
					}}
					class={`${activeTab === tab.id ? 'border-theme-primary text-theme-primary' : ' border-theme-secondary-content text-theme-secondary-content'}  whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium`}
					aria-current="page"
				>
					{tab.title}
				</button>
			{/each}
		</nav>
	</div>
</div>
