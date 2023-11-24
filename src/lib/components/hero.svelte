<script>
	import Mobile from '$lib/assets/images/mobile.png';
	import Tablet from '$lib/assets/images/tablet.png';
	import Desktop from '$lib/assets/images/desktop.png';
</script>

<div class="carousel">
	<div class="slider">
		<img
			src={Mobile}
			alt="Mockup"
			srcset={`${Mobile} 640w, ${Tablet} 1279w, ${Desktop} 1400w`}
			sizes={`(max-width: 640px) 237px 190px,
				(min-width: 640px) 546px 326px,
				(min-width: 1024px) 270px 540px`}
			decoding="async"
		/>
	</div>
</div>
