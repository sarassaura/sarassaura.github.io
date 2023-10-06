<script>
	import '../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell slotPageFooter="flex justify-center py-5 bg-surface-500">
	<div class="h-screen bg-surface-500" />
	<AppBar class="sticky top-0">Page Header</AppBar>
	<slot />
	<svelte:fragment slot="pageFooter">Footer</svelte:fragment>
</AppShell>
