<script lang="ts">
	import { enhance } from '$app/forms';
	import { generatePageName } from '../../../helpers/generatePageName';
</script>

<svelte:head>
	<title>{generatePageName('Logout')}</title>
</svelte:head>

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
