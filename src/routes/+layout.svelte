<script lang="ts">
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import 'iconify-icon';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { sineIn, sineOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: { url: string };

	let mount = false;
	onMount(() => (mount = true));
</script>

{#key data.url}
	<div class={`w-full h-full items-center justify-center ${mount ? 'hidden' : 'flex'}`}>
		Loading...
	</div>
	<div
		class={`w-full h-full flex-col ${mount ? 'flex' : 'hidden'}`}
		in:fly={{ x: -100, duration: 500, delay: 500, easing: sineIn }}
		out:fly={{ x: 100, duration: 500, easing: sineOut }}
	>
		<slot />
	</div>
{/key}
