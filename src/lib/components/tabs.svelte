<script lang="ts">
	import { page } from '$app/stores';
	import { change, unchange } from '$lib';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const links = ['about', 'skills', 'projects', 'qualifications', 'contact-me'];

	let TabList: HTMLElement | null;

	onMount(() => {
		TabList = document.querySelector('.tab-list');
	});
</script>

<div transition:fade={{ duration: 500, delay: 0 }}>
	<TabGroup border="border-none" class="hidden lg:flex">
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
	</TabGroup>
</div>
