<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import StatusBadge from '$components/StatusBadge.svelte';
	import type { EStatus } from '$types/EStatus';
	import Container from '../../../../components/Container.svelte';
	import { getIcon } from '../../../../const/event-types';
	import { generatePageName } from '../../../../helpers/generatePageName';
	import type { PageData } from './$types';

	type CustomPageData = PageData & {
		eventData: {
			status: EStatus;
		};
	};

	export let data: CustomPageData;
	console.log(data);
</script>

<svelte:head>
	<title>{generatePageName('Event')}</title>
</svelte:head>

<header class="relative isolate border-b border-brand-500/45">
	<Container className="py-5 bg-theme-surface">
		<div class="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
			<div class="flex items-center gap-x-6">
				<div
					class="bg-theme-primary h-16 w-16 p-1 flex-none rounded-full inline-flex justify-center items-center"
				>
					<Icon
						name={getIcon(data.eventData?.type || '')}
						class="h-12 w-12 fill-theme-primary-content text-theme-primary-content "
					/>
				</div>
				<div>
					<div class=" mt-1 flex items-center">
						<h1 class="text-base font-semibold leading-6 text-theme-content pr-2">
							{data.eventData?.title || 'Event Title'}
						</h1>
						<StatusBadge status={data.eventData?.status} />
					</div>
					<p class="mt-1 text-sm text-theme-secondary-content">{data.eventData?.details}</p>
				</div>
			</div>
			<div class="flex items-center gap-x-4 sm:gap-x-6">
				<a
					href="/"
					class="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
					>Edit</a
				>
			</div>
		</div>
	</Container>
</header>
