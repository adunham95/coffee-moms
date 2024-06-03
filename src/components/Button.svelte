<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let disabled = false;
	export let style: keyof typeof styles = 'brand';
	export let size: keyof typeof sizes = 'md';
	// console.log({ color });
	// TODO generate colors
	const styles = {
		brand:
			'text-white bg-brand-400 focus:ring-brand-500 hover:bg-brand-700 disabled:bg-brand-200 disabled:hover:bg-grey-700',
		accent: 'text-white',
		info: 'text-white bg-theme-info focus:ring-theme-info hover:bg-theme-info/80',
		success: 'text-white bg-theme-success focus:ring-theme-success hover:bg-theme-success/80',
		error: 'text-white bg-theme-error focus:ring-theme-error hover:bg-theme-error/80',
		warn: 'text-white bg-theme-warn focus:ring-theme-warn hover:bg-theme-warn/80',
		disabled: 'text-white bg-gray-600 focus:ring-gray-600 hover:bg-gray-600/80 cursor-not-allowed',
	};

	const sizes = {
		sm: 'text-sm px-2 py-1',
		md: 'text-base px-4 py-2',
	};

	let displayStyle = styles[style];
	let displaySize = sizes[size];
</script>

<button
	on:click
	{disabled}
	{type}
	class={twMerge(
		displayStyle,
		displaySize,
		'focus:ring-2 focus:ring-offset-2 inline-flex items-center  border border-transparent font-medium rounded-md shadow-sm text-white focus:outline-none',
		$$props.class,
	)}
>
	<slot />
</button>
