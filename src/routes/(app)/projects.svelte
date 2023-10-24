<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData['projects'];
</script>

<div class="section projects md:px-16 md:gap-4 px-4 shrink-0" id="projects">
	{#each data.viewer.pinnedItems.edges as item}
		<figure class="relative mb-8">
			<div class="card p-4 variant-glass-tertiary" data-popup={item.node.name}>
				<p>{item.node.description}</p>
				<div class="arrow variant-glass-tertiary" />
			</div>
			<img
				class="work rounded-md [&>*]:pointer-events-none"
				use:popup={{
					event: 'hover',
					target: item.node.name,
					placement: 'bottom'
				}}
				src={item.node.openGraphImageUrl}
				alt={item.node.description}
			/>
			<figcaption class="sm:pt-2 md:pt-2">
				<div class="flex gap-4 items-center">
					<a
						href={`https://github.com/sarassaura/${item.node.name}`}
						class="flex items-center"
						aria-label="Code on Github"
					>
						<iconify-icon icon="mdi:github" height="32px" aria-hidden="true" />
					</a>
					<a href={item.node.homepageUrl} class="flex items-center gap-1 links h-fit">
						Website
						<iconify-icon icon="ph:arrow-square-out-bold" height="20px" aria-hidden="true" />
					</a>
				</div>
				<div class="flex gap-2 py-2">
					{#each item.node.repositoryTopics.nodes as topics}
						<span class="badge variant-ghost-tertiary">{topics.topic.name}</span>
					{/each}
				</div>
			</figcaption>
		</figure>
	{/each}
</div>
