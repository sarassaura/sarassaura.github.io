<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { Navbar, Footer, Menu, scroll_dir, change_dir, throttle } from '$lib';
	import type { AfterNavigate } from '@sveltejs/kit';
	import '../app.postcss';
	import 'iconify-icon';
	import { Drawer } from '@skeletonlabs/skeleton';
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
			change_dir(target.scrollTop > lastScroll);
		}

		lastScroll = target.scrollTop <= 0 ? 0 : target.scrollTop;
	}
</script>

<Drawer class="lg:hidden z-[8]" zIndex="">
	<Menu />
</Drawer>

<div on:scroll={(e) => throttle(() => direction(e), 230)} class="hello">
	<Navbar />
	<slot />
	<Footer />
</div>
