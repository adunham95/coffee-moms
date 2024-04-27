<script lang="ts">
	import Container from '../../../components/Container.svelte';
	import RadioBox from '../../../components/Inputs/RadioBox.svelte';
	import FormTwoColumn from '../../../components/PanelLayout/FormTwoColumn.svelte';
	import TextInput from '../../../components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import TextArea from '$components/Inputs/TextArea.svelte';
	import { generatePageName } from '$helpers/generatePageName';
	import { enhance } from '$app/forms';
	import { eventType } from '../../../const/event-types';

	let array = [1];

	const getEventTypes = (): {
		id: string;
		title: string;
		value: string | undefined;
		checked: boolean | undefined;
	}[] => {
		return eventType.map((type) => {
			return { id: type.id, title: type.title, value: undefined, checked: type.checked || false };
		});
	};

	const addItem = () => {
		console.log('add items');
		array = [...array, array.length + 1];
	};
</script>

<svelte:head>
	<title>{generatePageName('New Event')}</title>
</svelte:head>

<Container className="py-6">
	<form method="POST" use:enhance>
		<FormTwoColumn title="New Event">
			<div>
				<TextInput id="event-name" label="Name" name="event-name" />
				<TextArea id="event-details" label="Details" />
				<RadioBox
					id="event-type"
					label="Event Type"
					groupName="event-type"
					class="pt-2"
					options={getEventTypes()}
				/>
			</div>
		</FormTwoColumn>
		<FormTwoColumn title="Attendee">
			{#each array as item, index}
				<TextInput label={`New Attendee`} id={`${item}`} name="attendee" />
			{/each}
			<Button on:click={addItem} class="mt-3 w-full justify-center">Add Attendee</Button>
		</FormTwoColumn>
		<div class="flex justify-end py-3">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Container>
