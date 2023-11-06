<script lang="ts">
	import { Navbar, Menu, scroll_dir, change_dir, throttle } from '$lib';
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

	let lastScroll = 0;
	let dir: boolean;

	scroll_dir.subscribe((value) => {
		dir = value;
	});

	function direction(e: Event) {
		const target = e.target as HTMLElement;

		if (dir != target.scrollTop > lastScroll) {
			change_dir(target.scrollTop > lastScroll);
		}

		lastScroll = target.scrollTop <= 0 ? 0 : target.scrollTop;
	}
</script>

<Drawer class="lg:hidden z-[8]" zIndex="">
	<Menu />
</Drawer>

<AppShell
	on:scroll={(e) => throttle(() => direction(e), 230)}
	class="h-full relative"
	slotPageFooter="flex justify-center py-5"
	slotHeader="relative"
>
	<svelte:fragment slot="header">
		<div class="skip-navigation">
			<a href="#main-content">Skip navigation</a>
		</div>
		<Navbar />
	</svelte:fragment>
	<slot />
</AppShell>
