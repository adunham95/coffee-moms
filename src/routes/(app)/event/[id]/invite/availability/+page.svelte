<script>
	import Button from '$components/Button.svelte';
	import Heading from '$components/Text/Heading.svelte';
	import Text from '$components/Text/Text.svelte';
	import icon_logo from '$lib/images/icon-logo-brand.svg';

	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>Availability | Planner Bee</title>
</svelte:head>

<div class="flex justify-center w-full pb-3">
	<div class="flex-shrink-0">
		<img src={icon_logo} alt="Logo" class="block h-8 w-auto" />
	</div>
</div>
<Heading class="text-center pb-2">Select Availability</Heading>
<Text class="text-center pb-2">Select the best time(s) that work for you</Text>

<form class=" gap-x-1">
	<div class="divide-y divide-gray-200">
		{#each data.availabilityData as item}
			<div class="relative flex items-start pb-4 pt-3.5">
				<div class="min-w-0 flex-1 text-sm leading-6">
					<label for={item.id.toString()} class="font-medium text-gray-900"
						><time>{item.date}</time></label
					>
				</div>
				<div class="ml-3 flex h-6 items-center">
					<input
						id={item.id.toString()}
						aria-describedby="comments-description"
						name="comments"
						type="checkbox"
						class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
				</div>
			</div>
		{/each}
	</div>
	<div class="pt-2 flex justify-between items-center">
		<a href="/event/{data.eventData.id}/invite" class="text-sm">Back to details</a>
		<Button>Select</Button>
	</div>
</form>
