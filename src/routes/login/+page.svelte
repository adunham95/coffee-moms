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

<div class="flex min-h-full">
	<div
		class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div class="sm:mx-auto sm:w-full sm:max-w-md mt-4">
				<img class="mx-auto h-6 w-auto my-3" src={text_logo} alt="Coffee Moms" />
			</div>
			<h2 class="mt-8 pb-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Sign in to your account
			</h2>
			{#if form?.incorrect}
				<p class="mt-3 text-red-500 text-center font-semibold">Invalid email/password</p>
			{/if}
			<SignIn />
		</div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
			alt=""
		/>
	</div>
</div>
