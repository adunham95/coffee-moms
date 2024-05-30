<script>
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
	<div
		class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		aria-hidden="true"
	>
		<div
			class="relative -z-10 left-[50%] h-screen w-full -translate-x-1/2"
			style="background: linear-gradient(to right top, #52a890, #009eac, #008ec5, #4576c8, #9052a8);"
		></div>
	</div>

	<div class="flex items-center justify-center">
		<Card class="min-w-[500px]">
			<CardContainer>
				<slot />
			</CardContainer>
		</Card>
	</div>
</div>
