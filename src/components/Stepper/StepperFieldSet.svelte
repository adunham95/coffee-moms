<script lang="ts">
	import Heading from '$components/Text/Heading.svelte';

	export let title: string;
	export let enabled = false;
	export let buttonType: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let gotToNextStep = () => {};
	export let gotToPreviousStep = () => {};
	export let previousDisabled = false;
</script>

<fieldset class={`${enabled ? '' : 'hidden'}`}>
	<div class="pb-2 flex items-center justify-between">
		<Heading tag="legend" variant="h2" class="inline-flex">{title}</Heading>
	</div>
	<slot />
	<div class="flex justify-between mt-1">
		<button
			on:click={gotToPreviousStep}
			type={buttonType}
			disabled={previousDisabled}
			class="inline-flex items-center rounded-md bg-theme-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-theme-primary-hover disabled:text-gray-400 disabled:cursor-not-allowed"
		>
			Previous
		</button>
		<button
			on:click={gotToNextStep}
			type={buttonType}
			class="inline-flex items-center rounded-md bg-theme-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-theme-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Next
		</button>
	</div>
</fieldset>
