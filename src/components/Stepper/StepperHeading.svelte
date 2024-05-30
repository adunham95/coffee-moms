<script lang="ts">
	import Heading from '$components/Text/Heading.svelte';

	export let title = 'Page Title';
	export let buttonType: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let gotToNextStep = () => {};
</script>

<div class="pb-2 flex items-center justify-between">
	<Heading variant="h2" class="inline-flex">{title}</Heading>
	<div class="flex sm:ml-4 sm:mt-0">
		<button
			on:click={gotToNextStep}
			type={buttonType}
			class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Next
		</button>
	</div>
</div>
