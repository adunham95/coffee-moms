<script lang="ts">
	import Container from '$components/Container.svelte';
	import SignUp from '$components/auth/SignUp.svelte';

	let error: string;
</script>

<Container>
	<SignUp />
	{#if error}
		<p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
	{/if}
</Container>
