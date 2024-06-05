<script lang="ts">
	import Container from '$components/Container.svelte';
	import { dismissToast, toasts } from '$store/toasts';
	import ToastItem from './ToastItem.svelte';
</script>

<Container
	class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
>
	<div class="flex w-full flex-col items-center space-y-4 sm:items-end">
		<!-- <ToastItem /> -->
	</div>
</Container>
