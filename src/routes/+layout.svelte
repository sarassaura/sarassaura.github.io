<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { Navbar, Footer, Menu, scroll_dir, change, throttle } from '$lib';
	import type { AfterNavigate } from '@sveltejs/kit';
	import '../app.postcss';
	import 'iconify-icon';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	afterNavigate((params: AfterNavigate) => {
		const isNewPage: boolean | null =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
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
			change(target.scrollTop > lastScroll);
			console.log(dir);
		}

		lastScroll = target.scrollTop <= 0 ? 0 : target.scrollTop;
	}
</script>

<Drawer zIndex="" class="lg:hidden">
	<Menu />
</Drawer>

<AppShell
	slotHeader={`nav ${dir ? 'hide-nav' : 'show-nav'}`}
	slotPageFooter="flex justify-center py-5"
	regionPage="scroll-smooth"
	on:scroll={(e) => throttle(() => direction(e), 230)}
>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
