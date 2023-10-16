<script lang="ts">
	import { section } from '$lib';
	import { fade } from 'svelte/transition';

	let now: string;

	section.subscribe((value) => {
		now = value;
	});
</script>

<div class="section about" id="about">
	{#if now == 'about' || now == ''}
		<div class="presentation overflow-hidden md:px-16 px-4 gap-y-5 md:gap-y-20">
			<p class="h6 w-fit title" transition:fade={{ duration: 500, delay: 250 }}>
				Hi, I'm Sarah a <br class="break" />
				<span class="typewrite">Web Developer</span>
			</p>
			<div transition:fade={{ duration: 500, delay: 500 }}>
				<a class="btn variant-filled" href="https://rxresu.me/sarahyukino/sarah-nakada">Resume</a>
				<a class="btn variant-ghost-tertiary" href="mailto:sarahyukinonakada@gmail.com">Email me</a>
			</div>
		</div>
		<div class="image" transition:fade={{ duration: 500, delay: 1000 }}>
			<img src="/iphone.webp" alt="iphone" />
		</div>
	{/if}
</div>
