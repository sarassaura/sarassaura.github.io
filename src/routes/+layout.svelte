<script lang="ts">
	// import { afterNavigate } from '$app/navigation';
	import { Navbar, Footer } from '$lib';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
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
</script>

<!-- <Drawer>
	<Menu />
</Drawer> -->

<AppShell slotPageFooter="flex justify-center py-5 bg-secondary-500" regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
