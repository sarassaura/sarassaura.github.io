<script lang="ts">
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Out from '$lib/Icons/out.svelte';
	import Github from '$lib/Icons/github.svelte';
	import Gear from '$lib/Icons/gear.svelte';

	let colorValue: string;
	let root: HTMLBodyElement;
	let theme: string;

	const themeChoices = [
		{ name: 'skeleton', initial: '#0EA5E9' },
		{ name: 'crimson', initial: '#d4163c' },
		{ name: 'wintry', initial: '#3b82f6' },
		{ name: 'gold-nouveau', initial: '#e6c833' }
	];

	interface Config {
		color: string;
		theme: string;
	}

	const colorStore: Writable<Config> = localStorageStore('config', {
		color: '#0EA5E9',
		theme: 'skeleton'
	});

	onMount(() => {
		root = document.getElementsByTagName('body')[0];
		colorValue = $colorStore.color;
		theme = $colorStore.theme;
	});

	function rgb(hex: string) {
		const color = hex;
		const r = parseInt(color.slice(1, 3), 16);
		const g = parseInt(color.slice(3, 5), 16);
		const b = parseInt(color.slice(5, 7), 16);
		return `${r} ${g} ${b}`;
	}
</script>

<div class="dropdown p-4 variant-ghost-surface rounded-md backdrop-blur-none" data-popup="config">
	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>Dark Mode</p>
		<LightSwitch />
	</div>
	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>Theme</p>
		<button
			class="btn variant-ghost-primary p-1 px-3"
			use:popup={{
				event: 'click',
				target: 'popupCombobox',
				placement: 'bottom',
				closeQuery: '#will-close'
			}}
		>
			{theme}
		</button>
		<div class="sub p-4 variant-glass-surface rounded-md space-y-3" data-popup="popupCombobox">
			{#each themeChoices as choice}
				<button
					on:click={() => {
						root.style.setProperty('--color-primary-500', rgb(choice.initial));
						root.dataset.theme = choice.name;
						theme = choice.name;
						colorValue = choice.initial;
						$colorStore = { color: choice.initial, theme: choice.name };
					}}
					class="capitalize btn dark:variant-ghost-primary variant-ringed w-full"
				>
					{choice.name}
				</button>
			{/each}
		</div>
	</div>
	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>Color</p>
		<div class="rounded-full" style="background-color: {colorValue};">
			<input
				class="input opacity-0"
				type="color"
				bind:value={colorValue}
				on:change={() => {
					root.style.setProperty('--color-primary-500', rgb(colorValue));
					$colorStore = { color: colorValue, theme: theme };
				}}
			/>
		</div>
	</div>
	<div class="flex justify-center gap-x-5 my-3 items-center">
		<button
			class="btn variant-outline-primary"
			on:click={() => {
				colorValue = '#0EA5E9';
				theme = 'skeleton';
				root.dataset.theme = 'skeleton';
				$colorStore = { color: colorValue, theme: theme };
				root.style.setProperty('--color-primary-500', `14 165 233`);
			}}>Reset</button
		>
	</div>
	<div class="arrow variant-glass-primary" />
</div>

<a class="flex items-center gap-1 links duration-300 justify-self-start" href="/blog">
	<p>Blog</p>
	<Out height="20" width="20" />
</a>

<a
	class="flex items-center rounded-full hover:pulse w-fit justify-self-center"
	href="https://github.com/sarassaura/"
	aria-label="Github"
>
	<Github height="28" width="28" style="rounded-full duration-300" />
</a>

<div
	class="cursor-pointer rounded-full rotate h-[36px] w-[36px] justify-self-end"
	use:popup={{
		event: 'click',
		target: 'config',
		placement: 'bottom',
		closeQuery: '#will-close'
	}}
>
	<Gear height="36" width="36" style="p-1.5" />
</div>
