<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let id: string;
	export let placeholder: string = '';
	export let type: string = 'text';
	export let value: any = '';
	export let name: string | undefined = undefined;
	export let cols: number = 3;

	export let required = false;

	export let inputRef = null;
</script>

<div class="mt-2 {$$props.class}">
	<Label {label} {id} />
	<textarea
		class="block bg-theme-surface w-full rounded-md border-0 p-1.5 text-theme-content shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-theme-secondary-content focus:ring-2 focus:ring-inset focus:ring-theme-brand sm:text-sm sm:leading-6"
		{id}
		{placeholder}
		{required}
		{cols}
		name={name || id}
		bind:value
		bind:this={inputRef}
	/>
</div>
