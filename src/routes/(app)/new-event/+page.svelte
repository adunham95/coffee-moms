<script>
	import Container from '../../../components/Container.svelte';
	import RadioBox from '../../../components/Inputs/RadioBox.svelte';
	import FormTwoColumn from '../../../components/PanelLayout/FormTwoColumn.svelte';
	import TwoPanel from '../../../components/PanelLayout/TwoPanel.svelte';
	import TextInput from '../../../components/TextInput.svelte';
</script>

<svelte:head>
	<title>New Event | Coffee Moms</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container className="py-6">
	<FormTwoColumn title="New Event">
		<div>
			<TextInput id="event-name" labelName="Event Name" />
			<RadioBox
				id="event-type"
				labelName="Event Type"
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
</Container>
