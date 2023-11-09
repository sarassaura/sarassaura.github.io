<script>
	import { Ripple } from '$lib/functions/ripple';
</script>

<div class="flex w-full justify-around py-4">
	<a class="btn variant-filled px-3 py-3 but" href="/" on:click={Ripple}>
		<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
		<span class="break">&nbspGo back&nbsp</span>
	</a>
</div>
