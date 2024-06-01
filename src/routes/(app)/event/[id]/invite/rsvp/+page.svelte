<script>
	import { enhance } from '$app/forms';
	import Button from '$components/Button.svelte';
	import TextArea from '$components/Inputs/TextArea.svelte';
	import TextInput from '$components/Inputs/TextInput.svelte';
	import Toggle from '$components/Inputs/Toggle.svelte';
	import Heading from '$components/Text/Heading.svelte';
	import icon_logo from '$lib/images/icon-logo-brand.svg';

	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>RSVP | Planner Bee</title>
</svelte:head>

<div class="flex justify-center w-full pb-3">
	<div class="flex-shrink-0">
		<img src={icon_logo} alt="Logo" class="block h-8 w-auto" />
	</div>
</div>
<Heading class="text-center pb-2">RSVP</Heading>

<form method="POST" class=" gap-x-1" use:enhance>
	<TextInput id="event-id" class="hidden" value={data.eventData.id} />
	<TextInput id="attendee-id" class="hidden" value={data.attendeeData?.id} />
	<TextInput
		label="Your Name"
		value={`${data.user?.firstName || ''} ${data.user?.lastName || ''}`}
		id="name"
		class="col-span-2"
	/>
	<TextInput label="Phone Number" value={data.user?.phone} id="phone" class="col-span-2" />
	<Toggle label="Attending" id="attending" class="col-span-2 mt-2" />
	<TextArea label="Details" id="details" placeholder="Food Allergies, etc" class="col-span-2" />
	<div class="pt-2 flex justify-between items-center">
		<a href="/event/{data.eventData.id}/invite" class="text-sm">Back to details</a>
		<Button type="submit">RSVP</Button>
	</div>
</form>
