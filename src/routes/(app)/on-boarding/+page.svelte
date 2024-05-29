<script>
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import Container from '$components/Container.svelte';
	import TwoColumnShell from '$components/Shell/TwoColumnShell.svelte';
	import StepperBar from '$components/Stepper/StepperBar.svelte';
	import StepperList from '$components/Stepper/StepperList.svelte';
	import Tips from '$components/Tips.svelte';
</script>

<svelte:head>
	<title>New Event | Planner Bee</title>
</svelte:head>

<Container>
	<Card class="mt-3 max-w-3xl mx-auto">
		<StepperBar width={22} />
		<CardContainer>
			<Tips
				class="mb-2"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique
                veniam quo totam eius aperiam dolorum."
			/>
			<h1>Hello World</h1>
		</CardContainer>
	</Card>
</Container>
