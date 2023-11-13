<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const result = data?.projects?.viewer?.pinnedItems?.edges;
</script>

{#each result as project}
	<a href={`/projects/${project.node.name}`}>{project.node.name}</a>
	<br />
{/each}
