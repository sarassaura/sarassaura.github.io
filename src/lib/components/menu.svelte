<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let valueSingle: string = $page.url.hash.slice(1) || 'about';
	const links = ['about', 'skills', 'projects', 'services', 'contact-me'];
</script>

<div class="flex w-full p-4 md:px-16 flex-row-reverse pt-20">
	<ListBox class="w-full">
		{#each links as link}
			<ListBoxItem
				bind:group={valueSingle}
				name={link}
				value={link}
				on:click={() => {
					goto(`#${link}`);
				}}>{link.toLocaleUpperCase().replace('-', ' ')}</ListBoxItem
			>
		{/each}
	</ListBox>
</div>
