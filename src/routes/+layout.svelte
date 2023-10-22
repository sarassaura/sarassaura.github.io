<script lang="ts">
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import 'iconify-icon';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: { url: string };
</script>

{#key data.url}
	<div
		class="w-full h-full flex flex-col"
		in:fly={{ x: -200, duration: 400, delay: 400 }}
		out:fly={{ duration: 400 }}
	>
		<slot />
	</div>
{/key}
