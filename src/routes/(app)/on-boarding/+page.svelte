<script>
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import Container from '$components/Container.svelte';
	import TwoColumnShell from '$components/Shell/TwoColumnShell.svelte';
	import Tips from '$components/Tips.svelte';
</script>

<svelte:head>
	<title>New Event | Planner Bee</title>
</svelte:head>

<Container>
	<TwoColumnShell>
		<Card>
			<div class="overflow-hidden rounded-full bg-gray-200">
				<div class="h-2 rounded-full bg-theme-primary" style="width: 37.5%"></div>
			</div>
			<CardContainer>
				<Tips />
				<h1>Hello World</h1>
			</CardContainer>
		</Card>
	</TwoColumnShell>
</Container>
