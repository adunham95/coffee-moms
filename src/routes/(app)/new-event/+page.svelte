<script>
	import Container from '../../../components/Container.svelte';
	import RadioBox from '../../../components/Inputs/RadioBox.svelte';
	import FormTwoColumn from '../../../components/PanelLayout/FormTwoColumn.svelte';
	import TwoPanel from '../../../components/PanelLayout/TwoPanel.svelte';
	import TextInput from '../../../components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import TextArea from '$components/Inputs/TextArea.svelte';
	import { generatePageName } from '../../../helpers/generatePageName';
</script>

<svelte:head>
	<title>{generatePageName('New Event')}</title>
</svelte:head>

<Container className="py-6">
	<form method="POST">
		<FormTwoColumn title="New Event">
			<div>
				<TextInput id="event-name" label="Name" name="event-name" />
				<TextArea id="event-details" label="Details" />
				<RadioBox
					id="event-type"
					label="Event Type"
					groupName="event-type"
					class="pt-2"
					options={[
						{ id: 'park', title: 'Park' },
						{ id: 'coffee', title: 'Coffee' },
						{ id: 'playground', title: 'Playground' },
						{ id: 'dinner', title: 'Dinner' },
						{ id: 'other', title: 'Other', checked: true },
					]}
				/>
			</div>
		</FormTwoColumn>
		<FormTwoColumn title="Availability">
			<TextInput id="ava-1" label="Date" name="availability" />
			<TextInput id="ava-2" label="Date" name="availability" />
			<TextInput id="ava-3" label="Date" name="availability" />
			<TextInput id="ava-4" label="Date" name="availability" />
			<TextInput id="ava-5" label="Date" name="availability" />
			<TextInput id="ava-6" label="Date" name="availability" />
		</FormTwoColumn>
		<div class="flex justify-end py-3">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Container>
