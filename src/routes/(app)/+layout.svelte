<script>
	import Avatar from '$components/Avatar.svelte';
	import Footer from '$components/Footer.svelte';
	import icon_logo from '$lib/images/icon-logo-brand.svg';
	import text_logo from '$lib/images/text-logo.svg';

	let mobileNavOpen = false;
	export let data;
</script>

<div class="min-h-full">
	<div class="bg-brand-bg-600 relative z-50">
		<nav>
			<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
				<div
					class="relative flex h-16 items-center justify-between lg:border-b lg:border-brand-bg-400 lg:border-opacity-25"
				>
					<a href="/dashboard" class="flex items-center px-2 lg:px-0">
						<div class="flex-shrink-0">
							<img src={icon_logo} alt="Logo" class="block h-8 w-auto" />
						</div>
						<div class="flex-shrink-0 hidden sm:flex ml-2">
							<img src={text_logo} alt="Text Logo" class="block h-5 w-auto" />
						</div>
					</a>

					<div class="block lg:ml-4 lg:block">
						<div class="flex items-center">
							<a
								href="/new-event"
								class="bg-brand-700 text-white rounded-md py-2 px-3 text-sm font-medium"
								aria-current="page">Create Event</a
							>

							<!-- Profile dropdown -->
							<div class="relative ml-3 flex-shrink-0">
								{#if data.user}
									<div>
										<button
											type="button"
											class="relative flex rounded-full bg-brand-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-bg-600"
											id="user-menu-button"
											aria-expanded="false"
											aria-haspopup="true"
											on:click={() => (mobileNavOpen = !mobileNavOpen)}
										>
											<span class="absolute -inset-1.5"></span>
											<span class="sr-only">Open user menu</span>
											<Avatar firstName={data.user.firstName} lastName={data.user.lastName} />
										</button>
									</div>
								{:else}
									<div>Login</div>
								{/if}
								<!-- Mobile Profile Nav -->
								<div
									class={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-theme-surface py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${mobileNavOpen ? 'scale-100' : 'scale-0'}`}
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu-button"
									tabindex="-1"
								>
									<p
										class="block px-4 py-2 text-sm font-medium text-gray-700 group-hover:text-gray-900"
									>
										{data.user?.firstName}
										{data.user?.lastName}
									</p>
									<a
										href="/profile"
										class="block px-4 py-2 text-sm text-theme-content hover:bg-brand-500 hover:text-white"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-0">Your Profile</a
									>
									<a
										href="/dashboard"
										class="block px-4 py-2 text-sm text-theme-content hover:bg-brand-500 hover:text-white"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-0">Dashboard</a
									>
									<a
										class="block px-4 py-2 text-sm text-theme-content hover:bg-brand-500 hover:text-white"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-1">Settings</a
									>
									<a
										href="/sign-out"
										class="block px-4 py-2 text-sm text-theme-content hover:bg-brand-500 hover:text-white"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-2">Sign out</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>

	<main class="min-h-screen-mobile md:min-h-screen" style="">
		<!-- <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"> -->
		<slot />
		<!-- </div> -->
	</main>

	<Footer />
</div>
