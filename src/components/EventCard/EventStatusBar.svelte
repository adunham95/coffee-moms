<script lang="ts">
	import { EStatus } from '$types/EStatus';

	export let statusCode: EStatus | undefined = undefined;

	let statusDetails: {
		[key in EStatus]: { name: string; text: string; bg: string; width: number };
	} = {
		Created: {
			name: 'Created',
			bg: 'bg-gray-600',
			text: ' text-gray-600',
			width: 25,
		},
		Scheduling: {
			name: 'Scheduling',
			bg: 'bg-yellow-600',
			text: ' text-yellow-600',
			width: 50,
		},
		Scheduled: {
			name: 'Scheduled',
			text: 'text-brand-600',
			bg: 'bg-brand-600',
			width: 75,
		},
		Canceled: {
			name: 'Canceled',
			bg: 'bg-pink-600',
			text: ' text-pink-600',
			width: 2,
		},
		Complete: {
			name: 'Complete',
			bg: 'bg-green-600',
			text: ' text-green-600',
			width: 100,
		},
		Error: {
			name: 'Error',
			bg: 'bg-red-600',
			text: 'text-red-600',
			width: 2,
		},
	};

	let selectedStatus = statusDetails[statusCode || EStatus.Complete];
</script>

<!-- <h4 class="sr-only">Status</h4>
<div class="mt-6" aria-hidden="true">
	<div class="overflow-hidden rounded-full bg-gray-200">
		<div
			class={`h-2 rounded-full ${selectedStatus.bg}`}
			style={`width: ${selectedStatus.width}%`}
		></div>
	</div>
	<div class="mt-6 hidden grid-cols-5 text-sm font-medium text-gray-600 sm:grid">
		{#if statusCode === EStatus.Canceled || statusCode === EStatus.Error}
			<div class="text-left">{selectedStatus.name}</div>
		{:else}
			<div></div>
		{/if}

		<div class="text-left">Created</div>
		<div class="text-center">Scheduling</div>
		<div class="text-right">Scheduled</div>
		<div class="text-right">Complete</div>
	</div>
</div> -->

<ol
	class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
>
	<li
		class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
	>
		<span
			class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
		>
			<svg
				class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
				/>
			</svg>
			Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
		</span>
	</li>
	<li
		class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
	>
		<span
			class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
		>
			<span class="me-2">2</span>
			Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
		</span>
	</li>
	<li class="flex items-center">
		<span class="me-2">3</span>
		Confirmation
	</li>
</ol>
