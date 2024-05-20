<script lang="ts">
	import Container from '$components/Container.svelte';
	import StatBar from '$components/StatBar.svelte';
	import { EStatus } from '$types/EStatus';
	import { generatePageName } from '../../../helpers/generatePageName';
	import type { PageData } from './$types';
	import type { Event } from '$types/Event';
	import EmptyEvent from '$components/EmptyEvent.svelte';
	import EventCard from '$components/EventCard/EventCard.svelte';

	type CustomPageData = PageData & {
		events: [{ status: EStatus }];
		attendeeEvents: [
			{
				event: {
					status: EStatus;
				};
			},
		];
	};

	export let data: CustomPageData;
	console.log(data);
</script>

<svelte:head>
	<title>{generatePageName('Dashboard')}</title>
</svelte:head>

<Container className="py-10">
	<div class="pb-4">
		<StatBar
			stats={[
				{ title: 'Next Event', stat: 'Tomorrow' },
				{ stat: '6', title: 'Total Events' },
				{ title: 'Top Type', stat: 'Playground' },
			]}
		/>
	</div>
	{#if data.events.length <= 0}
		<EmptyEvent />
	{/if}

	<div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
		{#each data?.attendeeEvents as attendeeEvent}
			<EventCard {...attendeeEvent.event} />
		{/each}
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
		{#each data.events as event}
			<EventCard {...event} />
		{/each}
	</div>
</Container>
