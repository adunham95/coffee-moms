<script lang="ts">
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import DescriptionList from '$components/DescriptionList/DescriptionList.svelte';
	import DescriptionListItem from '$components/DescriptionList/DescriptionListItem.svelte';
	import EventSidecar from '$components/EventSidecar.svelte';
	import Icon from '$components/Icon.svelte';
	import TwoColumnShell from '$components/Shell/TwoColumnShell.svelte';
	import StatusBadge from '$components/StatusBadge.svelte';
	import { shareOrCopy } from '$helpers/shareOrCopy';
	import type { EStatus } from '$types/EStatus';
	import Container from '../../../../components/Container.svelte';
	import { getEventName } from '../../../../const/event-types';
	import { generatePageName } from '../../../../helpers/generatePageName';
	import type { PageData } from './$types';
	import { browser } from '$app/environment';

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
	<div>
		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
			<Card>
				<CardContainer>
					<dt class="truncate text-sm font-medium text-theme-secondary-content">Total Guests</dt>
					<dd class="mt-1 text-3xl font-semibold tracking-tight text-theme-content">
						{data.eventData.attendees.length}
					</dd>
				</CardContainer>
			</Card>
			<!-- <Card>
				<CardContainer>
					<dt class="truncate text-sm font-medium text-theme-secondary-content">Avg. Open Rate</dt>
					<dd class="mt-1 text-3xl font-semibold tracking-tight text-theme-content">58.16%</dd>
				</CardContainer>
			</Card>
			<Card>
				<CardContainer>
					<dt class="truncate text-sm font-medium text-theme-secondary-content">Avg. Click Rate</dt>
					<dd class="mt-1 text-3xl font-semibold tracking-tight text-theme-content">24.57%</dd>
				</CardContainer>
			</Card> -->
		</dl>
	</div>

	<TwoColumnShell>
		<Card>
			<CardContainer>
				<div class="border-b border-gray-200">
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
					<div class="mt-3 sm:mt-4">
						<div class="block">
							<nav class="-mb-px flex space-x-8">
								<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->

								<a
									href="#"
									class=" border-theme-primary text-theme-primary whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
									aria-current="page">Details</a
								>
								<a
									href="#"
									class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
									>Guests</a
								>
								<a
									href="#"
									class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
									>Invitation</a
								>
							</nav>
						</div>
					</div>
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
