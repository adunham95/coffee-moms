<script lang="ts">
	import { EStatus } from '../types/EStatus';

	export let status: EStatus | undefined = EStatus.Created;

	console.log('status');

	let statusDetails: { [key in EStatus]: { name: string; style: string } } = {
		Scheduled: {
			name: 'Scheduled',
			style: 'bg-brand-100 text-brand-600',
		},
		Created: {
			name: 'Created',
			style: 'bg-gray-100 text-gray-600',
		},
		Scheduling: {
			name: 'Scheduling',
			style: 'bg-yellow-100 text-yellow-600',
		},
		Canceled: {
			name: 'Canceled',
			style: 'bg-pink-100 text-pink-600',
		},
		Complete: {
			name: 'Complete',
			style: 'bg-green-100 text-green-600',
		},
		Error: {
			name: 'Error',
			style: 'bg-red-100 text-red-600',
		},
	};
	let selectedStatus = statusDetails[status || EStatus.Error];
</script>

<span
	class={`inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ${selectedStatus.style} `}
>
	{selectedStatus.name}
</span>
