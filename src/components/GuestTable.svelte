<script lang="ts">
	import { shareOrCopy } from '$helpers/shareOrCopy';

	export let guests: {
		name: string | null;
		email: string | null;
		phone: string | null;
		token: string | null;
	}[] = [];

	function handleShare(loginToken: string) {
		const url = `/login/${loginToken}`;
		shareOrCopy({
			title: 'Login Link',
			text: 'Login with this link to add your availability',
			url,
		});
	}
</script>

<div class="@container">
	<table class="min-w-full divide-y divide-gray-300">
		<thead>
			<tr>
				<th
					scope="col"
					class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 @sm:pl-0">Name</th
				>
				<th
					scope="col"
					class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 @xs:table-cell"
					>Email</th
				>
				<th
					scope="col"
					class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 @sm:table-cell"
					>Phone</th
				>
				<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
					<span class="sr-only">Link</span>
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each guests as guest}
				<tr>
					<td
						class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 @sm:w-auto @sm:max-w-none @sm:pl-0"
					>
						{guest.name}
						<dl class="font-normal @sm:hidden">
							<dt class="sr-only @xs:hidden">Email</dt>
							<dd class="mt-1 truncate text-gray-700 @xs:hidden">{guest.email || ''}</dd>
							<dt class="sr-only @sm:hidden">Phone</dt>
							<dd class="mt-1 truncate text-gray-500 @sm:hidden">{guest.phone || ''}</dd>
						</dl>
					</td>
					<td class="hidden px-3 py-4 text-sm text-gray-500 @xs:table-cell">{guest.email || ''}</td>
					<td class="hidden px-3 py-4 text-sm text-gray-500 @sm:table-cell">{guest.phone || ''}</td>
					<td
						class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
					>
						{#if guest.token}
							<button
								on:click={() => handleShare(guest?.token || ' ')}
								class="text-indigo-600 hover:text-indigo-900"
								>Share
							</button>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
