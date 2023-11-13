<script lang="ts">
	import Logo from '$lib/Icons/logo.svelte';
	import Name from '$lib/Icons/name.svelte';
	import { locale } from '$lib/i18n/i18n-svelte';

	let logoRef: HTMLButtonElement;
	let play = true;
</script>

<button
	on:click={() => {
		document.getElementById('about')?.scrollIntoView();
		window.history.replaceState(null, '', `${$locale}#about`);
	}}
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
</button>
