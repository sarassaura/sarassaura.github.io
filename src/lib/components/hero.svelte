<script>
	import Mobile from '$lib/assets/images/mobile.png';
	import Tablet from '$lib/assets/images/tablet.png';
	import Desktop from '$lib/assets/images/desktop.png';
</script>

<div class="img">
	<picture>
		<source media="(min-width: 1024px)" srcset={Desktop} />
		<source media="(min-width: 640px)" srcset={Tablet} />
		<source media="(min-width: 0px)" srcset={Mobile} />
		<img src={Mobile} alt="Showcase" />
	</picture>
</div>
