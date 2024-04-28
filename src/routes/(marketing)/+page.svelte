<script>
	import Container from '../../components/Container.svelte';
	import FeaturesList from './FeatureList.svelte';
	import { generatePageName } from '../../helpers/generatePageName';
	import Heading from '$components/Text/Heading.svelte';
	import Text from '$components/Text/Text.svelte';
</script>

<svelte:head>
	<title>{generatePageName()}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="relative isolate">
	<div
		class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
		aria-hidden="true"
	>
		<div
			class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-brand-600 to-brand-accent-500 opacity-30"
			style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
		></div>
	</div>
	<div class="overflow-hidden">
		<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
			<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
				<div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
					<Heading variant="h1" tag="h1"
						>Building Bonds, One Event at a Time: Where Moms Connect, Kids Thrive!</Heading
					>
					<Text
						variant="bodyLg"
						class="mt-6 text-theme-secondary-content sm:max-w-md lg:max-w-none"
					>
						Empower Your Child's Social Circle: Join Moms in Crafting Unforgettable Moments!
					</Text>
					<div class="mt-10 flex items-center gap-x-6">
						<a
							href="/new-event"
							class="rounded-md bg-brand-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
							>Create an Event</a
						>
					</div>
				</div>
				<div
					class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
				>
					<div
						class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
					>
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-text-theme-content/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-text-theme-content/10"
							></div>
						</div>
					</div>
					<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-text-theme-content/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-text-theme-content/10"
							></div>
						</div>
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-text-theme-content/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-text-theme-content/10"
							></div>
						</div>
					</div>
					<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-text-theme-content/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-text-theme-content/10"
							></div>
						</div>
						<div class="relative">
							<img
								src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-text-theme-content/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-text-theme-content/10"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Container>
	<div class="mx-auto max-w-2xl lg:text-center">
		<Text variant="brand" tag="h2">Play faster</Text>
		<Heading tag="p">Everything you need to set up a social event</Heading>
		<Text variant="bodyLg" class="mt-6 text-theme-secondary-content">
			Effortlessly organize playdates and connect with fellow moms using our intuitive platform. Say
			goodbye to scheduling headaches and hello to stress-free socializing for your child!
		</Text>
	</div>
	<div class="mt-16 sm:mt-20 lg:mt-24">
		<FeaturesList
			features={[
				{
					title: 'SMS Messaging',
					description:
						'Allow sms reminders, no app required! Moms can receive update, and reminders without having to download another app',
					icon: 'chat',
				},
				{
					title: 'Intuitive Scheduling',
					description:
						'Seamlessly coordinate playdates with other moms, with easy-to-use scheduling tools that eliminate the hassle of back-and-forth messaging.',
					icon: 'calender',
				},
				{
					title: 'Easy Access',
					description: 'Share event links via SMS. No sign ups required to schedule',
					icon: 'stars',
				},
				{
					title: 'Group Planning',
					description:
						'Organize group outings and social events with multiple moms and their children, making it easy to create memorable experiences together.',
					icon: 'stars',
				},
			]}
		/>
	</div>
</Container>
