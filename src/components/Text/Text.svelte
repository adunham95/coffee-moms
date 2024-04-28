<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let tag = 'p';
	export let variant: keyof typeof variants = 'body';

	const variants = {
		accent: 'text-base font-semibold leading-7 text-theme-accent',
		brand: 'text-base font-semibold leading-7 text-theme-primary',
		subText: 'text-sm text-theme-secondary-content',
		bodyLg: 'text-lg leading-8 text-theme-content',
		bodySm: 'text-xs leading-5 text-theme-content',
		body: 'text-base leading-6 text-theme-content',
	};

	let style = variants[variant];
</script>

<svelte:element this={tag} class={twMerge(`${style} ${$$props.class}`)}>
	<slot />
</svelte:element>
