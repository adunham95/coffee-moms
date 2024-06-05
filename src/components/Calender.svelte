<script lang="ts">
	import { generateCalender } from '$helpers/generateCalender';
	import { twMerge } from 'tailwind-merge';

	const today = new Date();
	export let currentYear: number = today.getFullYear();
	export let currentMonth: number = today.getMonth();

	// console.log({ currentYear, currentMonth, currentDate: today.getDate() });

	export let selectedDay = { month: currentMonth, day: today.getDate(), year: currentYear };

	$: calenderArray = generateCalender(currentMonth, currentYear);

	// $: console.log(selectedDay);

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const goToMonth = (type: 'next' | 'prev') => {
		if (type === 'next') {
			if (currentMonth === 11) {
				currentMonth = 0;
				currentYear++;
			} else {
				currentMonth++;
			}
		} else if (type === 'prev') {
			if (currentMonth === 0) {
				currentMonth = 11;
				currentYear--;
			} else {
				currentMonth--;
			}
		}
	};
</script>

<div class={twMerge(`max-w-md`, $$props.class)}>
	<div class="flex items-center px-3">
		<h2 class="flex-auto text-sm font-semibold text-gray-900">
			{monthNames[currentMonth]}
			{currentYear}
		</h2>
		<button
			type="button"
			on:click={() => goToMonth('prev')}
			class="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Previous month</span>
			<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<button
			type="button"
			on:click={() => goToMonth('next')}
			class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
		>
			<span class="sr-only">Next month</span>
			<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	<div class="mt-5 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
		<div>M</div>
		<div>T</div>
		<div>W</div>
		<div>T</div>
		<div>F</div>
		<div>S</div>
		<div>S</div>
	</div>
	<div class="mt-2 grid grid-cols-7 text-sm">
		{#each calenderArray as date}
			<div class="py-2">
				<button
					type="button"
					on:click={() => (selectedDay = { day: date.day, month: date.month, year: date.year })}
					disabled={date.monthType !== 'current'}
					class={twMerge(
						date.monthType === 'current' ? 'text-gray-900 hover:bg-gray-200' : 'text-gray-400',
						selectedDay.day === date.day && selectedDay.month === date.month
							? 'bg-theme-primary hover:bg-theme-primary-hover text-white'
							: '',
						'mx-auto flex h-8 w-8 items-center justify-center rounded-full  ',
					)}
				>
					<time datetime={`${date.year}-${date.month + 1}-${date.day}'`}>{date.day}</time>
				</button>
			</div>
		{/each}
	</div>
</div>
