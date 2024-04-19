<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let disabled = false;
	export let color: 'brand' | 'accent' | 'danger' = 'brand';
	console.log({ color });
	// TODO generate colors
</script>

<button
	{disabled}
	{type}
	class="{disabled == true
		? 'bg-brand-200 hover:bg-grey-700'
		: 'bg-brand-600 hover:bg-brand-700 focus:ring-2 focus:ring-offset-2 focus:ring-brand-500'} inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none {$$props.class}"
>
	<slot />
</button>
