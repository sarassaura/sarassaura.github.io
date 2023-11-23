<script lang="ts">
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import 'iconify-icon';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { sineIn, sineOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Roboto from '$lib/assets/fonts/static/RobotoMono-Regular.woff2';
	import OpenSans from '$lib/assets/fonts/static/OpenSans-Regular.woff2';
	import LL, { setLocale } from '$lib/i18n/i18n-svelte';
	import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
	import { page } from '$app/stores';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: { url: string };

	let mount = false;
	let wait = true;

	onMount(async () => {
		const config = localStorage.getItem('config') as string;

		if (JSON.parse(config).lang && $page.url.pathname == '/') {
			await loadLocaleAsync(JSON.parse(config).lang);
			setLocale(JSON.parse(config).lang);
		}
		mount = true;
	});
	setTimeout(async () => {
		wait = false;
	}, 500);
</script>

<svelte:head>
	<link rel="preload" href={Roboto} as="font" type="font/woff2" crossorigin="crossorigin" />
	<link rel="preload" href={OpenSans} as="font" type="font/woff2" crossorigin="crossorigin" />
	<link rel="preconnect" href="https://api.iconify.design" crossorigin="crossorigin" />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content="Sarah Yukino - Web developer &amp; Software Engineer" />
	<meta property="og:url" content="https://sarassaura.github.io/" />
	<meta
		property="og:description"
		content="Sarah's Personal Portfolio - Web developer &amp; Software Engineer"
	/>
	<meta property="og:type" content="profile" />
	<meta property="og:image" content="https://sarassaura.github.io/code.png" />
	<meta property="og:site_name" content="Sarah Yukino" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://sarassaura.github.io/" />
	<meta property="twitter:title" content="Sarah Yukino - Web developer &amp; Software Engineer" />
	<meta
		property="twitter:description"
		content="Sarah's Personal Portfolio - Web developer &amp; Software Engineer"
	/>
	<meta property="twitter:image" content="https://sarassaura.github.io/code.png" />
	<meta property="twitter:image:alt" content="Sarah is a Software Engineer" />

	<!-- Pinterest -->
	<meta name="pinterest-rich-pin" content="https://sarassaura.github.io/code.png" />
</svelte:head>

{#key data.url}
	<div
		class={`w-full h-full items-center justify-center relative perspective ${
			mount && !wait ? 'hidden' : 'flex'
		}`}
	>
		<div class="loading" />
		<div class="loading" />
		<div class="loading" />
		<span class="waiting">{$LL.loading()}...</span>
	</div>

	<div
		class={`w-full h-full flex-col ${mount && !wait ? 'flex' : 'hidden'}`}
		in:fly={{ x: -100, duration: 800, delay: 800, easing: sineIn }}
		out:fly={{ x: 100, duration: 800, easing: sineOut }}
		tabindex="-1"
	>
		<slot />
	</div>
{/key}

<style>
	.waiting {
		font-size: 15px;
	}
	.perspective {
		perspective: 1000px;
	}
	.loading {
		position: absolute;
		height: 240px;
		width: 240px;
		border-color: currentColor;
		border-radius: 50%;
		transform-style: preserve-3d;
	}

	.loading:nth-child(1) {
		animation: circle1 2s linear infinite;
		border-bottom: 11px solid;
	}

	.loading:nth-child(2) {
		animation: circle2 2s linear infinite;
		border-right: 11px solid;
	}

	.loading:nth-child(3) {
		animation: circle3 2s linear infinite;
		border-top: 11px solid;
	}

	@keyframes circle1 {
		0% {
			transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
		}
		100% {
			transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
		}
	}

	@keyframes circle2 {
		0% {
			transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
		}
		100% {
			transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
		}
	}

	@keyframes circle3 {
		0% {
			transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
		}
		100% {
			transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
		}
	}
</style>
