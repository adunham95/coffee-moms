<script lang="ts">
	import type { Event } from '$types/Event';
	import EventItem from './EventItem.svelte';
	export let events: Event[] = [];
</script>

<ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
	{#each events as event}
		<EventItem {event} />
	{/each}
</ul>
