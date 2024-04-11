<script lang="ts">
	export let title: string;
	export let subTitle = '';
</script>

<div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
	<div>
		<h2 class="text-base font-semibold leading-7 text-gray-900">{title}</h2>
		{#if subTitle}
			<p class="mt-1 text-sm leading-6 text-gray-600">
				{subTitle}
			</p>
		{/if}
		<slot name="label" />
	</div>

	<div class="md:col-span-2">
		<slot />
	</div>
</div>
