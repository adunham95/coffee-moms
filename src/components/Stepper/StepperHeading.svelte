<script lang="ts">
	import Heading from '$components/Text/Heading.svelte';

	export let title = 'Page Title';
	export let buttonType: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let gotToNextStep = () => {};
</script>

<div class="pb-2 md:flex md:items-center md:justify-between">
	<div class="min-w-0 flex-1">
		<Heading variant="h2">{title}</Heading>
	</div>
	<div class="mt-4 flex md:ml-4 md:mt-0">
		<button
			on:click={gotToNextStep}
			type={buttonType}
			class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Next
		</button>
	</div>
</div>
