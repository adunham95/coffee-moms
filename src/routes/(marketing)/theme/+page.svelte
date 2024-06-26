<script lang="ts">
	import Button from '$components/Button.svelte';
	import Container from '$components/Container.svelte';
	import Heading from '$components/Text/Heading.svelte';
	import Text from '$components/Text/Text.svelte';
	import { generatePageName } from '../../../helpers/generatePageName';

	let colorPallet = [
		{ name: 'Brand', color: 'brand-400', style: 'bg-brand-400' },
		{ name: 'Brand Accent', color: 'brand-accent-400', style: 'bg-brand-accent-400' },
		{ name: 'Surface', color: 'theme-surface', style: 'bg-theme-surface' },
		{ name: 'Background', color: 'theme-background', style: 'bg-theme-background' },
		{ name: 'Border', color: 'theme-border', style: 'bg-theme-border' },
		{ name: 'Content', color: 'theme-content', style: 'bg-theme-content' },
		{
			name: 'Alt Content',
			color: 'theme-secondary-content',
			style: 'bg-theme-secondary-content',
		},
		{
			name: 'Hover Content',
			color: 'theme-content-hover',
			style: 'bg-theme-content-hover',
		},
		{ name: 'Primary', color: 'theme-primary', style: 'bg-theme-primary' },
		{ name: 'Primary Hover', color: 'theme-primary-hover', style: 'bg-theme-primary-hover' },
		{ name: 'Primary Content', color: 'theme-primary-content', style: 'bg-theme-primary-content' },
		{ name: 'Accent', color: 'theme-accent', style: 'bg-theme-accent' },
		{ name: 'Accent Hover', color: 'theme-accent-hover', style: 'bg-theme-accent-hover' },
		{ name: 'Accent Content', color: 'theme-accent-content', style: 'bg-theme-accent-content' },
		{ name: 'Danger', color: 'theme-danger', style: 'bg-theme-danger' },
		{ name: 'Danger Hover', color: 'theme-danger-hover', style: 'bg-theme-danger-hover' },
		{ name: 'Danger Content', color: 'theme-danger-content', style: 'bg-theme-danger-content' },
		{
			name: 'Brand',
			color: 'theme-brand',
			style: 'bg-theme-brand',
		},
		{
			name: 'Brand Background',
			color: 'theme-brand-bg',
			style: 'bg-theme-brand-bg',
		},
		{
			name: 'Brand Content',
			color: 'theme-brand-content',
			style: 'bg-theme-brand-content',
		},
		{
			name: 'Brand Alt Content',
			color: 'theme-brand-secondary-content',
			style: 'bg-theme-brand-secondary-content',
		},
		{
			name: 'Brand Icon',
			color: 'theme-brand-icon',
			style: 'bg-theme-brand-icon',
		},
		{
			name: 'Brand Accent',
			color: 'theme-brand-accent',
			style: 'bg-theme-brand-accent',
		},
		{
			name: 'Brand Accent Background',
			color: 'theme-brand-accent-bg',
			style: 'bg-theme-brand-accent-bg',
		},
		{
			name: 'Brand Accent Content',
			color: 'theme-brand-accent-content',
			style: 'bg-theme-brand-accent-content',
		},
		{
			name: 'Brand Accent Alt Content',
			color: 'theme-brand-accent-secondary-content',
			style: 'bg-theme-brand-accent-secondary-content',
		},
		{
			name: 'Brand Accent Icon',
			color: 'theme-brand-accent-icon',
			style: 'bg-theme-brand-accent-icon',
		},
		{
			name: 'Info',
			color: 'theme-info',
			style: 'bg-theme-info',
		},
		{
			name: 'Info Background',
			color: 'theme-info-bg',
			style: 'bg-theme-info-bg',
		},
		{
			name: 'Info Content',
			color: 'theme-info-content',
			style: 'bg-theme-info-content',
		},
		{
			name: 'Info Alt Content',
			color: 'theme-info-secondary-content',
			style: 'bg-theme-info-secondary-content',
		},
		{
			name: 'Info Icon',
			color: 'theme-info-icon',
			style: 'bg-theme-info-icon',
		},
		{
			name: 'Success',
			color: 'theme-success',
			style: 'bg-theme-success',
		},
		{
			name: 'Success Content',
			color: 'theme-success-content',
			style: 'bg-theme-success-content',
		},
		{
			name: 'Success Background',
			color: 'theme-success-bg',
			style: 'bg-theme-success-bg',
		},
		{
			name: 'Success Alt Content',
			color: 'theme-success-secondary-content',
			style: 'bg-theme-success-secondary-content',
		},
		{
			name: 'Success Icon',
			color: 'theme-success-icon',
			style: 'bg-theme-success-icon',
		},
		{
			name: 'Error',
			color: 'theme-error',
			style: 'bg-theme-error',
		},
		{
			name: 'Error Background',
			color: 'theme-error-bg',
			style: 'bg-theme-error-bg',
		},
		{
			name: 'Error Content',
			color: 'theme-error-content',
			style: 'bg-theme-error-content',
		},
		{
			name: 'Error Alt Content',
			color: 'theme-error-secondary-content',
			style: 'bg-theme-error-secondary-content',
		},
		{
			name: 'Error Icon',
			color: 'theme-error-icon',
			style: 'bg-theme-error-icon',
		},
		{
			name: 'Warn',
			color: 'theme-warn',
			style: 'bg-theme-warn',
		},
		{
			name: 'Warn Background',
			color: 'theme-warn-bg',
			style: 'bg-theme-warn-bg',
		},
		{
			name: 'Warn Content',
			color: 'theme-warn-content',
			style: 'bg-theme-warn-content',
		},
		{
			name: 'Warn Alt Content',
			color: 'theme-warn-secondary-content',
			style: 'bg-theme-warn-secondary-content',
		},
		{
			name: 'Warn Icon',
			color: 'theme-warn-icon',
			style: 'bg-theme-warn-icon',
		},
	];

	let principles = [
		{
			title: 'Accessibility',
			description:
				'We prioritize accessibility to ensure that all users can interact with our products.',
		},
		{
			title: 'Simplicity',
			description:
				'We believe in the power of simplicity and strive to eliminate complexity from the user experience.',
		},
		{
			title: 'Innovation',
			description:
				'We embrace innovation and are constantly exploring new ways to delight our users.',
		},
		{
			title: 'User-Centric',
			description:
				'Our design decisions are driven by a deep understanding of our users’ needs and goals.',
		},
	];

	async function copyContent(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			console.log('Content copied to clipboard');
			/* Resolved - text copied to clipboard successfully */
		} catch (err) {
			console.error('Failed to copy: ', err);
			/* Rejected - text failed to copy to the clipboard */
		}
	}
