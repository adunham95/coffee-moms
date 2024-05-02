<script lang="ts">
	import coffee_logo from '$lib/images/coffee-logo.svg';
	import text_logo from '$lib/images/text-logo.svg';
	import Card from '$components/Card/Card.svelte';
	import Container from '$components/Container.svelte';
	import SignIn from '$components/auth/SignIn.svelte';
	import { generatePageName } from '$helpers/generatePageName';

	let form: any;
</script>

<svelte:head>
	<title>{generatePageName('Login')}</title>
</svelte:head>

<Container class="py-3">
	<div class="sm:mx-auto sm:w-full sm:max-w-md mt-4">
		<!-- <img class="mx-auto h-10 w-auto" src={coffee_logo} alt="Coffee Moms" /> -->
		<img class="mx-auto h-6 w-auto my-3" src={text_logo} alt="Coffee Moms" />
		<h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Sign in to your account
		</h2>
	</div>
	{#if form?.incorrect}
		<p class="mt-3 text-red-500 text-center font-semibold">Invalid email/password</p>
	{/if}
	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<Card class="px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<SignIn />
		</Card>
	</div>
</Container>
