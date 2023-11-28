<script lang="ts">
	export let href: string;
	export let rel: string;
	import { page } from '$app/stores';
	import { Cloudinary } from '@cloudinary/url-gen';

	const cld = new Cloudinary({
		cloud: { cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME }
	});

	const url = $page.url.pathname.replace('/es', '').replace('/pt-BR', '').replace('/en', '');

	if (href == '/README.md') {
		href = `${url}`;
	}
	if (href == '/README.es.md') {
		href = `/es${url}`;
	}
	if (href == '/README.pt-BR.md') {
		href = `/pt-BR${url}`;
	}

	let project = $page.url.pathname.split('/');
	let video = href.split('/');
</script>

{#if href.startsWith('https://github.com/sarassaura/')}
	<video loop muted controls>
		<source
			src={cld
				.video(`portfolio/${project[project.length - 1]}/video-${video[video.length - 1]}`)
				.format('auto')
				.quality('auto')
				.toURL()}
			type="video/mp4"
		/>
		Your browser does not support HTML video.
	</video>
{:else}
	<a {href} {rel}>
		<slot />
	</a>
{/if}
