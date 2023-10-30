<script>
	import { page } from '$app/stores';
	import Logo from '$lib/Icons/logo.svelte';
	import { fade } from 'svelte/transition';
</script>

<a
	href={`${$page.url.origin}/#about`}
	class="font-bold text-lg flex items-center logo"
	transition:fade={{ duration: 500, delay: 250 }}
>
	<Logo />
	Sarah Yukino
</a>