</script>

<svelte:head>
	<title>{generatePageName('Theme')}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Container>
	<div class="md:flex md:items-center md:justify-between pt-10 pb-5">
		<div class="min-w-0 flex-1">
			<Heading class="text-center">Design Guidelines</Heading>
			<Text class="text-center">
				Our design guidelines help us create a consistent and user-friendly experience across all
				our products.
			</Text>
		</div>
	</div>

	<!-- Design Principles -->
	<div class="pb-5">
		<Heading tag="h3" variant="h3">Design Principles</Heading>
		<Text class="text-theme-secondary-content">
			Our design principles guide our decision-making process and ensure that our products are
			intuitive, accessible, and beautiful.
		</Text>

		<ol class="grid gap-3 grid-cols-1 md:grid-cols-2 py-3">
			{#each principles as principle}
				<li>
					<div class="flex items-start gap-x-3">
						<Heading variant="h5" tag="h5">{principle.title}</Heading>
					</div>
					<div class="mt-1 flex items-center gap-x-2">
						<Text variant="bodySm" class="text-theme-secondary-content">
							{principle.description}
						</Text>
					</div>
				</li>
			{/each}
		</ol>
	</div>

	<!-- Color Pallet -->
	<div class="pb-10">
		<Heading variant="h3" tag="h3">Color Pallet</Heading>
		<Text variant="bodySm" class="mt-2 max-w-4xl text-theme-secondary-content">
			Our color palette consists of carefully selected colors that reflect our brand and provide a
			pleasant visual experience.
		</Text>
		<div
			class="grid w-full grid-cols-2 sm:grid-cols-3 items-stretch justify-center gap-4 md:grid-cols-4 lg:grid-cols-6 md:gap-8 pt-3"
		>
			{#each colorPallet as color}
				<button
					class="flex flex-col items-center justify-center space-y-1"
					on:click={() => copyContent(color.color)}
				>
					<div class={`w-12 h-12 rounded-full border border-black ${color.style} `} />
					<Heading variant="h5" tag="span" class="text-center">{color.name}</Heading>
					<Text variant="bodySm" tag="span">{color.color}</Text>
				</button>
			{/each}
		</div>

		<Heading variant="h3" tag="h3" class="pt-3 pb-2">Examples</Heading>

		<!-- Info -->
		<div class="rounded-md bg-theme-info-bg p-4 mb-2 border-2 border-theme-info">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="h-5 w-5 text-theme-info-icon"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-sm font-medium text-theme-info-content">Info</h3>
					<div class="mt-2 text-sm text-theme-info-secondary-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
							similique veniam quo totam eius aperiam dolorum.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Success -->
		<div class="rounded-md bg-theme-success-bg p-4 mb-2 border-2 border-theme-success">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="h-5 w-5 text-theme-success-icon"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-sm font-medium text-theme-success-content">Success</h3>
					<div class="mt-2 text-sm text-theme-success-secondary-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
							similique veniam quo totam eius aperiam dolorum.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Error -->
		<div class="rounded-md bg-theme-error-bg p-4 mb-2 border-2 border-theme-error">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="h-5 w-5 text-theme-error-icon"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-sm font-medium text-theme-error-content">Error</h3>
					<div class="mt-2 text-sm text-theme-error-secondary-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
							similique veniam quo totam eius aperiam dolorum.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Warn -->
		<div class="rounded-md bg-theme-warn-bg p-4 mb-2 border-2 border-theme-warn">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="h-5 w-5 text-theme-warn-icon"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-sm font-medium text-theme-warn-content">Warn</h3>
					<div class="mt-2 text-sm text-theme-warn-secondary-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
							similique veniam quo totam eius aperiam dolorum.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Brand -->
		<div class="rounded-md bg-theme-brand-bg p-4 mb-2 border-2 border-theme-brand">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="h-5 w-5 text-theme-brand-icon"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-sm font-medium text-theme-brand-content">Brand</h3>
					<div class="mt-2 text-sm text-theme-warn-brand-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
							similique veniam quo totam eius aperiam dolorum.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Primary -->
		<Button>Brand</Button>
		<Button style="accent">Accent</Button>
		<Button style="info">Info</Button>
		<Button style="success">Success</Button>
		<Button style="error">Error</Button>
		<Button style="warn">Warn</Button>
	</div>

	<!-- Typography -->
	<div class="pb-5">
		<Heading variant="h3" tag="h3">Typography</Heading>
		<Text variant="bodySm" class="mt-2 max-w-4xl text-theme-secondary-content">
			Our typography is designed to be highly readable and accessible across all devices.
		</Text>
		<div class="grid w-full grid-cols-2 items-stretch justify-center gap-4 md:grid-cols-3 md:gap-8">
			<div class="flex flex-col items-start justify-center space-y-1 font-body">
				<span class="font-semibold text-lg">Lato</span>
				<span class="text-base text-theme-secondary-content dark:text-theme-secondary-content"
					>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span
				>
				<span class="text-base text-theme-secondary-content dark:text-theme-secondary-content"
					>abcdefghijklmnopqrstuvwxyz</span
				>
			</div>
			<div class="flex flex-col items-start justify-center space-y-1 font-heading">
				<span class="font-semibold text-lg">Lustria</span>
				<span class="text-base text-theme-secondary-content dark:text-theme-secondary-content"
					>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span
				>
				<span class="text-base text-theme-secondary-content dark:text-theme-secondary-content"
					>abcdefghijklmnopqrstuvwxyz</span
				>
			</div>
		</div>
	</div>
</Container>
