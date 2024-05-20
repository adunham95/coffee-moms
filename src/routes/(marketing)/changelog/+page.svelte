<script lang="ts">
	import Heading from '$components/Text/Heading.svelte';
	import Text from '$components/Text/Text.svelte';
	import { generatePageName } from '$helpers/generatePageName';

	export let data;
</script>

<svelte:head>
	<title>{generatePageName('Changelog')}</title>
</svelte:head>

<div class="max-w-4xl mx-auto pt-3 px-2">
	<Heading variant="h1" tag="h1" class="pt-3 pb-2">Changelog</Heading>
	<div class="py-2">
		<div class="hidden sm:block">
			<nav class="flex space-x-4" aria-label="Tabs">
				{#each data.changes as change}
					<a
						href={`#${change.version.toString()}`}
						class="inline-flex items-center rounded-md bg-theme-primary hover:bg-theme-primary-hover px-2 py-1 text-xs font-medium text-theme-primary-content ring-1 ring-inset ring-gray-500/10"
					>
						v{change.version.toString()}
					</a>
				{/each}
			</nav>
		</div>
	</div>
	<div class="space-y-8 divide-y divide-gray-200">
		{#each data.changes as change}
			<li class="list-none py-2" id={change.version.toString()}>
				<div class="grid gap-4">
					<div class="flex items-center gap-2">
						<span
							class="inline-flex items-center rounded-md bg-theme-primary px-2 py-1 text-xs font-medium text-theme-primary-content ring-1 ring-inset ring-gray-500/10"
						>
							v{change.version}
						</span>
						<Text variant="bodySm" class="text-theme-secondary-content">
							{new Date(change.date).toDateString()}
						</Text>
					</div>
					<div>
						<Heading variant="h2" tag="h3" class="mb-2">{change.title}</Heading>
						<article class="prose w-full max-w-full">
							<svelte:component this={change.component} />
						</article>
					</div>
				</div>
			</li>
		{/each}
	</div>
</div>
