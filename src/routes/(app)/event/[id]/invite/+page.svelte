<script lang="ts">
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import Heading from '$components/Text/Heading.svelte';
	import Text from '$components/Text/Text.svelte';
	import icon_logo from '$lib/images/icon-logo-brand.svg';
	import type { PageData } from '../$types';

	export let data: PageData;
	console.log(data);
</script>

<svelte:head>
	<title>Invite | Planner Bee</title>
</svelte:head>

<div class="relative isolate px-6 pt-14 lg:px-8">
	<div
		class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		aria-hidden="true"
	>
		<div
			class="relative -z-10 left-[50%] h-screen w-full -translate-x-1/2"
			style="background: linear-gradient(to right top, #52a890, #009eac, #008ec5, #4576c8, #9052a8);"
		></div>
	</div>

	<div class="flex items-center justify-center">
		<Card>
			<CardContainer>
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
					<div>
						<dd class="mt-3 text-gray-500">
							<span class="block">{data.eventData.locationName}</span>
							{#if data.eventData.street && data.eventData.city && data.eventData.state && data.eventData.zip}
								<span class="block">{data.eventData.street}</span>
								{#if data.eventData.street2}
									<span class="block">{data.eventData.street2}</span>
								{/if}
								<span class="block">
									{data.eventData.city}, {data.eventData.state}, {data.eventData.zip}
								</span>
							{/if}
						</dd>
					</div>
					<div>
						<dd class="mt-3 text-gray-500">
							<p class="block">Something</p>
							<p class="block">Goes</p>
							<p class="block">Here</p>
						</dd>
					</div>
				</dl>
				{#if data.eventData.rsvpEnabled}
					<div class="border rounded border-gray-200 bg-white px-4 py-2 mb-4 max-w-md mx-auto">
						<div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
							<div class="ml-4 mt-4">
								<h3 class="text-base font-semibold leading-6 text-gray-900">RSVP</h3>
								<p class="mt-1 text-sm text-gray-500">
									RSVP to the event so the host know whose you are
								</p>
							</div>
							<div class="ml-4 mt-4 flex-shrink-0">
								<button
									type="button"
									class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									RSVP
								</button>
							</div>
						</div>
					</div>
				{/if}
				{#if data.eventData.availabilityEnabled}
					<div class="border rounded border-gray-200 bg-white px-4 py-2 mb-4 max-w-md mx-auto">
						<div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
							<div class="ml-4 mt-4">
								<h3 class="text-base font-semibold leading-6 text-gray-900">Availability</h3>
								<p class="mt-1 text-sm text-gray-500">Set my availability for the event</p>
							</div>
							<div class="ml-4 mt-4 flex-shrink-0">
								<button
									type="button"
									disabled
									class="relative inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
								>
									Done
								</button>
							</div>
						</div>
					</div>
				{/if}
			</CardContainer>
		</Card>
	</div>
</div>
