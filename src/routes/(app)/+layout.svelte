<script lang="ts">
	import { Navbar, Menu } from '$lib';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	initializeStores();

	onMount(() => {
		// let chrome = document.querySelector('textarea');
		if (navigator.userAgent.indexOf('Chrome') != -1) {
			// chrome?.setAttribute('--_font_size', '0.5625rem');
			// chrome?.setAttribute('--_line_height', '0.75rem');
		}
		if (navigator.userAgent.indexOf('Firefox') != -1) {
			// This is Firefox
		}
	});
</script>

<Drawer class="lg:hidden z-[8]" zIndex="">
	<Menu />
</Drawer>

<AppShell class="h-full" slotPageFooter="flex justify-center py-5" slotHeader="relative z-[8]">
	<svelte:fragment slot="header">
		<div class="skip-navigation">
			<a href="#main-content">Skip navigation</a>
		</div>
		<Navbar />
	</svelte:fragment>
	<slot />
</AppShell>
