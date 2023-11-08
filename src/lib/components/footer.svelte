<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '$lib/Icons/logo.svelte';
	import { onMount } from 'svelte';

	let scroller: Element;

	onMount(() => {
		scroller = document.querySelector('#page')!;
	});
</script>

<div class="footer">
	<div class="footer--links flex flex-col gap-y-4">
		<p class="h6">Links</p>
		<a href="/#about">About</a>
		<a href="/#skills">Skills</a>
		<a href="/#projects">Projects</a>
		<a href="/#contact-me">Contact me</a>
	</div>
	<div class="footer--testimonials">Testimonials</div>
	<div class="footer--whatsapp">Whatsapp</div>
	<div class="footer--logo">
		<Logo />
	</div>
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
