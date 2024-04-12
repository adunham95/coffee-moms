<script>
	import Container from '../../../components/Container.svelte';
	import EventList from './EventList.svelte';
</script>

<svelte:head>
	<title>Dashboard | Coffee Mom</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container className="py-10">
	<EventList />
</Container>
