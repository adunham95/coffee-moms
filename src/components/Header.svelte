<script lang="ts">
	export let pageTitle = 'Page Title';
	export let paths: { path: string; title: string }[] = [];
</script>

<header class="pt-2 pb-4 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
	<div>
		<nav class="sm:hidden" aria-label="Back">
			<a class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
				<svg
					class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
						clip-rule="evenodd"
					/>
				</svg>
				Back
			</a>
		</nav>
		<nav class="hidden sm:flex" aria-label="Breadcrumb">
			<ol role="list" class="flex items-center space-x-4">
				{#each paths as path, index}
					<li data-index={index}>
						<div class={`flex ${index > 0 && 'items-center'}`}>
							{#if index > 0}
								<svg
									class="h-5 w-5 flex-shrink-0 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clip-rule="evenodd"
									/>
								</svg>
							{/if}
							<a
								href={path.path}
								class={`text-sm font-medium text-gray-500 hover:text-gray-700 ${index > 0 && 'ml-4'}`}
								>{path.title}</a
							>
						</div>
					</li>
				{/each}
			</ol>
		</nav>
	</div>
	<div class="mt-2 md:flex md:items-center md:justify-between">
		<div class="min-w-0 flex-1">
			<h2
				class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
			>
				{pageTitle}
			</h2>
		</div>
		<!-- <div class="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
		<button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Edit</button>
		<button type="button" class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Publish</button>
	  </div> -->
	</div>
</header>
