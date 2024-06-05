<script lang="ts">
	import Container from '../../../components/Container.svelte';
	import { generatePageName } from '../../../helpers/generatePageName';
	import TimeDateSelector from '$components/TimeDateSelector.svelte';
</script>

<svelte:head>
	<title>{generatePageName('Test page')}</title>
</svelte:head>

<Container>
	<TimeDateSelector />
</Container>
