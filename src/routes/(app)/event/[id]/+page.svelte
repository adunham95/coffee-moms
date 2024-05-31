<script lang="ts">
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import DescriptionList from '$components/DescriptionList/DescriptionList.svelte';
	import DescriptionListItem from '$components/DescriptionList/DescriptionListItem.svelte';
	import EventSidecar from '$components/EventSidecar.svelte';
	import TwoColumnShell from '$components/Shell/TwoColumnShell.svelte';
	import StatusBadge from '$components/StatusBadge.svelte';
	import { shareOrCopy } from '$helpers/shareOrCopy';
	import type { EStatus } from '$types/EStatus';
	import Container from '../../../../components/Container.svelte';
	import { generatePageName } from '../../../../helpers/generatePageName';
	import type { PageData } from './$types';
	import { browser } from '$app/environment';
	import AddressDisplay from '$components/AddressDisplay.svelte';
	import Tabs from '$components/Tabs.svelte';
	import TabContent from '$components/TabContent.svelte';
	import GuestTable from '$components/GuestTable.svelte';

	let activeTab = 'details';

	type CustomPageData = PageData & {
		eventData: {
			status: EStatus;
		};
	};

	export let data: CustomPageData;
	console.log(data);

	function handleShare(loginToken: string) {
		const url = `/login/${loginToken}`;
		shareOrCopy({
			title: 'Login Link',
			text: 'Login with this link to add your availability',
			url,
		});
	}
</script>

<svelte:head>
	<title>{generatePageName('Event')}</title>
</svelte:head>

<Container>
	<div class="sm:py-5 pt-2">
		<div
			class="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 rounded-sm sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5"
		>
			<div class="">
				<p class="text-xl leading-6 text-white">Level up your event</p>
				<p class="text-sm leading-6 text-white">
					<a href="#">With add on such as sign up, RSVP, etc..</a>
				</p>
			</div>
		</div>
	</div>
	<TwoColumnShell>
		<Card>
			<CardContainer>
				<div class="">
					<div class="sm:flex sm:items-baseline sm:justify-between">
						<div class="sm:w-0 sm:flex-1">
							<h1 id="message-heading" class="text-base font-semibold leading-6 text-gray-900">
								{data.eventData.title}
							</h1>
							<p class="mt-1 truncate text-sm text-gray-500">{data.eventData.details}</p>
						</div>

						<div
							class="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start"
						>
							<StatusBadge status={data.eventData?.status} />
						</div>
					</div>
					<Tabs
						tabs={[
							{ id: 'details', title: 'Details' },
							{ id: 'attendees', title: 'Guests' },
						]}
						bind:activeTab
					/>
					<TabContent bind:activeTab tabId="details">
						<DescriptionList>
							<DescriptionListItem title="Location">
								<AddressDisplay
									hideTitle
									locationName={data.eventData.locationName}
									street={data.eventData.street}
									street2={data.eventData.street2}
									city={data.eventData.city}
									state={data.eventData.state}
									zip={data.eventData.zip}
								/>
							</DescriptionListItem>
						</DescriptionList>
					</TabContent>
					<TabContent bind:activeTab tabId="attendees">
						<GuestTable
							guests={data.eventData.attendees.map((attendee) => {
								return {
									name: attendee.user.firstName + ' ' + attendee.user.lastName,
									email: attendee.user.email,
									phone: attendee.user.phone,
								};
							})}
						/>
					</TabContent>
				</div>
			</CardContainer>
		</Card>
		<div slot="aside">
			<!-- Secondary column (hidden on smaller screens) -->
			<Card>
				<CardContainer>
					<EventSidecar title={data.eventData.title} type={data.eventData.type} />
				</CardContainer>
			</Card>

			<Card class="mt-2">
				<CardContainer>
					<div class="flex items-center text-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-[1em] 2-[1em]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
							/>
						</svg>
						<p class="ml-1 font-bold">Share Your Event</p>
					</div>
					<div class="my-2 w-full border-t border-gray-300"></div>
					<div>
						<p>Event Url</p>
						{#if browser}
							<p class="w-full bg-brand-200 rounded p-2">
								{`${window.location.hostname}:${window.location.port}/event/${data.eventData.id}/invite`}
							</p>
						{/if}
					</div>
				</CardContainer>
			</Card>
		</div>
	</TwoColumnShell>
</Container>
