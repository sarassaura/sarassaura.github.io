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
	import LL from '$lib/i18n/i18n-svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: { url: string };

	let mount = false;
	let wait = true;

	onMount(() => (mount = true));
	setTimeout(() => {
		wait = false;
	}, 800);
</script>

<svelte:head>
	<link rel="preload" href={Roboto} as="font" type="font/woff2" crossorigin="crossorigin" />
	<link rel="preload" href={OpenSans} as="font" type="font/woff2" crossorigin="crossorigin" />
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
		<span>{$LL.loading()}...</span>
	</div>

	<div
		class={`w-full h-full flex-col ${mount && !wait ? 'flex' : 'hidden'}`}
		in:fly={{ x: -100, duration: 500, delay: 500, easing: sineIn }}
		out:fly={{ x: 100, duration: 500, easing: sineOut }}
		tabindex="-1"
	>
		<slot />
	</div>
{/key}

<style>
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
		border-bottom: 8px solid;
	}

	.loading:nth-child(2) {
		animation: circle2 2s linear infinite;
		border-right: 8px solid;
	}

	.loading:nth-child(3) {
		animation: circle3 2s linear infinite;
		border-top: 8px solid;
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
