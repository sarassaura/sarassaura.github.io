<script lang="ts">
	import { page } from '$app/stores';
	import { change, unchange } from '$lib';
	import { locale, LL } from '$lib/i18n/i18n-svelte';

	let links = Object.keys($LL.tabs);

	let TabList: HTMLElement | null;
</script>

<div class="hidden lg:flex border-none relative blue tab-list" bind:this={TabList}>
	{#each links as link, id}
		<button
			class="capitalize h-full py-2 px-4"
			on:click={() => {
				document.getElementById(link)?.scrollIntoView();
				window.history.replaceState(null, '', `${$locale}#${link}`);
			}}
			on:mouseover={() => change(id, TabList)}
			on:focus={() => {}}
			on:mouseleave={() => unchange(TabList, links, $page.url.hash)}
			>{Object.values($LL.tabs)[id]()}
		</button>
	{/each}
</div>
