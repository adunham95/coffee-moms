<script lang="ts">
	import Input from '$components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import { enhance } from '$app/forms';
	import Container from '$components/Container.svelte';

	let email = '';
	let password = '';
	let confirmPassword = '';

	let error;

	function validatePassword(password: string, confirmPassword: string) {
		return confirmPassword !== password;
	}
</script>

<form method="POST" use:enhance>
	<Container class="space-y-5 {$$props.class}">
		<Input label="Email" id="email" name="email" type="email" bind:value={email} />
		<Input label="Password" id="password" name="password" type="password" bind:value={password} />
		<Input
			label="Confirm Password"
			id="confirm-password"
			name="confirm-password"
			type="password"
			bind:value={confirmPassword}
		/>
		{#if confirmPassword !== '' && confirmPassword !== password}
			<p class="text-theme-error-content text-sm font-semibold">Password not match</p>
		{/if}
		<div class="flex items-center justify-end">
			<div class="text-sm leading-6">
				<a href="/sign-in" class="font-semibold text-theme-primary hover:text-theme-primary-hover"
					>Sign In</a
				>
			</div>
		</div>
		<div class="flex md:justify-end">
			<Button
				class="w-full justify-center"
				type="submit"
				disabled={validatePassword(password, confirmPassword)}>Sign Up</Button
			>
		</div>
	</Container>
</form>
