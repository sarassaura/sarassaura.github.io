<script lang="ts">
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import 'iconify-icon';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { sineIn, sineOut } from 'svelte/easing';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: { url: string };
</script>

{#key data.url}
	<div
		class="w-full h-full flex flex-col"
		in:fly={{ x: -100, duration: 500, delay: 500, easing: sineIn }}
		out:fly={{ x: 100, duration: 500, easing: sineOut }}
	>
		<slot />
	</div>
{/key}
