<script>
	import coffee_logo from '$lib/images/coffee-logo.svg';
	import text_logo from '$lib/images/text-logo.svg';
	import Footer from '../../components/Footer.svelte';

	let mobileMenuOpen = false;
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex md:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Coffee Mom</span>
				<img class="h-8 w-auto" src={coffee_logo} alt="" />
			</a>
		</div>
		<div class="flex md:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-theme-content"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden md:flex md:gap-x-12">
			<a href="/" class="text-sm font-semibold leading-6 text-theme-content">Product</a>
			<a href="/" class="text-sm font-semibold leading-6 text-theme-content">Features</a>
			<a href="/" class="text-sm font-semibold leading-6 text-theme-content">Marketplace</a>
			<a href="/about" class="text-sm font-semibold leading-6 text-theme-content">Company</a>
		</div>
		<div class="hidden md:flex md:flex-1 md:justify-end">
			<a href="/dashboard" class="text-sm font-semibold leading-6 text-theme-content"
				>Log in <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class={` ${mobileMenuOpen ? 'md:hidden' : 'hidden'}`} role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-50"></div>
		<div
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-theme-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Coffee Mom</span>
					<img class="h-8 w-auto" src={coffee_logo} alt="" />
				</a>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-theme-secondary-content"
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
				>
					<span class="sr-only">Close menu</span>
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
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-theme-content hover:bg-gray-50"
							>Product</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-theme-content hover:bg-gray-50"
							>Features</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-theme-content hover:bg-gray-50"
							>Marketplace</a
						>
						<a
							href="/about"
							class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-theme-content hover:bg-gray-50"
							>Company</a
						>
					</div>
					<div class="py-6">
						<a
							href="/dashboard"
							class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-theme-content hover:bg-gray-50"
							>Log in</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<div class=" pt-20">
	<slot />
</div>

<Footer />
