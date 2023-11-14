<script lang="ts">
	import { ListBox, ListBoxItem, getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import Utilities from './utilities.svelte';
	import { locale, LL } from '$lib/i18n/i18n-svelte';

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
			{#each links as { link, icon }, id}
				<ListBoxItem
					regionLead="flex mr-1"
					bind:group={valueSingle}
					name={link}
					value={link}
					on:click={() => {
						drawerStore.close();
						document.getElementById(link)?.scrollIntoView();
						window.history.replaceState(null, '', `${$locale}#${link}`);
					}}
				>
					<svelte:fragment slot="lead">
						<iconify-icon {icon} height="24" />
					</svelte:fragment>
					{Object.values($LL.tabs)[id]()}
				</ListBoxItem>
			{/each}
		</ListBox>
		<div class="inline-grid px-4 grow items-end bla">
			<Utilities />
		</div>
	</div>
</div>
