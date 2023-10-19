<script lang="ts">
	import { page } from '$app/stores';
	import { change, unchange } from '$lib';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	const links = ['about', 'skills', 'projects', 'qualifications', 'contact-me'];

	let TabList: HTMLElement | null;

	onMount(() => {
		TabList = document.querySelector('.tab-list');
	});
</script>

<TabGroup border="border-none relative" class="hidden lg:flex">
	{#each links as link, id}
		<TabAnchor
			name={`tab${id + 1}`}
			href={`${$page.url.origin}/#${link}`}
			class="capitalize"
			on:mouseover={() => change(id, TabList)}
			on:mouseleave={() => unchange(TabList, links, $page.url.hash)}
			>{link.replace('-', ' ')}
		</TabAnchor>
	{/each}
</TabGroup>
