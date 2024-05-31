<script lang="ts">
	export let hideTitle = false;
	export let locationName: string | null;
	export let street: string | null;
	export let street2: string | null;
	export let city: string | null;
	export let state: string | null;
	export let zip: string | null;
</script>

<div class={`${$$props.class}`}>
	{#if locationName}
		{#if !hideTitle}
			<dt class="font-medium text-gray-900">Event Location</dt>
		{/if}
		<dd class=" text-gray-500">
			<span class="block">{locationName}</span>
			{#if street && city && state && zip}
				<span class="block">{street}</span>
				{#if street2}
					<span class="block">{street2}</span>
				{/if}
				<span class="block">{city}, {state} {zip}</span>
			{/if}
		</dd>
	{/if}
</div>
