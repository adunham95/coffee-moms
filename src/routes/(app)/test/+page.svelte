<script>
	import Container from '../../../components/Container.svelte';
	import FormTwoColumn from '../../../components/PanelLayout/FormTwoColumn.svelte';
	import { generatePageName } from '../../../helpers/generatePageName';
</script>

<svelte:head>
	<title>{generatePageName('Test page')}</title>
</svelte:head>

<Container>
	<FormTwoColumn title="Test Title" subTitle="sub title">
		<h1>Test</h1>
	</FormTwoColumn>
</Container>
