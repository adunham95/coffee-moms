<script>
	export let className = '';
</script>

<div class={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className} ${$$props.class}`}>
	<slot />
</div>
