<script lang="ts">
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import Container from '$components/Container.svelte';
	import Address from '$components/Inputs/Address.svelte';
	import DateInput from '$components/Inputs/DateInput.svelte';
	import RadioBox from '$components/Inputs/RadioBox.svelte';
	import ScheduleInput from '$components/Inputs/ScheduleInput.svelte';
	import TextArea from '$components/Inputs/TextArea.svelte';
	import TextInput from '$components/Inputs/TextInput.svelte';
	import TextInputList from '$components/Inputs/TextInputList.svelte';
	import StepperBar from '$components/Stepper/StepperBar.svelte';
	import StepperHeading from '$components/Stepper/StepperHeading.svelte';
	import Tips from '$components/Tips.svelte';
	import { enhance } from '$app/forms';
	import { eventType } from '$const/event-types';
	import Toggle from '$components/Inputs/Toggle.svelte';

	let step = 'type';

	const steps = ['type', 'guests', 'invitation', 'time', 'details'];

	function gotToNextStep() {
		const id = steps[steps.indexOf(step) + 1];
		if (!id) return;
		step = id;
	}

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

	export let form;

	console.log({ form });
</script>

<svelte:head>
	<title>New Event | Planner Bee</title>
</svelte:head>

<Container>
	<form class="max-w-3xl mx-auto" method="POST" use:enhance action="/new-event">
		<Card class="mt-3">
			<StepperBar width={((steps.indexOf(step) + 1) / steps.length) * 100} />
			<CardContainer>
				<fieldset class={`${step === 'type' ? '' : 'hidden'}`}>
					<StepperHeading title="What type of event is it?" {gotToNextStep} />
					<Tips
						class="mb-2"
						text="First, let’s choose the perfect event type. How about a park day? Host a dinner party or something else?"
					/>
					<RadioBox id="event-type" groupName="event-type" class="pt-2" options={getEventTypes()} />
				</fieldset>
				<fieldset class={step === 'guests' ? '' : 'hidden'}>
					<StepperHeading title="Guests" {gotToNextStep} />
					<Tips
						class="mb-2"
						text="Next, let’s add your guests. You can import contacts or add them manually. The more bees, the merrier! You can send a link to invite them later."
					/>
					<TextInputList placeholder="Phone Number: 1234567890" groupName="attendee" />
				</fieldset>
				<fieldset class={`${step === 'invitation' ? '' : 'hidden'}`}>
					<StepperHeading title="Invitation" {gotToNextStep} />
					<Tips
						class="mb-2"
						text="Now, let’s create an invitation. Add a greeting and a message. You can customize it later."
					/>
					<TextArea id="invite-greeting" label="Invitation Greeting" />
				</fieldset>
				<fieldset class={step === 'time' ? '' : 'hidden'}>
					<StepperHeading title="Time" {gotToNextStep} />
					<Tips
						class="mb-2"
						text="Let’s find the time. Choose a time, or propose some times that work for you."
					/>
					<DateInput id="event-date" label="Date" />
					<ScheduleInput hideHeading />
				</fieldset>
				<fieldset class={step === 'details' ? '' : 'hidden'}>
					<StepperHeading title="Details" {gotToNextStep} buttonType="submit" />
					<Tips
						class="mb-2"
						text="Let’s finalize the details. Choose your location, give it a name, and add some details."
					/>
					<TextInput id="event-name" label="Name" name="event-name" />
					<TextArea id="event-details" label="Details" />
					<Address class="pt-2" />

					<Toggle id="rsvp" class="pt-3" label="RSVP Required" />
				</fieldset>
			</CardContainer>
		</Card>
		<div class="flex justify-end pt-2 text-sm text-theme-primary hover:text-theme-primary-hover">
			<a href="/new-event">Use the Advanced Event Editor</a>
		</div>
	</form>
</Container>
