<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let tag = 'h2';
	export let variant: keyof typeof variants = 'h2';

	const variants = {
		h1: 'text-4xl font-bold tracking-tight text-theme-content sm:text-6xl',
		h2: 'text-2xl font-bold leading-7 text-theme-content sm:truncate sm:text-3xl sm:tracking-tight',
		h3: 'text-lg font-semibold leading-6 text-theme-content',
		h4: 'text-base font-semibold leading-6 text-theme-content',
		h5: 'text-sm font-semibold leading-6 text-theme-content',
	};

	let style = variants[variant];
</script>

<svelte:element this={tag} class={twMerge(` font-heading ${style} ${$$props.class}`)}>
	<slot />
</svelte:element>
