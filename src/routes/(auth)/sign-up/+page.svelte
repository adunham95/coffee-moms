<script lang="ts">
	import text_logo from '$lib/images/text-logo.svg';
	import SignUp from '$components/auth/SignUp.svelte';
	import { generatePageName } from '$helpers/generatePageName';

	let error: string;
</script>

<svelte:head>
	<title>{generatePageName('Sign Up')}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="sm:mx-auto sm:w-full sm:max-w-md mt-4">
	<img class="mx-auto h-6 w-auto my-3" src={text_logo} alt="Planner Bee" />
</div>
<h2 class="mt-8 pb-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
	Create an account
</h2>

<SignUp />

{#if error}
	<p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
{/if}
