<script lang="ts">
	import { page } from '$app/stores';
	import { Ripple } from '$lib/functions/ripple';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { AppShell } from '@skeletonlabs/skeleton';

	export let data: PageData;
</script>

<AppShell class="h-full" slotPageFooter="flex justify-center py-5" slotHeader="relative z-[8]">
	<div class="flex w-full justify-around py-4">
		<a
			class="btn variant-filled px-3 py-3 but"
			href={`${$page.url.origin}/projects/${data.previous_link}`}
			on:click={Ripple}
		>
			<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
			<span class="break !ml-0">&nbspPrevious&nbsp</span>
		</a>
		<a
			class="btn variant-filled px-3 py-3 but"
			href={`${$page.url.origin}/#projects`}
			on:click={Ripple}
		>
			<iconify-icon icon="clarity:home-line" height="28" width="28" />
			<span class="break !ml-0 pl-1">&nbspGo back&nbsp</span>
		</a>
		<a
			class="btn variant-filled px-3 py-3 but"
			href={`${$page.url.origin}/projects/${data.next_link}`}
			on:click={Ripple}
		>
			<span class="break">&nbspNext&nbsp</span>
			<iconify-icon icon="mdi:arrow-right" height="28" width="28" class="!ml-0" />
		</a>
	</div>

	<div class="mdx px-4 md:px-16 pb-8">
		{@html data.data}
	</div>

	<div class="footer-projects">
		<button
			class="h-full w-full flex justify-center items-center"
			on:click={() => {
				document.querySelector('#page')?.scrollTo(0, 0);
				goto($page.url.pathname);
			}}>Back to Top</button
		>
		<div>©sarassaura, 2023. All rights reserved.</div>
	</div>
</AppShell>
