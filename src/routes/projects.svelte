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

<div class="section projects" id="projects">
	{#each data.data.viewer.pinnedItems.edges as item}
		<div class="work" style={`background-image: url(${item.node.openGraphImageUrl})`}>
			<p>{item.node.name}</p>
			<p>{item.node.description}</p>
			<p>{item.node.createdAt}</p>
			<p>{item.node.homepageUrl}</p>
			{#each item.node.repositoryTopics.nodes as topics}
				<p>{topics.topic.name}</p>
			{/each}
		</div>
	{/each}
</div>
