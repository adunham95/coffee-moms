<script lang="ts">
	import Label from './Label.svelte';

	export let label: string | undefined = undefined;
	export let id: string;
	export let placeholder: string = '';
	export let type: string = 'text';
	export let value: any = '';
	export let name: string | undefined = undefined;
	export let error: string | undefined = undefined;

	export let required = false;

	export let inputRef = null;

	function setType(node: any) {
		node.type = type;
	}
</script>

<div class={$$props.class}>
	{#if label}
		<Label {label} {id} />
	{/if}
	<input
		use:setType
		class="block bg-theme-surface w-full rounded-md border-0 p-1.5 text-theme-content shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-theme-secondary-content focus:ring-2 focus:ring-inset focus:ring-theme-brand sm:text-sm sm:leading-6"
		{id}
		{placeholder}
		{required}
		name={name || id}
		bind:value
		bind:this={inputRef}
	/>
	{#if error}
		<p class="mt-2 text-sm text-red-600">{error}</p>
	{/if}
</div>
