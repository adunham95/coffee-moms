<script>
	import FormTwoColumn from '$components/PanelLayout/FormTwoColumn.svelte';
	import Container from '$components/Container.svelte';
	import TextInput from '$components/Inputs/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import { enhance } from '$app/forms';

	export let data;

	console.log('PageData', data);
</script>

{#if !data.profile}
	<p>User Not Found</p>
{/if}

<Container className="pt-2">
	<form method="POST" use:enhance>
		<FormTwoColumn title="My Profile">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
				<TextInput id="first-name" label="First Name" value={data.profile?.firstName} />
				<TextInput id="last-name" label="Last Name" value={data.profile?.lastName} />
				<TextInput id="email" label="Email" class="col-span-2" value={data.profile?.email} />
				<TextInput id="phone" label="Phone" class="col-span-2" value={data.profile?.phone} />
				<TextInput id="password" label="Password" class="col-span-2" />
			</div>
		</FormTwoColumn>
		<div class="flex justify-end py-3">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</Container>
