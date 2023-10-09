<script lang="ts">
	import { ListBox, ListBoxItem, getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const drawerStore = getDrawerStore();
	const close = () => drawerStore.close();

	let valueSingle: string = $page.url.hash.slice(1) || 'about';
	const links = ['about', 'skills', 'projects', 'services', 'contact-me'];
</script>

<div class="flex w-full p-4 md:px-16 flex-row-reverse">
	<button class="btn-icon fill-white lg:hidden" on:click={close}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			fill="currentColor"
			class="bi bi-x"
			viewBox="0 0 16 16"
		>
			<path
				d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
			/>
		</svg>
	</button>
</div>
<div class="flex w-full p-4 md:px-16 flex-row-reverse">
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
