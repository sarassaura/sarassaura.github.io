<script lang="ts">
	import type { PageData } from './$types';
	import LL from '$lib/i18n/i18n-svelte';

	export let data: PageData;

	const result = data?.projects?.viewer?.pinnedItems?.edges;
</script>

{#each result as project}
	<a href={$LL.link(`/projects/${project.node.name}`)}>{project.node.name}</a>
	<br />
{/each}
