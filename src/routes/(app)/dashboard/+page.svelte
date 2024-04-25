<script>
	import Container from '$components/Container.svelte';
	import StatBar from '$components/StatBar.svelte';
	import { EStatus } from '$types/EStatus';
	import { generatePageName } from '../../../helpers/generatePageName';
	import EventList from './EventList.svelte';
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
	<EventList
		events={[
			{
				title: 'My first event!',
				status: EStatus.Scheduled,
				recipient: 'Martha Stewert',
				type: 'playground',
			},
			{ title: 'My second event!', status: EStatus.Canceled, recipient: 'Steve', type: 'coffee' },
			{ title: 'Created event!', status: EStatus.Created, recipient: 'Steve', type: 'outdoor' },
			{
				title: 'An event with a really long title',
				status: EStatus.Created,
				recipient: 'Steve',
				type: 'dog-park',
			},
			{
				title: 'Working on it....',
				status: EStatus.Scheduling,
				recipient: 'Steve',
				type: 'dinner',
			},
			{ title: 'Were Done', status: EStatus.Complete, recipient: 'Steve', type: '' },
		]}
	/>
</Container>
