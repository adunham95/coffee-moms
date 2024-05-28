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
	import Toggle from '$components/Inputs/Toggle.svelte';
	import RadioBoxList from '$components/Inputs/RadioBoxList.svelte';
	import DualTextInputList from '$components/Inputs/DualTextInputList.svelte';

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
				<RadioBoxList
					class="pt-2"
					id="security-settings"
					groupName="security-settings"
					label="Security Settings"
					options={[
						{
							id: 'invite-link',
							title: 'Public',
							subtitle: 'This event would be available to anyone who has the link',
							checked: true,
						},
						{
							id: 'attendee-only',
							title: 'Attendee Only',
							subtitle: 'Only attendees of this event would be able to access',
						},
						{
							id: 'private',
							title: 'Private',
							subtitle: 'Only you have access to this event',
						},
					]}
				/>
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
		<!-- <FormTwoColumn title="Sign Ups" class="pt-4">
			<DualTextInputList />
		</FormTwoColumn> -->
		<div class="flex justify-end py-3">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Container>
