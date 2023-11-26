<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<div class="img">
	<picture>
		<source
			media="(min-width: 1024px)"
			srcset={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'desktop'}
			width={270}
			height={540}
		/>
		<source
			media="(min-width: 640px)"
			srcset={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'tablet'}
			width={546}
			height={326}
		/>
		<source
			media="(min-width: 0px)"
			srcset={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'mobile'}
			width={322}
			height={235}
		/>
		<CldImage
			src={'https://res.cloudinary.com/drazwv6hx/image/upload/v1701021175/' + 'mobile'}
			alt="Showcase"
			layout="fullWidth"
			height="100%"
			priority={true}
		/>
	</picture>
</div>
