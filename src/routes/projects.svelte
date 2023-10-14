<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: {
		data: {
			viewer: {
				pinnedItems: {
					totalCount: number;
					edges: Array<{
						node: {
							name: string;
							description: string;
							openGraphImageUrl: string;
							createdAt: string;
							homepageUrl: string;
							repositoryTopics: { totalCount: number; nodes: Array<{ topic: { name: string } }> };
						};
					}>;
				};
			};
		};
	};
</script>

<div class="section projects md:px-16" id="projects">
	{#each data.data.viewer.pinnedItems.edges as item}
		<figure>
			<img class="work" src={item.node.openGraphImageUrl} alt={item.node.name} />
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
