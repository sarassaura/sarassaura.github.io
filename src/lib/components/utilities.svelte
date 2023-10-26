<script lang="ts">
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let colorValue: string;
	let root: HTMLBodyElement;

	interface Config {
		color: string;
	}

	const colorStore: Writable<Config> = localStorageStore('config', { color: '#0EA5E9' });

	onMount(() => {
		root = document.getElementsByTagName('body')[0];
		colorValue = $colorStore.color;
		root.style.setProperty('--color-tertiary-500', rgb(colorValue));
	});

	function rgb(hex: string) {
		const color = hex;
		const r = parseInt(color.slice(1, 3), 16);
		const g = parseInt(color.slice(3, 5), 16);
		const b = parseInt(color.slice(5, 7), 16);
		return `${r} ${g} ${b}`;
	}
</script>

<div class="dropdown p-4 variant-glass-tertiary rounded-md" data-popup="config">
	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>Dark Mode</p>
		<LightSwitch />
	</div>
	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>Color</p>
		<div class="rounded-full" style="background-color: {colorValue};">
			<input
				class="input opacity-0"
				type="color"
				bind:value={colorValue}
				on:change={() => {
					root.style.setProperty('--color-tertiary-500', rgb(colorValue));
					$colorStore = { color: colorValue };
				}}
			/>
		</div>
	</div>
	<div class="flex justify-center gap-x-5 my-3 items-center">
		<button
			class="btn variant-outline-tertiary"
			on:click={() => {
				colorValue = '#0EA5E9';
				$colorStore = { color: colorValue };
				root.style.setProperty('--color-tertiary-500', `14 165 233`);
			}}>Reset</button
		>
	</div>
	<div class="arrow variant-glass-tertiary" />
</div>

<a
	class="flex items-center gap-1 hover:backdrop-brightness-75 rounded-full p-1 px-3 duration-300"
	href="/blog"
>
	<p>Blog</p>
	<iconify-icon icon="ph:arrow-square-out-bold" height="20" />
</a>

<a class="flex items-center gap-1 rounded-full" href="https://github.com/sarassaura/">
	<iconify-icon
		icon="mdi:github"
		height="28"
		class="rounded-full p-1 hover:backdrop-brightness-75 duration-300"
	/>
</a>

<iconify-icon
	icon="bi:gear-fill"
	height="24"
	fill="white"
	aria-label="config"
	class="cursor-pointer p-1.5 rounded-full hover:backdrop-brightness-75 duration-300"
	use:popup={{
		event: 'click',
		target: 'config',
		placement: 'bottom'
	}}
/>
