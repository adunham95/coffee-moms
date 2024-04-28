<script lang="ts">
	import Heading from '$components/Text/Heading.svelte';
	import Text from '$components/Text/Text.svelte';
	import Icon from '../../components/Icon.svelte';
	export let features: { title: string; description: string; icon: string }[] = [];
</script>

<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
	{#each features as feature}
		<div class="relative pl-16">
			<dt class="text-base font-semibold leading-7 text-gray-900">
				<div
					class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600"
				>
					<Icon class="h-6 w-6 text-white" name={feature.icon} />
				</div>
				<Heading tag="p" variant="h4">{feature.title}</Heading>
			</dt>
			<dd class="mt-2">
				<Text>
					{feature.description}
				</Text>
			</dd>
		</div>
	{/each}
</dl>
