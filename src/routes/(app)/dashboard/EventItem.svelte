<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import Card from '$components/Card/Card.svelte';
	import StatusBadge from '$components/StatusBadge.svelte';
	import type { Event } from '$types/Event';
	import { getEventName, getIcon } from '$const/event-types';
	export let event: Event;
</script>

<div class="col-span-1">
	<h2 class="sr-only">Summary</h2>
	<Card>
		<div slot="header" class="flex flex-wrap pb-6 p-0">
			<div class="flex-auto pl-6 pt-6">
				<dd class="mt-1 text-base font-semibold leading-6 text-theme-content">{event.title}</dd>
			</div>
			<div class="flex-none self-end px-6 pt-4">
				<dt class="sr-only">Status</dt>
				<StatusBadge status={event.status} />
			</div>
		</div>

		<dl class="flex flex-wrap pb-6">
			<div class="mt-4 flex w-full flex-none gap-x-4 px-6">
				<dt class="flex-none">
					<span class="sr-only">Event Type</span>
					<Icon
						name={getIcon(event.type || '')}
						class="h-6 w-6 fill-theme-secondary-content text-theme-secondary-content"
					/>
				</dt>
				<dd class="text-sm font-medium leading-6 text-theme-secondary-content">
					{getEventName(event.type)}
				</dd>
			</div>
			<div class="mt-4 flex w-full flex-none gap-x-4 px-6">
				<dt class="flex-none">
					<span class="sr-only">Cleient</span>
					<Icon name="user" class="h-6 w-5 text-theme-secondary-content" />
				</dt>
				<dd class="text-sm font-medium leading-6 text-theme-secondary-content">
					{event.recipient}
				</dd>
			</div>
			<div class="mt-4 flex w-full flex-none gap-x-4 px-6">
				<dt class="flex-none">
					<span class="sr-only">Due date</span>
					<Icon name="calender" class="h-6 w-5 text-theme-secondary-content" />
				</dt>
				<dd class="text-sm leading-6 text-theme-secondary-content">
					<!-- <time datetime="2023-01-31">January 31, 2023</time> -->
					Event Date
				</dd>
			</div>
			<div class="mt-4 flex w-full flex-none gap-x-4 px-6">
				<dt class="flex-none">
					<span class="sr-only">Status</span>
					<Icon name="location" class="h-6 w-5 text-theme-secondary-content" />
				</dt>
				<dd class="text-sm leading-6 text-theme-secondary-content">{event.type || 'Undecided'}</dd>
			</div>
		</dl>
	</Card>
</div>
