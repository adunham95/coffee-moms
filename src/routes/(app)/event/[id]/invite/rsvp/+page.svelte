<script>
	import Button from '$components/Button.svelte';
	import TextArea from '$components/Inputs/TextArea.svelte';
	import TextInput from '$components/Inputs/TextInput.svelte';
	import Toggle from '$components/Inputs/Toggle.svelte';
	import Heading from '$components/Text/Heading.svelte';
	import icon_logo from '$lib/images/icon-logo-brand.svg';

	const data = { eventData: { id: 8 } };
</script>

<div class="flex justify-center w-full pb-3">
	<div class="flex-shrink-0">
		<img src={icon_logo} alt="Logo" class="block h-8 w-auto" />
	</div>
</div>
<Heading class="text-center pb-2">RSVP</Heading>

<form class=" gap-x-1">
	<TextInput label="Your Name" id="name" class="col-span-2" />
	<Toggle label="Attending" id="attending" class="col-span-2 mt-2" />
	<TextArea label="Details" id="details" placeholder="Food Allergies, etc" class="col-span-2" />
	<div class="pt-2 flex justify-between items-center">
		<a href="/event/{data.eventData.id}/invite" class="text-sm">Back to details</a>
		<Button>RSVP</Button>
	</div>
</form>
