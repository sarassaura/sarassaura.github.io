<script lang="ts">
	let SliderRef: HTMLDivElement;

	function GoLeft() {
		const x =
			SliderRef.scrollLeft == 0
				? SliderRef.clientWidth * SliderRef.childElementCount
				: SliderRef.scrollLeft - SliderRef.clientWidth;
		SliderRef.scroll(x, 0);
	}
	function GoRight() {
		const x =
			SliderRef.scrollLeft == SliderRef.scrollWidth - SliderRef.clientWidth
				? 0
				: SliderRef.scrollLeft + SliderRef.clientWidth;
		SliderRef.scroll(x, 0);
	}
</script>

<div class="section about" id="about">
	<div class="presentation overflow-hidden md:px-16 px-4 gap-y-5 md:gap-y-20">
		<p class="h6 w-fit title">
			Hi, I'm Sarah a <br class="break" />
			<span class="typewrite">Web Developer</span>
		</p>
		<div class="flex gap-2 md:gap-4">
			<a class="btn variant-filled" href="https://rxresu.me/sarahyukino/sarah-nakada">Resume</a>
			<a class="btn variant-ghost-tertiary" href="mailto:sarahyukinonakada@gmail.com">Email me</a>
		</div>
	</div>
	<div class="carousel">
		<div class="slider" bind:this={SliderRef}>
			<img src="/iphone.webp" alt="iphone" />
			<img src="/pc.webp" alt="iphone" />
			<img src="/tablet.webp" alt="iphone" />
		</div>
		<div class="controls">
			<button class="prev btn variant-ghost" on:click={GoLeft}>
				<iconify-icon icon="uiw:left" height="36" />
			</button>
			<button class="next btn variant-ghost" on:click={GoRight}>
				<iconify-icon icon="uiw:right" height="36" />
			</button>
		</div>
	</div>
</div>
