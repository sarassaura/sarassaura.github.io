<script>
	import { CldImage } from 'svelte-cloudinary';
	import { Cloudinary } from '@cloudinary/url-gen';

	const cld = new Cloudinary({
		cloud: { cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME }
	});
</script>

<div class="img">
	<picture>
		<source
			media="(min-width: 1024px)"
			srcset={cld.image('desktop').format('auto').quality('auto').toURL()}
			width={270}
			height={540}
		/>
		<source
			media="(min-width: 640px)"
			srcset={cld.image('tablet').format('auto').quality('auto').toURL()}
			width={546}
			height={326}
		/>
		<source
			media="(min-width: 0px)"
			srcset={cld.image('mobile').format('auto').quality('auto').toURL()}
			width={322}
			height={235}
		/>
		<CldImage src="mobile" alt="Showcase" layout="fullWidth" height="100%" priority={true} />
	</picture>
</div>
