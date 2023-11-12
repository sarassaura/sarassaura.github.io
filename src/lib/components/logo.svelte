<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/Icons/logo.svelte';
	import Name from '$lib/Icons/name.svelte';

	let logoRef: HTMLAnchorElement;
	let play = true;
</script>

<a
	href={`${$page.url.origin}/#about`}
	class="font-bold text-lg flex items-center logo"
	bind:this={logoRef}
	on:mouseenter={() => {
		if (play) {
			logoRef.style.setProperty('--_anime', 'sign 2.5s linear');
			play = false;
			setTimeout(() => {
				logoRef.style.setProperty('--_anime', 'none');
				play = true;
			}, 2500);
		}
	}}
>
	<Logo />
	<Name />
</a>
