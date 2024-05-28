<script lang="ts">
	import Accordion from '$components/Accordion.svelte';
	import Card from '$components/Card/Card.svelte';
	import CardContainer from '$components/Card/CardContainer.svelte';
	import Container from '$components/Container.svelte';
	import DescriptionList from '$components/DescriptionList/DescriptionList.svelte';
	import DescriptionListItem from '$components/DescriptionList/DescriptionListItem.svelte';
	import EventSidecar from '$components/EventSidecar.svelte';
	import TwoColumnShell from '$components/Shell/TwoColumnShell.svelte';
	import { getEventName } from '$const/event-types';
	import type { EStatus } from '$types/EStatus';
	import type { PageData } from '../$types';

	type CustomPageData = PageData & {
		eventData: {
			status: EStatus;
		};
	};

	export let data: CustomPageData;
	console.log(data);
</script>

<Container>
	<TwoColumnShell>
		<Card>
			<CardContainer>
				<DescriptionList>
					<DescriptionListItem title="Title">
						{data.eventData.title}
					</DescriptionListItem>
					<DescriptionListItem title="Type">
						{getEventName(data.eventData.type)}
					</DescriptionListItem>
					<DescriptionListItem title="Details">
						{data.eventData.details}
					</DescriptionListItem>
				</DescriptionList>
			</CardContainer>
		</Card>
		<div slot="aside">
			<Card>
				<CardContainer>
					<EventSidecar title={data.eventData.title} type={data.eventData.type} showStatus={false}>
						<dl class="space-y-4 divide-y divide-gray-900/10">
							{#if data.eventData.rsvpEnabled}
								<Accordion title="RSVP">
									<h1>RSVP</h1>
								</Accordion>
							{/if}

							{#if data.eventData.availabilityEnabled}
								<Accordion title="Set Availability">
									<h1>Sign Up</h1>
								</Accordion>
							{/if}
						</dl>
					</EventSidecar>
				</CardContainer>
			</Card>
		</div>
	</TwoColumnShell>
</Container>
