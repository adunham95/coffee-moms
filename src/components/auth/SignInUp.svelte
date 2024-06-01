<script lang="ts">
	import SignIn from './SignIn.svelte';
	import SignUp from './SignUp.svelte';

	export let type: 'signin' | 'signup' = 'signin';
	export let afterAction = () => {};
</script>

{#if type === 'signin'}
	<SignIn useSignUp on:click={() => (type = 'signup')} useRedirect={false} {afterAction} />
{/if}

{#if type === 'signup'}
	<SignUp useSignIn on:click={() => (type = 'signin')} useRedirect={false} {afterAction} />
{/if}
