<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex w-full justify-around py-4">
	<a class="btn variant-filled px-3 py-3" href="/">
		<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
		<span class="break">&nbspGo back&nbsp</span>
	</a>
</div>

{@html data.data}
