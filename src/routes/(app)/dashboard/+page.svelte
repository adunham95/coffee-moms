<script>
	import Container from '$components/Container.svelte';
	import StatBar from '$components/StatBar.svelte';
	import { EStatus } from '$types/EStatus';
	import EventList from './EventList.svelte';
</script>

<svelte:head>
	<title>Dashboard | Coffee Mom</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container className="py-10">
	<StatBar
		stats={[
			{ stat: '6', title: 'Total Events' },
			{ title: 'Top Type', stat: 'Playground' },
		]}
	/>
	<EventList
		events={[
			{
				title: 'My first event!',
				status: EStatus.Scheduled,
				recipient: 'Martha Stewert',
				type: 'Playground',
			},
			{ title: 'My second event!', status: EStatus.Canceled, recipient: 'Steve', type: 'Coffee' },
			{ title: 'Created event!', status: EStatus.Created, recipient: 'Steve', type: 'Outdoor' },
			{
				title: 'An event with a really long title',
				status: EStatus.Created,
				recipient: 'Steve',
				type: 'Outdoor',
			},
			{ title: 'Working on it....', status: EStatus.Scheduling, recipient: 'Steve', type: '' },
			{ title: 'Were Done', status: EStatus.Complete, recipient: 'Steve', type: '' },
		]}
	/>
</Container>
