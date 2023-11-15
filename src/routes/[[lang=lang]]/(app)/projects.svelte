<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import Github from '$lib/Icons/github.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';

	export let data: PageData['projects'];

	let gitRef: Array<HTMLAnchorElement | null> = [null, null, null, null, null, null];
	let play: Array<boolean> = [true, true, true, true, true, true];
</script>

<div class="section md:px-16 px-4 shrink-0" id="projects">
	<h2 class="mb-8 text-center pol">{$LL.projects()}</h2>
	<div class="projects gap-4 md:gap-6">
		{#each data.viewer.pinnedItems.edges as item, id (item)}
			<figure class="relative mb-8">
				<div class="card p-4 variant-glass-primary hidy" data-popup={item.node.name}>
					<p>{item.node.description}</p>
					<div class="arrow variant-glass-primary" />
				</div>
				<a href={$LL.link(`/projects/${item.node.name}`)}>
					<img
						class="work rounded-md [&>*]:pointer-events-none hover:grayscale grayscale-0"
						loading="lazy"
						use:popup={{
							event: 'hover',
							target: item.node.name,
							placement: 'bottom'
						}}
						src={item.node.openGraphImageUrl}
						alt={item.node.description}
					/>
				</a>
				<figcaption>
					<div class="flex gap-2 py-2">
						{#each item.node.repositoryTopics.nodes as topics}
							<span class="badge variant-ghost-primary">{topics.topic.name}</span>
						{/each}
					</div>
					<div class="flex gap-4 items-center">
						<a
							href={`https://github.com/sarassaura/${item.node.name}`}
							class="flex items-center pulse"
							aria-label={$LL.github()}
							bind:this={gitRef[id]}
							on:mouseenter={() => {
								if (play[id]) {
									gitRef[id]?.style.setProperty('--_anime', 'pulse 2s ease-in');
									play[id] = false;
									setTimeout(() => {
										gitRef[id]?.style.setProperty('--_anime', 'none');
										play[id] = true;
									}, 3000);
								}
							}}
						>
							<Github height="28" width="28" style="rounded-full" />
						</a>
						<a href={item.node.homepageUrl} class="flex items-center gap-1 links h-fit">
							Website
							<iconify-icon icon="ph:arrow-square-out-bold" height="20px" aria-hidden="true" />
						</a>
					</div>
				</figcaption>
			</figure>
		{/each}
		<a href={$LL.link('/projects')} class="hidden">{$LL.projects()}</a>
	</div>
</div>
