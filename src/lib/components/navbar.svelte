<script>
	import { Tabs } from '$lib';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar class="navbar sticky top-0 h-20" background="bg-secondary-500">
	<svelte:fragment slot="lead">icon</svelte:fragment>
	<svelte:fragment slot="trail">
		<Tabs />
	</svelte:fragment>
</AppBar>
