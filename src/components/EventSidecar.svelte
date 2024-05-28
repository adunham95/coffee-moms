<script lang="ts">
	import { getIcon } from '$const/event-types';
	import type { EStatus } from '$types/EStatus';
	import Icon from './Icon.svelte';
	import StatusBadge from './StatusBadge.svelte';

	export let type: string;
	export let title = 'Event Title';
	export let status: EStatus | undefined = undefined;
	export let showStatus = false;
</script>

<div>
	<div class="flex items-center gap-x-6">
		<div
			class="bg-theme-primary h-16 w-16 p-1 flex-none rounded-full inline-flex justify-center items-center"
		>
			<Icon
				name={getIcon(type || '')}
				class="h-12 w-12 fill-theme-primary-content text-theme-primary-content "
			/>
		</div>
		<div>
			<div class=" mt-1 flex items-center">
				<h1 class="text-base font-semibold leading-6 text-theme-content pr-2">
					{title}
				</h1>
				{#if showStatus}
					<StatusBadge {status} />
				{/if}
			</div>
		</div>
	</div>
	<slot />
</div>
