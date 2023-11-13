<script lang="ts">
	import { page } from '$app/stores';
	import { Ripple } from '$lib/functions/ripple';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { AppShell } from '@skeletonlabs/skeleton';
	import LL from '$lib/i18n/i18n-svelte';
	// import type { ComponentType } from 'svelte';

	export let data: PageData;

	// const projects: Record<string, { default: ComponentType }> = import.meta.glob(
	// 	`/src/markdown/*.md`,
	// 	{ eager: true }
	// );

	// const mdx = projects[`/src/markdown/${data.slug}.md`];
</script>

<AppShell class="h-full" slotPageFooter="flex justify-center py-5" slotHeader="relative z-[8]">
	<div class="flex w-full justify-around py-4">
		<a
			class="btn variant-filled px-3 py-3 but"
			href={$LL.link(`/projects/${data.previous_link}`)}
			on:click={Ripple}
			aria-label="Previous"
		>
			<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
			<span class="break !ml-0">&nbspPrevious&nbsp</span>
		</a>
		<a
			class="btn variant-filled px-3 py-3 but"
			href={$LL.link(`/#projects`)}
			on:click={Ripple}
			aria-label="Go back"
		>
			<iconify-icon icon="clarity:home-line" height="28" width="28" />
			<span class="break !ml-0 pl-1">&nbspGo back&nbsp</span>
		</a>
		<a
			class="btn variant-filled px-3 py-3 but"
			href={$LL.link(`/projects/${data.next_link}`)}
			on:click={Ripple}
			aria-label="Next"
		>
			<span class="break">&nbspNext&nbsp</span>
			<iconify-icon icon="mdi:arrow-right" height="28" width="28" class="!ml-0" />
		</a>
	</div>

	<div class="mdx px-4 md:px-16 pb-8">
		{#await import(`./../../../../markdown/${data.slug}.md`)}
			Loading...
		{:then data}
			<svelte:component this={data.default} />
		{/await}
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
