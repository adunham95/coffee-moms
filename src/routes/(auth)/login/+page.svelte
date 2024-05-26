<script lang="ts">
	import text_logo from '$lib/images/text-logo.svg';
	import SignIn from '$components/auth/SignIn.svelte';
	import { generatePageName } from '$helpers/generatePageName';

	export let form: any;
</script>

<svelte:head>
	<title>{generatePageName('Login')}</title>
</svelte:head>

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
