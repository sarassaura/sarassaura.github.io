<script lang="ts">
	import { page } from '$app/stores';
	import { change, unchange } from '$lib';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { section } from '$lib';

	let now: string;

	section.subscribe((value) => {
		now = value;
	});

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
			href={`#${link}`}
			class="capitalize"
			on:mouseover={() => change(id, TabList)}
			on:mouseleave={() => unchange(TabList, links, $page.url.hash)}
			>{link.replace('-', ' ')}
		</TabAnchor>
	{/each}
	{#if now == 'bla'}
		<div transition:fade={{ duration: 500, delay: 250 }} class="pseudo" />
	{/if}
</TabGroup>
