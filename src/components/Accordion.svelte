<script lang="ts">
	export let expanded = false;
	export let title: string;
</script>

<div class="pt-4">
	<dt>
		<button
			type="button"
			class="flex w-full items-start justify-between text-left text-gray-900"
			aria-controls="faq-0"
			aria-expanded="false"
			on:click={() => (expanded = !expanded)}
		>
			<span class="text-base font-semibold leading-7">{title}</span>
			<span class="ml-6 flex h-7 items-center">
				<svg
					class={`h-6 w-6 ${expanded ? 'hidden' : ''}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
				</svg>
				<svg
					class={`h-6 w-6 ${expanded ? '' : 'hidden'}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
				</svg>
			</span>
		</button>
	</dt>
	<dd class={`mt-2 pr-12 ${expanded ? ' ' : 'hidden'}`} id="faq-0">
		<slot />
	</dd>
</div>
