<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import StatusBadge from '$components/StatusBadge.svelte';
	import type { EStatus } from '$types/EStatus';
	import EventStatusBar from './EventStatusBar.svelte';
	import { getEventName, getIcon } from '$const/event-types';

	export let title: string;
	export let description: string;
	export let status: EStatus;
	export let type: string | undefined;
</script>

<div class="container border-b border-t border-gray-200 bg-white shadow-sm rounded-lg border mb-1">
	<div class="px-4 py-6 @sm:px-6 @lg:grid @lg:grid-cols-12 @lg:gap-x-8 @lg:p-8">
		<div class="flex @lg:col-span-7">
			<div
				class="aspect-h-1 aspect-w-1 flex-shrink-0 overflow-hidden rounded-lg aspect-none h-20 w-20"
			>
				<Icon
					name={getIcon(type || '')}
					class="object-cover object-center h-full w-full fill-theme-secondary-content text-theme-secondary-content"
				/>
			</div>

			<div class="mt-6 ml-6 @sm:mt-0">
				<h3 class="text-base font-medium text-gray-900">
					<a href="#">{title}</a>
				</h3>
				<StatusBadge {status} />
				<p class="mt-3 text-sm text-gray-500">
					{description}
				</p>
			</div>
		</div>

		<div class="mt-6 @lg:col-span-5 @lg:mt-0">
			<dl class="grid grid-cols-2 gap-x-6 text-sm">
				<div>
					<dt class="font-medium text-gray-900">Delivery address</dt>
					<dd class="mt-3 text-gray-500">
						<span class="block">Floyd Miles</span>
						<span class="block">7363 Cynthia Pass</span>
						<span class="block">Toronto, ON N3Y 4H8</span>
					</dd>
				</div>
				<div>
					<dt class="font-medium text-gray-900">Shipping updates</dt>
					<dd class="mt-3 space-y-3 text-gray-500">
						<p>f•••@example.com</p>
						<p>1•••••••••40</p>
						<button type="button" class="font-medium text-indigo-600 hover:text-indigo-500"
							>Edit</button
						>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>
