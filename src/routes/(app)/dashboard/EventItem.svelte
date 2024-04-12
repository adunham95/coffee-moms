<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import StatusBadge from '$components/StatusBadge.svelte';
	import type { Event } from '$types/Event';
	export let event: Event;
</script>

<div class="col-span-1">
	<h2 class="sr-only">Summary</h2>
	<div class="rounded-lg bg-brand-bg-50 shadow-sm ring-1 ring-gray-900/5">
		<dl class="flex flex-wrap pb-6">
			<div class="flex-auto pl-6 pt-6">
				<dd class="mt-1 text-base font-semibold leading-6 text-gray-900">{event.title}</dd>
			</div>
			<div class="flex-none self-end px-6 pt-4">
				<dt class="sr-only">Status</dt>
				<StatusBadge status={event.status} />
			</div>
			<div class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
				<dt class="flex-none">
					<span class="sr-only">Client</span>
					<Icon name="user" class="h-6 w-5 text-gray-400" />
				</dt>
				<dd class="text-sm font-medium leading-6 text-gray-900">{event.recipient}</dd>
			</div>
			<div class="mt-4 flex w-full flex-none gap-x-4 px-6">
				<dt class="flex-none">
					<span class="sr-only">Due date</span>
					<Icon name="calender" class="h-6 w-5 text-gray-400" />
				</dt>
				<dd class="text-sm leading-6 text-gray-500">
					<!-- <time datetime="2023-01-31">January 31, 2023</time> -->
					Event Date
				</dd>
			</div>
			<div class="mt-4 flex w-full flex-none gap-x-4 px-6">
				<dt class="flex-none">
					<span class="sr-only">Status</span>
					<Icon name="location" class="h-6 w-5 text-gray-400" />
				</dt>
				<dd class="text-sm leading-6 text-gray-500">{event.type || 'Undecided'}</dd>
			</div>
		</dl>
	</div>
</div>
