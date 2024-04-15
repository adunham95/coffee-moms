<script lang="ts">
	export let label: string;
	export let id: string;
	export let type: 'legend' | 'label' = 'label';
</script>

{#if type === 'label'}
	<label for={id} class="block text-sm font-medium leading-6 text-theme-content">{label}</label>
{:else if type === 'legend'}
	<legend class="block text-sm font-medium leading-6 text-theme-content">{label}</legend>
{/if}
