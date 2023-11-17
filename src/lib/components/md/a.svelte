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

<a {href} {rel}>
	<slot />
</a>
