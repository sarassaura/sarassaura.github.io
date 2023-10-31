<script lang="ts">
	import { Burguer, Tabs, Utilities } from '$lib';
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from './logo.svelte';
</script>

<AppBar
	class="navbar nav"
	background="bg-transparent"
	slotDefault="place-self-end lg:place-self-center"
	slotTrail="place-content-end hidden lg:flex gap-5 space-x-0"
	gridColumns="grid-cols-2 lg:grid-cols-3"
>
	<svelte:fragment slot="lead">
		<Logo />
	</svelte:fragment>
	<Tabs />
	<Burguer />
	<svelte:fragment slot="trail">
		<Utilities />
	</svelte:fragment>
</AppBar>
