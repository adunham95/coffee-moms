<script lang="ts">
	import Container from '$components/Container.svelte';
	import StatBar from '$components/StatBar.svelte';
	import { EStatus } from '$types/EStatus';
	import { generatePageName } from '../../../helpers/generatePageName';
	import EventList from './EventList.svelte';
	import type { PageData } from './$types';
	import type { Event } from '$types/Event';

	type CustomPageData = PageData & {
		events: Event[];
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
	<EventList events={data.events} />
</Container>
