<script lang="ts">
	import { ListBox, ListBoxItem, getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let valueSingle: string = $page.url.hash.slice(1) || 'about';
	const links = ['about', 'skills', 'projects', 'qualifications', 'contact-me'];

	const drawerStore = getDrawerStore();
</script>

<div class="flex w-full p-4 md:px-16 flex-row-reverse pt-20 h6">
	<ListBox class="w-full">
		{#each links as link}
			<ListBoxItem
				bind:group={valueSingle}
				name={link}
				value={link}
				on:click={() => {
					drawerStore.close();
					goto(`#${link}`);
				}}>{link.toUpperCase().replace('-', ' ')}</ListBoxItem
			>
		{/each}
	</ListBox>
</div>
