<script lang="ts">
	import { HamburguerIcon } from '$lib';
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

<button
	class="btn-icon dark:fill-white lg:hidden button-burguer flex items-center"
	on:click={toggle}
	aria-label="hamburguer menu"
>
	<HamburguerIcon style={$drawerStore.open ? 'open' : 'closed'} />
</button>
