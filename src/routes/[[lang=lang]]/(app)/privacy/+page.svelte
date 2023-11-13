<script>
	import { Ripple } from '$lib/functions/ripple';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<div class="flex w-full justify-around py-4">
	<a
		class="btn variant-filled px-3 py-3 but"
		href={$LL.link('/')}
		on:click={Ripple}
		aria-label="Go back"
	>
		<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
		<span class="break">&nbspGo back&nbsp</span>
	</a>
</div>
