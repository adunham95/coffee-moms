<script lang="ts">
	import SignIn from './SignIn.svelte';
	import SignUp from './SignUp.svelte';

	export let type: 'signin' | 'signup' = 'signin';
</script>

{#if type === 'signin'}
	<SignIn useSignUp on:click={() => (type = 'signup')} />
{/if}

{#if type === 'signup'}
	<SignUp useSignIn on:click={() => (type = 'signin')} />
{/if}
