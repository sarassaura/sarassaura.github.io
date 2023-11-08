<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let scroller: Element;

	onMount(() => {
		scroller = document.querySelector('#page')!;
	});
</script>

<div class="footer">
	<div class="footer--links">Links</div>
	<div class="footer--testimonials">Testimonials</div>
	<div class="footer--whatsapp">Whatsapp</div>
	<div class="footer--logo">Logo</div>
	<button
		class="h-full w-full flex justify-center items-center footer--back btn"
		on:click={() => {
			scroller.scrollTo(0, 0);
			goto('/');
		}}>Back to Top</button
	>
	<div class="footer--privacy">Privacy Policy</div>
	<div class="footer--cookie">Cookie Policy</div>
	<div class="footer--copyright">©sarassaura, 2023. All rights reserved.</div>
</div>
