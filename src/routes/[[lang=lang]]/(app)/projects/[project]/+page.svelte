<script lang="ts">
	import { page } from '$app/stores';
	import { Ripple } from '$lib/functions/ripple';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { AppShell } from '@skeletonlabs/skeleton';
	import LL from '$lib/i18n/i18n-svelte';
	import Back from '$lib/components/back.svelte';

	export let data: PageData;
</script>

<AppShell class="h-full" slotPageFooter="flex justify-center py-5" slotHeader="relative z-[8]">
	<div class="flex w-full justify-around py-4">
		<a
			class="btn variant-filled px-3 py-3 but"
			href={$LL.link(`/projects/${data.previous_link}`)}
			on:click={Ripple}
			aria-label={$LL.previous()}
		>
			<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
			<span class="break !ml-0">&nbsp{$LL.previous()}&nbsp</span>
		</a>
		<Back icon="clarity:home-line" link="/#projects" />
		<a
			class="btn variant-filled px-3 py-3 but"
			href={$LL.link(`/projects/${data.next_link}`)}
			on:click={Ripple}
			aria-label={$LL.next()}
		>
			<span class="break">&nbsp{$LL.next()}&nbsp</span>
			<iconify-icon icon="mdi:arrow-right" height="28" width="28" class="!ml-0" />
		</a>
	</div>

	<div class="mdx px-4 md:px-16 pb-8">
		{#await import(`./../../../../markdown/${data.slug}.md`)}
			{$LL.loading()}...
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
			}}>{$LL.top()}</button
		>
		<div>{$LL.copyright()}</div>
	</div>
</AppShell>
