<script>
	import Heading from '$components/Text/Heading.svelte';
	import TextInputList from './TextInputList.svelte';
</script>

<div>
	<Heading tag="h3" variant="h3">Add Time Preferences</Heading>
	<!-- TODO Add min time of toady -->
	<TextInputList inputType="datetime-local" groupName="time-preference" />
</div>
