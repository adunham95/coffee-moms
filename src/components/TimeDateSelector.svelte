<script lang="ts">
	import Calender from '$components/Calender.svelte';
	import TimeSelector from '$components/TimeSelector.svelte';

	export let groupName: string;

	const today = new Date();
	let selectedDay = { month: today.getMonth(), day: today.getDate(), year: today.getFullYear() };

	let data: Record<string, { hour: number; minute: number }[]> = {};

	$: console.log({ selectedDay, data: JSON.stringify(data) });
	$: list = generateList(data);

	function generateList(data: { [key: string]: { hour: number; minute: number }[] }) {
		const result: Date[] = [];
		for (const [key, times] of Object.entries(data)) {
			times.forEach((time) => {
				const [dayNumber, month, year] = key.split('-');
				const dateData = new Date(+year, +month - 1, +dayNumber, time.hour, time.minute);
				result.push(dateData);
			});
		}
		return result;
	}
</script>

<div class="@container">
	<div class="grid @md:grid-cols-2 grid-cols-1 justify-center items-center">
		<Calender bind:selectedDay class="@md:max-w-m w-full" />
		<TimeSelector
			selectedTimes={data[`${selectedDay.month}-${selectedDay.day}-${selectedDay.year}`] || []}
			on:checked={(times) => {
				console.log({ times });
				data[`${selectedDay.month}-${selectedDay.day}-${selectedDay.year}`] = times.detail;
			}}
		/>
		<ul class="hidden">
			{#each list as time}
				<li>
					<input class="w-full" disabled name={groupName} type="datetime" value={time} />
				</li>
			{/each}
		</ul>
	</div>
</div>
