<script>
	import { page } from '$app/stores';
	import { Ripple } from '$lib/functions/ripple';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex w-full justify-around py-4">
	<a
		class="btn variant-filled px-3 py-3 but"
		href={`${$page.url.origin}/#projects`}
		on:click={Ripple}
	>
		<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
		<span class="break">&nbspGo back&nbsp</span>
	</a>
</div>

<div class="mdx px-4 md:px-16">
	{@html data.data}
</div>
