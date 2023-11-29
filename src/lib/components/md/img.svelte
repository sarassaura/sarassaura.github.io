<script lang="ts">
	export let alt: string;
	import { CldImage } from 'svelte-cloudinary';
	import { page } from '$app/stores';

	let project = $page.url.pathname.split('/');
</script>

{#if alt === 'Banner'}
	<CldImage
		src={`portfolio/${project[project.length - 1]}/${alt}`}
		{alt}
		height={250}
		width="unset"
		aspectRatio={3.75}
		priority={true}
		objectFit="scale-down"
	/>
{:else}
	<CldImage
		src={`portfolio/${project[project.length - 1]}/${alt}`}
		{alt}
		height="1000px"
		layout="fullWidth"
		priority={true}
		objectFit="scale-down"
	/>
{/if}
