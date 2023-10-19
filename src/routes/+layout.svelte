<script lang="ts">
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import 'iconify-icon';

	export let data: { url: string };
</script>

{#key data.url}
	<div
		class="w-full h-full"
		in:fly={{ x: -200, duration: 400, delay: 400 }}
		out:fly={{ duration: 400 }}
	>
		<slot />
	</div>
{/key}
