<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<div>
	<h1>User</h1>
	<main>
		<div>
			{data.user?.profile?.firstName}
		</div>
	</main>
</div>
