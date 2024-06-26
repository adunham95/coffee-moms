<script lang="ts">
	import AddressDisplay from '$components/AddressDisplay.svelte';
	import Button from '$components/Button.svelte';
	import Dialog from '$components/Dialog.svelte';
	import Heading from '$components/Text/Heading.svelte';
	import Text from '$components/Text/Text.svelte';
	import SignInUp from '$components/auth/SignInUp.svelte';
	import icon_logo from '$lib/images/icon-logo-brand.svg';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);

	let dialog: any;
</script>

<svelte:head>
	<title>Invite | Planner Bee</title>
</svelte:head>

<div class="flex justify-center w-full pb-3">
	<div class="flex-shrink-0">
		<img src={icon_logo} alt="Logo" class="block h-8 w-auto" />
	</div>
</div>
<Heading class="text-center pb-2">Your Invited</Heading>
<Text class="pb-2 max-w-md mx-auto">
	{data.eventData.invitationGreeting}
</Text>
<dl class="grid grid-cols-2 gap-x-6 text-sm mb-4">
	<AddressDisplay
		locationName={data.eventData.locationName}
		street={data.eventData.street}
		street2={data.eventData.street2}
		city={data.eventData.city}
		state={data.eventData.state}
		zip={data.eventData.zip}
	/>
	<div>
		<dd class="mt-3 text-gray-500">
			<p class="block">Something</p>
			<p class="block">Goes</p>
			<p class="block">Here</p>
		</dd>
	</div>
</dl>
{#if !data.user}
	<div class="border rounded border-gray-200 bg-white px-4 py-2 mb-4 max-w-md mx-auto">
		<div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-4">
				<h3 class="text-base font-semibold leading-6 text-gray-900">Login</h3>
				<p class="mt-1 text-sm text-gray-500">Login or create an account</p>
			</div>
			<div class="ml-4 mt-4 flex-shrink-0">
				<button
					on:click={() => dialog.showModal()}
					type="button"
					class="relative inline-flex items-center rounded-md bg-theme-success px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-primary-hover focus-visible:the focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-primary"
				>
					Login
				</button>
			</div>
		</div>
	</div>
	<Dialog bind:dialog on:close={() => console.log('closed')}>
		<SignInUp
			afterAction={() => {
				dialog.close();
			}}
		/>
	</Dialog>
{/if}
{#if data.user}
	<div class="border rounded border-gray-200 bg-white px-4 py-2 mb-4 max-w-md mx-auto">
		<div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-4">
				<h3 class="text-base font-semibold leading-6 text-gray-900">Save</h3>
				<p class="mt-1 text-sm text-gray-500">Save this event to my account</p>
			</div>
			<div class="ml-4 mt-4 flex-shrink-0">
				<form method="POST" action="?/save">
					<input type="hidden" name="eventId" value={data.eventData.id} />

					{#if data.attendeeData?.id}
						<Button disabled style="success" size="sm" class="font-semibold">Saved</Button>
					{:else}
						<Button size="sm" type="submit">Save</Button>
					{/if}
				</form>
			</div>
		</div>
	</div>
{/if}
{#if data.eventData.rsvpEnabled}
	<div class="border rounded border-gray-200 bg-white px-4 py-2 mb-4 max-w-md mx-auto">
		<div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-4">
				<h3 class="text-base font-semibold leading-6 text-gray-900">RSVP</h3>
				<p class="mt-1 text-sm text-gray-500">RSVP to the event so the host know whose you are</p>
			</div>
			<div class="ml-4 mt-4 flex-shrink-0">
				{#if (data.attendeeData?.rsvp?.length || 0) > 0}
					<a
						href={`/event/${data.eventData.id}/invite/rsvp`}
						type="button"
						class="relative inline-flex items-center rounded-md bg-theme-success px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-success-secondary-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-primary"
					>
						Edit
					</a>
				{:else}
					<a
						href={`/event/${data.eventData.id}/invite/rsvp`}
						type="button"
						class="relative inline-flex items-center rounded-md bg-theme-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-primary"
					>
						RSVP
					</a>
				{/if}
			</div>
		</div>
	</div>
{/if}
{#if data.eventData.availabilityEnabled}
	<div class="border rounded border-gray-200 bg-white px-4 py-2 mb-4 max-w-md mx-auto">
		<div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-4">
				<h3 class="text-base font-semibold leading-6 text-gray-900">Availability</h3>
				<p class="mt-1 text-sm text-gray-500">
					Check the host's availability and select the best or add your own
				</p>
			</div>
			<div class="ml-4 mt-4 flex-shrink-0">
				<a
					href={`/event/${data.eventData.id}/invite/availability`}
					type="button"
					class="relative inline-flex items-center rounded-md bg-theme-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-primary hover:bg-theme-primary-hover"
				>
					Check
				</a>
			</div>
		</div>
	</div>
{/if}
