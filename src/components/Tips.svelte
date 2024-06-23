<script lang="ts">
	import icon_logo from '$lib/images/icon-logo-brand.svg';
	export let text = 'text';
</script>

<div
	class={`rounded-md border-2 border-theme-primary-hover bg-theme-primary/10 p-4 ${$$props.class}`}
>
	<div class="flex">
		<div class="flex-shrink-0">
			<div class="flex-shrink-0">
				<img src={icon_logo} alt="Logo" class="block h-8 w-auto" />
			</div>
		</div>
		<div class="ml-3">
			<!-- <h3 class="font-medium mb-2 text-theme-content">Beatrice Tips</h3> -->
			<div class="text-sm text-theme-content font-semibold">
				<p>
					{text}
				</p>
			</div>
		</div>
	</div>
</div>
