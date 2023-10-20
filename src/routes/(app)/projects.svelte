<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData['projects'];
</script>

<div class="section projects md:px-16 md:gap-4 px-4 shrink-0" id="projects">
	{#each data.viewer.pinnedItems.edges as item}
		<figure class="relative mb-8">
			<img class="work" src={item.node.openGraphImageUrl} alt={item.node.name} />
			<figcaption class="sm:pt-2 md:pt-2">
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
