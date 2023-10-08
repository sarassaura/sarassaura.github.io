<script lang="ts">
	const links = ['about', 'skills', 'projects', 'services', 'contact-me'];
</script>

<div class="content flex items-center flex-col">
	{#each links as link}
		<div id={link} class="h-screen bg-surface-500 w-full">{link.replace('-', ' ')}</div>
	{/each}
</div>
