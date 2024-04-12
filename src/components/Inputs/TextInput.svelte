<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let id: string;
	export let placeholder: string = '';
	export let type: string = 'text';
	export let value: any = '';
	export let name: string;

	export let required = false;

	export let inputRef = null;

	function setType(node: any) {
		node.type = type;
	}
</script>

<div class="mt-2 {$$props.class}">
	<Label {label} {id} />
	<input
		use:setType
		class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
		{id}
		{placeholder}
		{required}
		name={name || id}
		bind:value
		bind:this={inputRef}
	/>
</div>
