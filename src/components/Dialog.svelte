<script lang="ts">
	export let dialog: any;
</script>

<dialog
	bind:this={dialog}
	on:close
	class="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:w-full sm:max-w-sm sm:p-6 backdrop:bg-theme-secondary-content/70"
>
	<div class="flex items-start justify-end">
		<div class="ml-3 flex h-7 items-center">
			<button
				on:click={() => dialog.close()}
				type="button"
				class="relative rounded-md bg-white text-theme-secondary-content hover:text-theme-content focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2"
			>
				<span class="absolute -inset-2.5"></span>
				<span class="sr-only">Close panel</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	</div>

	<div>
		<slot />
	</div>
</dialog>
