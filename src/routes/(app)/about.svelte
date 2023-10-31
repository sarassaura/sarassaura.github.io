<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import { Ripple } from '$lib/functions/ripple';
</script>

<div class="section about shrink-none" id="about">
	<div class="hero-body">
		<p class="heading mb-5 lg:mb-8">
			Hi,
			<span class="">I'm Sarah,</span>
			<br class="break" />
			<span class="typewrite">Web Developer</span>
		</p>
		<div class="subheading mb-10 lg:mb-16">
			I am passionate about coding, I have a technical diploma in computing for the internet and I'm
			currently studying computer science.
		</div>
		<div class="flex gap-2 md:gap-3 mt-4 w-fit">
			<a class="btn variant-filled but" href={`/resume`} on:click={Ripple}>Resume</a>
			<a class="btn variant-ghost-primary" href={`/#contact-me`}>Email me</a>
		</div>
	</div>
	<Hero />
</div>
