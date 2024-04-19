<script>
	import Input from '$components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import { enhance } from '$app/forms';

	let email = '';
	let password = '';
</script>

<form method="POST" class="space-y-5 {$$props.class}" use:enhance>
	<Input label="Email" id="email" name="email" type="email" bind:value={email} required />
	<Input
		label="Password"
		id="password"
		name="password"
		type="password"
		bind:value={password}
		required
	/>
	<Button type="submit">Sign In</Button>
</form>
