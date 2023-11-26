<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<div class="img">
	<picture>
		<source
			media="(min-width: 1024px)"
			srcset={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'desktop'}
			width="270px"
			height="540px"
		/>
		<source
			media="(min-width: 640px)"
			srcset={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'tablet'}
			width="546px"
			height="326px"
		/>
		<source
			media="(min-width: 0px)"
			srcset={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'mobile'}
			width="322px"
			height="235px"
		/>
		<CldImage
			src={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'mobile'}
			alt="Showcase"
			layout="constrained"
			width="322px"
			height="235px"
		/>
	</picture>
</div>
