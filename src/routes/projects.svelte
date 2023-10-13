<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: string[];
</script>

<div class="section projects" id="projects">
	{#each data as item}
		<p>{item}</p>
	{/each}
</div>
