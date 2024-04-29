<script>
	import Icon from './Icon.svelte';
	import Heading from './Text/Heading.svelte';
	import Text from './Text/Text.svelte';

	const templates = [
		{
			title: 'Play Date',
			subTitle: '',
			color: '#B44C43',
		},
		{
			title: 'Potluck Dinner',
			subTitle: '',
			color: '#3E5F8A',
		},
	];
</script>

<div>
	<Heading>Events</Heading>
	<Text class="mt-1 text-gray-500">
		You haven’t created any events. Get started by selecting a template or start from an empty
		event.
	</Text>
	<p class="mt-1 text-sm text-gray-500"></p>
	<ul
		role="list"
		class="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2"
	>
		{#each templates as template}
			<li class="flow-root">
				<div
					class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-theme-primary hover:bg-theme-primary-hover/10"
				>
					<div
						style={`background: ${template.color}`}
						class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg"
					>
						<Icon class="h-6 w-6 text-white" name="calender" />
					</div>
					<div>
						<h3 class="text-sm font-medium text-gray-900">
							<a href="/new-event" class="focus:outline-none">
								<span class="absolute inset-0" aria-hidden="true"></span>
								<Heading tag="span" variant="h4">{template.title}</Heading>
								<span aria-hidden="true"> &rarr;</span>
							</a>
						</h3>
						<p class="mt-1 text-sm text-gray-500">
							{template.subTitle}
						</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<div class="mt-4 flex justify-end">
		<a href="/new-event">
			<Text tag="span" class="font-medium text-theme-primary hover:text-theme-primary-hover">
				Or start from an empty project
			</Text>

			<span aria-hidden="true"> &rarr;</span>
		</a>
	</div>
</div>
