<script>
	import Container from '../../../components/Container.svelte';
	import RadioBox from '../../../components/Inputs/RadioBox.svelte';
	import FormTwoColumn from '../../../components/PanelLayout/FormTwoColumn.svelte';
	import TwoPanel from '../../../components/PanelLayout/TwoPanel.svelte';
	import TextInput from '../../../components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
</script>

<svelte:head>
	<title>New Event | Coffee Moms</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container className="py-6">
	<form method="POST">
		<FormTwoColumn title="New Event">
			<div>
				<TextInput id="event-name" label="Event Name" name="event-name" />
				<RadioBox
					id="event-type"
					label="Event Type"
					groupName="event-type"
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
		<div class="flex justify-end py-3">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Container>
