<script lang="ts">
	import Label from './Inputs/Label.svelte';

	export let labelName: string;
	export let id: string;
	export let placeholder: string = '';
	export let type: string = 'text';
</script>

<div class="mt-2">
	<Label {labelName} {id} />
	<input
		name={id}
		class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
		{type}
		{id}
		{placeholder}
	/>
</div>
