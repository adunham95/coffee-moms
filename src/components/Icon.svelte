<script lang="ts">
	import { icons } from '../const/icons';
	export let name: keyof typeof icons;
	export let width = '1rem';
	export let height = '1rem';
	export let fill = 'none';
	export let stroke = 'currentColor';
	export let strokeWidth = 1.5;
	export let focusable: string | number | null | undefined = undefined;

	let displayIcon = icons[name];
</script>

<svg
	class={$$props.class}
	{focusable}
	{width}
	{height}
	{fill}
	{stroke}
	stroke-width={strokeWidth}
	viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg
>
