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

	console.log(eventType);

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
			<TextInput label="Attendee 1" id="'1'" name="attendee" />
			<TextInput label="Attendee 2" id="'2'" name="attendee" />
			<TextInput label="Attendee 3" id="'3'" name="attendee" />
			<TextInput label="Attendee 4" id="'4'" name="attendee" />
			<TextInput label="Attendee 5" id="'5'" name="attendee" />
		</FormTwoColumn>
		<div class="flex justify-end py-3">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Container>
