<script lang="ts">
	import { page } from '$app/stores';

	let SliderRef: HTMLDivElement;
</script>

<div class="section about shrink-none" id="about">
	<div class="presentation overflow-hidden md:px-16 px-4 gap-y-5">
		<p class="h6 w-fit title text-center">
			Hi, I'm Sarah a<br class="break" />
			<span class="typewrite">Web Developer</span>
		</p>
		<div class="paragraph text-center text-base">
			I am passionate about coding with a love for programming. I have a technical diploma in
			computing for the internet and I'm currently studying computer science.
		</div>
		<div class="flex gap-2 md:gap-4 mt-8">
			<a class="btn variant-filled" href={`${$page.url.origin}/resume`}>Resume</a>
			<a class="btn variant-ghost-tertiary" href={`${$page.url.origin}/#contact-me`}>Email me</a>
		</div>
	</div>
	<div class="carousel">
		<div class="slider" bind:this={SliderRef}>
			<img src="/iphone.webp" alt="iphone" />
		</div>
	</div>
</div>
