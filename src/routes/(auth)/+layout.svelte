<script lang="ts">
	import login_img from '$lib/images/pexels-elevate-1267321.jpg';
	import login_img_2 from '$lib/images/pexels-kampus-7669130.jpg';
</script>

<div class="flex min-h-full">
	<div
		class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 md:flex-none lg:px-20 xl:px-24 relative"
	>
		<nav class="flex space-x-4 absolute top-1 left-1" aria-label="Tabs">
			<!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" -->
			<a
				href="/"
				class="text-gray-500 hover:text-theme-primary-hover rounded-md px-3 py-2 text-sm font-medium"
				>Home</a
			>
		</nav>

		<div class="mx-auto w-full max-w-sm md:w-96">
			<slot />
		</div>
	</div>
	<div class="relative hidden w-0 flex-1 md:block">
		<img class="absolute inset-0 h-full w-full object-cover" src={login_img_2} alt="" />
	</div>
</div>
