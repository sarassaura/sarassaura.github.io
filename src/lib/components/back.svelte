<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { Ripple } from '$lib/functions/ripple';

	export let icon: string;
	export let link: string;
</script>

<a
	class="btn variant-filled px-3 py-3 but"
	href={$LL.link(link)}
	on:click={Ripple}
	aria-label={$LL.back()}
>
	<iconify-icon {icon} height="28" width="28" />
	<span class="break !ml-0 pl-1">&nbsp{$LL.back()}&nbsp</span>
</a>
