<script lang="ts">
	import Input from '$components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import { enhance } from '$app/forms';

	export let useSignUp = false;

	let email = '';
	let password = '';
</script>

<form method="POST" action="/login" class="space-y-5 {$$props.class}" use:enhance>
	<Input label="Email" id="email" name="email" type="email" bind:value={email} required />
	<Input
		label="Password"
		id="password"
		name="password"
		type="password"
		bind:value={password}
		required
	/>
	<div class="flex items-center justify-between">
		<div class="text-sm leading-6">
			{#if useSignUp}
				<button
					on:click
					type="button"
					class="font-semibold text-theme-accent hover:text-theme-accent-hover"
					>Name Email Phone Adrain Dunham Create Account
				</button>
			{:else}
				<a href="/sign-up" class="font-semibold text-theme-accent hover:text-theme-accent-hover"
					>Create Account</a
				>
			{/if}
		</div>
		<div class="text-sm leading-6">
			<a
				href="/forgot-password"
				class="font-semibold text-theme-primary hover:text-theme-primary-hover">Forgot password?</a
			>
		</div>
	</div>
	<div class="flex md:justify-end">
		<Button class="w-full justify-center" type="submit">Sign In</Button>
	</div>
</form>
