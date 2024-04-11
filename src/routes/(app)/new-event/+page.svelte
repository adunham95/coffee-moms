<script>
	import Container from '../../../components/Container.svelte';
	import RadioBox from '../../../components/Inputs/RadioBox.svelte';
	import TwoPanel from '../../../components/PanelLayout/TwoPanel.svelte';
	import TextInput from '../../../components/TextInput.svelte';
</script>

<svelte:head>
	<title>New Event | Coffee Moms</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container className="py-6">
	<TwoPanel>
		<h2 class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
			New Event
		</h2>
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
					{ id: 'other', title: 'Other' },
				]}
			/>
		</div>
		<div slot="sidebar">
			<h2 class="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
				Details
			</h2>
			<button
				type="button"
				class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Continue</button
			>
		</div>
	</TwoPanel>
</Container>
