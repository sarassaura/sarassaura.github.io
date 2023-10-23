<script lang="ts">
	import { ListBox, ListBoxItem, getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Utilities from './utilities.svelte';

	let valueSingle: string = $page.url.hash.slice(1) || 'about';
	const links = [
		{ link: 'about', icon: 'clarity:home-line' },
		{ link: 'skills', icon: 'cil:education' },
		{ link: 'projects', icon: 'material-symbols:folder-outline' },
		{ link: 'contact-me', icon: 'icon-park-outline:edit-name' }
	];

	const drawerStore = getDrawerStore();
</script>

<div class="flex w-full h-full p-4 md:px-16 flex-row-reverse pt-20 pb-8 h6">
	<div class="w-full h-full flex flex-col">
		<ListBox class="w-full">
			{#each links as { link, icon }}
				<ListBoxItem
					regionLead="flex"
					bind:group={valueSingle}
					name={link}
					value={link}
					on:click={() => {
						drawerStore.close();
						goto(`${$page.url.origin}/#${link}`);
					}}
				>
					<svelte:fragment slot="lead">
						<iconify-icon {icon} height="24" />
					</svelte:fragment>
					{link.toUpperCase().replace('-', ' ')}
				</ListBoxItem>
			{/each}
		</ListBox>
		<div class="flex justify-between flex-row-reverse px-4 grow items-end">
			<Utilities />
		</div>
	</div>
</div>
