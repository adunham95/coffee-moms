<script lang="ts">
	import Container from '$components/Container.svelte';
	import SignIn from '$components/auth/SignIn.svelte';

	let form: any;
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container>
	<h1 class="text-2xl font-semibold text-center">Sign In</h1>
	{#if form?.incorrect}
		<p class="mt-3 text-red-500 text-center font-semibold">Invalid email/password</p>
	{/if}
	<SignIn class="max-w-xl mx-auto mt-8" />
</Container>
