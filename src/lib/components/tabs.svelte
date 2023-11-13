<script lang="ts">
	import { page } from '$app/stores';
	import { change, unchange } from '$lib';
	import { onMount } from 'svelte';
	import { locale } from '$lib/i18n/i18n-svelte';

	const links = ['about', 'skills', 'projects', 'contact-me'];

	let TabList: HTMLElement | null;

	onMount(() => {
		TabList = document.querySelector('.tab-list');
	});
</script>

<div class="hidden lg:flex border-none relative blue tab-list">
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
			>{link.replace('-', ' ')}
		</button>
	{/each}
</div>
