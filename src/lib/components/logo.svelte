<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
</script>

<a
	href={`${$page.url.origin}/#about`}
	class="font-bold text-lg"
	transition:fade={{ duration: 500, delay: 250 }}>Sarah Yukino</a
>
