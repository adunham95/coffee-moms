<script lang="ts">
	import Label from './Label.svelte';

	export let label: string | undefined = undefined;
	export let id: string;
	export let value: any = '';
	export let name: string | undefined = undefined;
	export let options: { id: string; label: string; selected?: boolean }[] = [];

	export let required = false;
</script>

<div class={$$props.class}>
	{#if label}
		<Label {label} {id} />
	{/if}
	<select
		{required}
		name={name || id}
		bind:value
		class="block bg-theme-surface w-full rounded-md border-0 px-1.5 py-1.5 text-theme-content shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-theme-secondary-content focus:ring-2 focus:ring-inset focus:ring-theme-brand sm:text-sm sm:leading-6"
	>
		{#each options as option}
			<option>{option.label}</option>
		{/each}
	</select>
</div>
