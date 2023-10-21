<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
</script>

<div class="section about shrink-none" id="about">
	<div class="hero-body">
		<p class="heading">
			Hi, I'm Sarah a<br class="break" />
			<span class="typewrite">Web Developer</span>
		</p>
		<div class="subheading">
			I am passionate about coding, I have a technical diploma in computing for the internet and I'm
			currently studying computer science.
		</div>
		<div class="flex gap-2 md:gap-3 mt-4 w-fit">
			<a class="btn variant-filled" href={`/resume`}>Resume</a>
			<a class="btn variant-ghost-tertiary" href={`/#contact-me`}>Email me</a>
		</div>
	</div>
	<Hero />
</div>
