<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Tabs from './Tabs.svelte';
	const dispatch = createEventDispatcher();

	export let selectedTimes: { hour: number; minute: number }[] = [];

	let activeTab = 'morning';

	const groupData = {
		morning: 'Morning',
		afternoon: 'Afternoon',
		evening: 'Evening',
	};

	const times = [
		{ title: '7:00 AM', hour: 7, minute: 0, group: 'morning' },
		{ title: '7:30 AM', hour: 7, minute: 30, group: 'morning' },
		{ title: '8:00 AM', hour: 8, minute: 0, group: 'morning' },
		{ title: '8:30 AM', hour: 8, minute: 30, group: 'morning' },
		{ title: '9:00 AM', hour: 9, minute: 0, group: 'morning' },
		{ title: '9:30 AM', hour: 9, minute: 30, group: 'morning' },
		{ title: '10:00 AM', hour: 10, minute: 0, group: 'morning' },
		{ title: '10:30 AM', hour: 10, minute: 30, group: 'morning' },
		{ title: '11:00 AM', hour: 11, minute: 0, group: 'morning' },
		{ title: '11:30 AM', hour: 11, minute: 30, group: 'morning' },
		{ title: '12:00 PM', hour: 12, minute: 0, group: 'afternoon' },
		{ title: '12:30 PM', hour: 12, minute: 30, group: 'afternoon' },
		{ title: '1:00 PM', hour: 13, minute: 0, group: 'afternoon' },
		{ title: '1:30 PM', hour: 13, minute: 30, group: 'afternoon' },
		{ title: '2:00 PM', hour: 14, minute: 0, group: 'afternoon' },
		{ title: '2:30 PM', hour: 14, minute: 30, group: 'afternoon' },
		{ title: '3:00 PM', hour: 15, minute: 0, group: 'afternoon' },
		{ title: '3:30 PM', hour: 15, minute: 30, group: 'afternoon' },
		{ title: '4:00 PM', hour: 16, minute: 0, group: 'afternoon' },
		{ title: '4:30 PM', hour: 16, minute: 30, group: 'afternoon' },
		{ title: '5:00 PM', hour: 17, minute: 0, group: 'evening' },
		{ title: '5:30 PM', hour: 17, minute: 30, group: 'evening' },
		{ title: '6:00 PM', hour: 18, minute: 0, group: 'evening' },
		{ title: '6:30 PM', hour: 18, minute: 30, group: 'evening' },
		{ title: '7:00 PM', hour: 19, minute: 0, group: 'evening' },
		{ title: '7:30 PM', hour: 19, minute: 30, group: 'evening' },
		{ title: '8:00 PM', hour: 20, minute: 0, group: 'evening' },
		{ title: '8:30 PM', hour: 20, minute: 30, group: 'evening' },
		{ title: '9:00 PM', hour: 21, minute: 0, group: 'evening' },
		{ title: '9:30 PM', hour: 21, minute: 30, group: 'evening' },
	];

	const groupNames = Object.keys(groupData).map((key) => ({
		id: key,
		title: groupData[key as keyof typeof groupData],
	}));

	function checked(hour: number, minute: number) {
		if (selectedTimes.some((time) => time.hour === hour && time.minute === minute)) {
			selectedTimes = selectedTimes.filter((time) => time.hour !== hour || time.minute !== minute);
		} else {
			selectedTimes = [...selectedTimes, { hour, minute }];
		}
		dispatch('checked', selectedTimes);
	}

	// $: console.log(selectedTimes);
</script>

<div>
	<p class="sr-only">Pick a time</p>
	<div>
		<Tabs tabs={groupNames} bind:activeTab />
	</div>
	<ul id="timetable" class="grid w-full grid-cols-2 gap-2 mt-5">
		{#each times as timeSlot}
			<li class={timeSlot.group === activeTab ? '' : 'hidden'}>
				<label
					class="flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none border-2 has-[:checked]:border-theme-primary has-[:checked]:bg-theme-primary/30"
				>
					<input
						on:change={() => checked(timeSlot.hour, timeSlot.minute)}
						checked={selectedTimes.some(
							(time) => time.hour === timeSlot.hour && time.minute === timeSlot.minute,
						)}
						type="checkbox"
						class="sr-only"
					/>
					<span>{timeSlot.title}</span>
				</label>
			</li>
		{/each}
	</ul>
</div>
