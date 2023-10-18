<script lang="ts">
	import { section } from '$lib';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	let now: string;

	section.subscribe((value) => {
		now = value;
	});

	export let data: PageData['projects'];
</script>

<div class="section projects md:px-16 px-4" id="projects">
	{#each data.viewer.pinnedItems.edges as item}
		<figure class="relative">
			{#if now != 'projects'}
				<div class="pseudo" transition:fade={{ duration: 500, delay: 250 }} />
			{/if}
			<img
				class="work"
				src={item.node.openGraphImageUrl}
				alt={item.node.name}
				transition:fade={{ duration: 500, delay: 500 }}
			/>
			<figcaption>
				<p>{item.node.name}</p>
				<p>{item.node.description}</p>
			</figcaption>
		</figure>
		<!--
		<p>{item.node.createdAt}</p>
		<p>{item.node.homepageUrl}</p>
		{#each item.node.repositoryTopics.nodes as topics}
			<p>{topics.topic.name}</p>
		{/each} -->
	{/each}
</div>
