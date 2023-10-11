<script lang="ts">
	// import { afterNavigate } from '$app/navigation';
	import { Navbar, Footer, Menu } from '$lib';
	import '../app.postcss';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	// afterNavigate((params: any) => {
	// 	const isNewPage: boolean =
	// 		params.from && params.to && params.from.route.id !== params.to.route.id;
	// 	const elemPage = document.querySelector('#page');
	// 	if (isNewPage && elemPage !== null) {
	// 		elemPage.scrollTop = 0;
	// 	}
	// });

	let lastScroll = 0;
	let timer: unknown;
	let style = false;

	const throttle = function (func: () => void, delay: number) {
		if (timer) {
			return;
		}

		timer = setTimeout(function () {
			func();

			timer = undefined;
		}, delay);
	};

	function direction(e: UIEvent) {
		const target = e.target as HTMLElement;

		style = target.scrollTop > lastScroll ? true : false;

		lastScroll = target.scrollTop <= 0 ? 0 : target.scrollTop;
	}
</script>

<Drawer zIndex="" class="lg:hidden">
	<Menu />
</Drawer>

<AppShell
	slotHeader={`relative block ${style ? 'hide-nav' : 'show-nav'}`}
	slotPageFooter="flex justify-center py-5"
	regionPage="scroll-smooth"
	on:scroll={(e) => throttle(() => direction(e), 100)}
>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
