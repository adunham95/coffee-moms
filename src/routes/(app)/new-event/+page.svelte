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
	import DateInput from '$components/Inputs/DateInput.svelte';
	import ScheduleInput from '$components/Inputs/ScheduleInput.svelte';
	import TextInputList from '$components/Inputs/TextInputList.svelte';
	import Heading from '$components/Text/Heading.svelte';
	import Address from '$components/Inputs/Address.svelte';

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
				<DateInput id="event-date" label="Date" />
				<RadioBox
					id="event-type"
					label="Event Type"
					groupName="event-type"
					class="pt-2"
					options={getEventTypes()}
				/>
				<Address class="pt-2" />
			</div>
		</FormTwoColumn>
		<FormTwoColumn title="Attendees" class="pt-4">
			<div>
				<Heading tag="h3" variant="h3">Add Attendees</Heading>
				<TextInputList placeholder="Phone Number: 1234567890" groupName="attendee" />
			</div>
		</FormTwoColumn>
		<FormTwoColumn title="Proposed Times" class="pt-4">
			<ScheduleInput />
		</FormTwoColumn>
		<div class="flex justify-end py-3">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Container>
