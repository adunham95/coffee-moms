<script lang="ts">
	import Input from '$components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import { enhance } from '$app/forms';
	import { isValidEmail } from '$helpers/helpers';

	export let useSignIn = false;

	let email = '';
	let password = '';
	let confirmPassword = '';
	let firstName = '';
	let lastName = '';

	let error;

	function validate(password: string, confirmPassword: string, email: string) {
		if (email === '' || password === '' || confirmPassword === '') {
			return true;
		}
		if (password.length < 3) {
			return true;
		}

		return confirmPassword !== password;
	}
</script>

<form method="POST" action="/sign-up" use:enhance>
	<div class="{$$props.class} grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-4 items-center">
		<Input
			label="First Name"
			id="firstName"
			name="firstName"
			type="firstName"
			bind:value={firstName}
			class="sm:col-span-2 mt-0"
		/>
		<Input
			label="Last Name"
			id="lastName"
			name="lastName"
			type="lastName"
			bind:value={lastName}
			class="sm:col-span-2 mt-0"
		/>
		<Input
			label="Email"
			id="email"
			name="email"
			type="email"
			bind:value={email}
			error={email !== '' && !isValidEmail(email) ? 'Not valid email' : undefined}
			class="sm:col-span-4"
		/>
		<Input
			label="Password"
			id="password"
			name="password"
			type="password"
			bind:value={password}
			error={password.length < 3 && password !== '' ? 'Password too short' : undefined}
			class="sm:col-span-4"
		/>
		<Input
			class="sm:col-span-4"
			label="Confirm Password"
			id="confirm-password"
			name="confirm-password"
			type="password"
			bind:value={confirmPassword}
			error={confirmPassword !== '' && confirmPassword !== password
				? 'Password not match'
				: undefined}
		/>
		<div class="flex items-center justify-start sm:col-span-4">
			<div class="text-sm leading-6">
				{#if useSignIn}
					<button on:click class="font-semibold text-theme-accent hover:text-theme-accent-hover">
						Sign In
					</button>
				{:else}
					<a href="/login" class="font-semibold text-theme-accent hover:text-theme-accent-hover">
						Sign In
					</a>
				{/if}
			</div>
		</div>
		<div class="flex md:justify-end sm:col-span-4">
			<Button
				class="w-full justify-center"
				type="submit"
				disabled={validate(password, confirmPassword, email)}>Sign Up</Button
			>
		</div>
	</div>
</form>
