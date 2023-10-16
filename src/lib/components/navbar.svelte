<script lang="ts">
	import { Burguer, Tabs } from '$lib';
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from './logo.svelte';
	import { section } from '$lib';

	let now: string;

	section.subscribe((value) => {
		now = value;
	});
</script>

<AppBar class="navbar relative nav" background="bg-transparent">
	<svelte:fragment slot="lead">
		{#if now !== 'bla'}
			<Logo />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if now !== 'bla'}
			<Tabs />
			<Burguer />
		{/if}
	</svelte:fragment>
</AppBar>
