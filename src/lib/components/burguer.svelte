<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	const toggle = () => {
		if ($drawerStore.open) {
			drawerStore.close();
		} else {
			drawerStore.open(drawerSettings);
		}
	};

	const drawerSettings: DrawerSettings = {
		id: 'menu',
		position: 'right',
		width: 'w-full md:w-[480px]'
	};
</script>

<button class="btn-icon fill-white lg:hidden" on:click={toggle}>
	{#if !$drawerStore.open}
		<svg
			height="32px"
			id="Layer_1"
			style="enable-background:new 0 0 32 32;"
			version="1.1"
			viewBox="0 0 32 32"
			width="32px"
			xml:space="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			><path
				d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"
			/></svg
		>
	{:else}
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
	{/if}
</button>
