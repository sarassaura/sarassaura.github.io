<script>
	import { Hero, Navbar, Footer } from '$lib';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell
	slotPageFooter="flex justify-center py-5 bg-secondary-500"
	regionPage="scroll-smooth scroll-pt-20"
>
	<Hero />
	<Navbar />
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
