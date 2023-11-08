<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let scroller: Element;

	onMount(() => {
		scroller = document.querySelector('#page')!;
	});
</script>

<div class="footer">
	<button
		class="h-full w-full flex justify-center items-center"
		on:click={() => {
			scroller.scrollTo(0, 0);
			goto('/');
		}}>Back to Top</button
	>
	<div>©sarassaura, 2023. All rights reserved.</div>
</div>
