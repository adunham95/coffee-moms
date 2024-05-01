<script lang="ts">
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import DescriptionList from '$components/DescriptionList/DescriptionList.svelte';
	import DescriptionListItem from '$components/DescriptionList/DescriptionListItem.svelte';
	import Icon from '$components/Icon.svelte';
	import StatusBadge from '$components/StatusBadge.svelte';
	import { shareOrCopy } from '$helpers/shareOrCopy';
	import type { EStatus } from '$types/EStatus';
	import Container from '../../../../components/Container.svelte';
	import { eventType, getEventName, getIcon } from '../../../../const/event-types';
	import { generatePageName } from '../../../../helpers/generatePageName';
	import type { PageData } from './$types';

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
	<div class=" py-3 grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-6">
		<main class="col-span-2">
			<Card>
				<CardContainer>
					<DescriptionList>
						<DescriptionListItem title="Title">
							{data.eventData.title}
						</DescriptionListItem>
						<DescriptionListItem title="Status">
							<StatusBadge status={data.eventData?.status} />
						</DescriptionListItem>
						<DescriptionListItem title="Type">
							{getEventName(data.eventData.type)}
						</DescriptionListItem>
						<DescriptionListItem title="Details">
							{data.eventData.details}
						</DescriptionListItem>
						<DescriptionListItem title="Attendees">
							<ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
								{#each data.eventData.attendees as attendee}
									<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
										<div class="flex w-0 flex-1 items-center">
											<Icon name="user" class="h-5 w-5 flex-shrink-0 text-gray-400" />

											<div class="ml-4 flex min-w-0 flex-1 gap-2">
												{#if attendee.user.email}
													<span class="truncate font-medium">{attendee.user.email}</span>
												{/if}
												{#if attendee.user.email && attendee.user.phone}
													<span>|</span>
												{/if}

												{#if attendee.user.phone}
													<span class="truncate font-medium">{attendee.user.phone}</span>
												{/if}
											</div>
										</div>
										<div class="ml-4 flex-shrink-0">
											{#if attendee.user.loginToken[0]?.token}
												<button
													on:click={() => handleShare(attendee.user.loginToken[0]?.token)}
													class="font-medium text-indigo-600 hover:text-indigo-500"
												>
													Share link
												</button>
											{/if}
										</div>
									</li>
								{/each}
							</ul>
						</DescriptionListItem>
					</DescriptionList>
				</CardContainer>
			</Card>
		</main>

		<aside class="">
			<!-- Secondary column (hidden on smaller screens) -->
			<Card>
				<CardContainer>
					<div class="flex items-center gap-x-6">
						<div
							class="bg-theme-primary h-16 w-16 p-1 flex-none rounded-full inline-flex justify-center items-center"
						>
							<Icon
								name={getIcon(data.eventData?.type || '')}
								class="h-12 w-12 fill-theme-primary-content text-theme-primary-content "
							/>
						</div>
						<div>
							<div class=" mt-1 flex items-center">
								<h1 class="text-base font-semibold leading-6 text-theme-content pr-2">
									{data.eventData?.title || 'Event Title'}
								</h1>
								<StatusBadge status={data.eventData?.status} />
							</div>
						</div>
					</div>
				</CardContainer>
			</Card>
		</aside>
	</div>
</Container>
