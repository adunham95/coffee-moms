<script lang="ts">
	import type { EStatus } from '$types/EStatus';
	import type { PageData } from '../$types';

	type CustomPageData = PageData & {
		eventData: {
			status: EStatus;
		};
	};

	export let data: CustomPageData;
	console.log(data);
</script>

<div>Attendee page</div>
