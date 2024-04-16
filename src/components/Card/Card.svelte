<div
	class={`group divide-y divide-theme-border overflow-hidden rounded-lg bg-theme-surface shadow ${$$props.class}`}
>
	{#if $$slots.header}
		<div>
			<slot name="header" />
		</div>
	{/if}
	<div>
		<slot />
	</div>
	{#if $$slots.footer}
		<div>
			<slot name="footer" />
		</div>
	{/if}
</div>
