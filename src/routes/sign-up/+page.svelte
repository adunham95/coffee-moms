<script lang="ts">
	import text_logo from '$lib/images/text-logo.svg';
	import Card from '$components/Card/Card.svelte';
	import Container from '$components/Container.svelte';
	import SignUp from '$components/auth/SignUp.svelte';
	import { generatePageName } from '$helpers/generatePageName';

	let error: string;
</script>

<svelte:head>
	<title>{generatePageName('Sign Up')}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container class="py-3">
	<div class="sm:mx-auto sm:w-full sm:max-w-md mt-4">
		<h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Create an account
		</h2>
	</div>
	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<Card class=" pb-6 py-6 shadow sm:rounded-lg sm:pb-12">
			<img slot="header" class="mx-auto h-6 w-auto my-3" src={text_logo} alt="Coffee Moms" />

			<SignUp />
		</Card>
	</div>

	{#if error}
		<p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
	{/if}
</Container>
