<script>
	import Mobile from '$lib/assets/images/mobile.webp';
	import Tablet from '$lib/assets/images/tablet.webp';
	import Desktop from '$lib/assets/images/desktop.webp';
</script>

<div class="img">
	<picture>
		<source media="(min-width: 1024px)" srcset={Desktop} width="270px" height="540px" />
		<source media="(min-width: 640px)" srcset={Tablet} width="546px" height="326px" />
		<source media="(min-width: 0px)" srcset={Mobile} width="322px" height="235px" />
		<img src={Mobile} alt="Showcase" width="322px" height="235px" />
	</picture>
</div>
