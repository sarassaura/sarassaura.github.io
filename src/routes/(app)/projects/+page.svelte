<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

	const result = data.projects.viewer.pinnedItems.edges;
</script>

{#each result as project}
	<a href={`/projects/${project.node.name}`}>{project.node.name}</a>
	<br />
{/each}
