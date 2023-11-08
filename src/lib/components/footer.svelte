<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '$lib/Icons/logo.svelte';
	import { onMount } from 'svelte';

	let scroller: Element;

	onMount(() => {
		scroller = document.querySelector('#page')!;
	});

	let logoRef: HTMLElement;
	let play = true;
</script>

<div class="footer">
	<div class="footer--links flex flex-col gap-y-4">
		<p class="h6 opacity-75">Links</p>
		<a href="/#about">About</a>
		<a href="/#skills">Skills</a>
		<a href="/#projects">Projects</a>
		<a href="/#contact-me">Contact me</a>
	</div>
	<div class="footer--testimonials">Testimonials</div>
	<a
		class="footer--whatsapp btn rounded-container-token"
		href="https://wa.me/5511991464391"
		aria-label="Whatsapp"
	>
		<iconify-icon icon="ic:baseline-whatsapp" aria-hidden="true" height="42" />
	</a>
	<div
		class="footer--logo logo"
		bind:this={logoRef}
		role="img"
		on:mouseenter={() => {
			if (play) {
				logoRef.style.setProperty('--_anime', 'sign 2.5s linear');
				play = false;
				setTimeout(() => {
					logoRef.style.setProperty('--_anime', 'none');
					play = true;
				}, 2500);
			}
		}}
	>
		<Logo height="42px" width="42px" />
	</div>
	<button
		class="h-full w-full flex justify-center items-center footer--back btn rounded-container-token"
		on:click={() => {
			scroller.scrollTo(0, 0);
			goto('/');
		}}>Back to Top</button
	>
	<div class="footer--privacy">Privacy Policy</div>
	<div class="footer--cookie">Cookie Policy</div>
	<div class="footer--copyright">©sarassaura, 2023. All rights reserved.</div>
</div>
