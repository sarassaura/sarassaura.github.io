<script lang="ts">
	export let href: string;
	export let rel: string;
	import { page } from '$app/stores';

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
</script>

{#if href.startsWith('https://github.com/sarassaura/')}
	<video autoplay loop muted>
		<source src={href} type="video/mp4" />
		Your browser does not support HTML video.
	</video>
{:else}
	<a {href} {rel}>
		<slot />
	</a>
{/if}
