<script lang="ts">
	import { Burguer, Tabs } from '$lib';
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from './logo.svelte';
</script>

<AppBar class="navbar nav" background="bg-transparent">
	<svelte:fragment slot="lead">
		<Logo />
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<Tabs />
		<Burguer />
	</svelte:fragment>
</AppBar>
