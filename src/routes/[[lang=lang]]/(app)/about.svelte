<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import { Ripple } from '$lib/functions/ripple';
	import { LL, locale } from '$lib/i18n/i18n-svelte';
</script>

<div class="section about shrink-none" id="about">
	<div class="hero-body">
		<h1 class="heading mb-5 lg:mb-8" id="main-content">
			{$LL.hi()}
			<span class="">I'm Sarah,</span>
			<br class="break" />
			<span class="typewrite">Web Developer</span>
		</h1>
		<div class="subheading mb-10 lg:mb-16">
			I am passionate about coding, I have a technical diploma in computing for the internet and I'm
			currently studying computer science.
		</div>
		<div class="flex gap-2 md:gap-3 mt-4 w-fit">
			<a class="btn variant-filled but" href={$LL.link(`/resume`)} on:click={Ripple} id="resume"
				>Resume</a
			>
			<button
				class="btn variant-ghost-primary"
				on:click={() => {
					document.getElementById('contact-me')?.scrollIntoView();
					window.history.replaceState(null, '', `${$locale}#contact-me`);
				}}>Email me</button
			>
		</div>
	</div>
	<Hero />
</div>
