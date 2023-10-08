<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	const links = ['about', 'skills', 'projects', 'services', 'contact-me'];
</script>

<TabGroup border="border-none">
	{#each links as link}
		<TabAnchor name="tab1" href={`#${link}`} class="uppercase">{link.replace('-', ' ')}</TabAnchor>
	{/each}
</TabGroup>
