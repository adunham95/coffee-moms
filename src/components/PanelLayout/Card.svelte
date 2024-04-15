<div class={`group overflow-hidden rounded-lg bg-theme-surface shadow ${$$props.class}`}>
	{#if $$slots.header}
		<slot name="header" />
		<div class="border-b border-theme-border"></div>
	{/if}

	<slot />
	<slot name="footer" />
</div>
