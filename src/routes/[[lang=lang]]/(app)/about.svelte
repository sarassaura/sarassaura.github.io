<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import { Ripple } from '$lib/functions/ripple';
	import { LL, locale } from '$lib/i18n/i18n-svelte';
</script>

<div class="section about shrink-none" id="about">
	<div class="hero-body">
		<h1 class="heading mb-5 lg:mb-8" id="main-content">
			{$LL.hi()}
			<span class="">{$LL.presentation()}</span>
			<br class="break" />
			<span class="typewrite">Web Developer</span>
		</h1>
		<div class="subheading mb-10 lg:mb-16" lang={$locale}>
			{$LL.subheading()}
		</div>
		<div class="flex gap-2 md:gap-3 mt-4 w-fit">
			<a class="btn variant-filled but" href={$LL.link(`/resume`)} on:click={Ripple} id="resume"
				>{$LL.resume()}</a
			>
			<button
				class="btn variant-ghost-primary"
				on:click={() => {
					document.getElementById('contact-me')?.scrollIntoView();
					window.history.replaceState(null, '', `${$locale}#contact-me`);
				}}>{$LL.cta()}</button
			>
		</div>
	</div>
	<Hero />
</div>
