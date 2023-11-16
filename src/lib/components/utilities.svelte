<script lang="ts">
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Out from '$lib/Icons/out.svelte';
	import Github from '$lib/Icons/github.svelte';
	import Gear from '$lib/Icons/gear.svelte';
	import type { Locales } from '$lib/i18n/i18n-types';
	import { locale, setLocale } from '$lib/i18n/i18n-svelte';
	import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
	import LL from '$lib/i18n/i18n-svelte';

	let colorValue: string;
	let root: HTMLBodyElement;
	let theme: string;

	const langChoices: Record<Locales, string> = {
		en: 'circle-flags:uk',
		'pt-BR': 'circle-flags:br',
		es: 'circle-flags:es'
	};

	const langNames: Record<Locales, string> = {
		en: 'English',
		'pt-BR': 'Português',
		es: 'Español'
	};

	let langArray = Object.keys(langChoices) as Array<Locales>;

	const themeChoices = [
		{ name: 'crimson', initial: '#d4163c' },
		{ name: 'wintry', initial: '#3b82f6' },
		{ name: 'gold-nouveau', initial: '#e6c833' }
	];

	interface Config {
		color: string;
		theme: string;
	}

	const colorStore: Writable<Config> = localStorageStore('config', {
		color: '#d4163c',
		theme: 'crimson'
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

	let gitRef: HTMLAnchorElement;
	let play = true;
</script>

<div class="dropdown p-4 variant-ghost-surface rounded-md" data-popup="config">
	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>{$LL.dark()}</p>
		<LightSwitch />
	</div>
	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>{$LL.theme()}</p>
		<button
			class="btn variant-ghost-primary p-1 px-3"
			use:popup={{
				event: 'click',
				target: 'themeCombobox',
				placement: 'bottom',
				closeQuery: '#will-close'
			}}
		>
			{theme}
		</button>
		<div class="sub p-4 variant-glass-surface rounded-md space-y-3" data-popup="themeCombobox">
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
		<p>{$LL.color()}</p>
		<div class="rounded-full btn p-0" style="background-color: {colorValue};">
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

	<div class="flex justify-between gap-x-5 my-3 items-center">
		<p>{$LL.lang()}</p>
		<div class="rounded-full">
			<button
				class="btn p-0"
				use:popup={{
					event: 'click',
					target: 'langCombobox',
					placement: 'bottom',
					closeQuery: '#will-close'
				}}
			>
				<iconify-icon icon={langChoices[$locale]} aria-hidden="true" height="40" />
			</button>
		</div>
		<div class="sub p-4 variant-glass-surface rounded-md space-y-3" data-popup="langCombobox">
			{#each langArray as choice}
				<button
					on:click={async () => {
						await loadLocaleAsync(choice);
						setLocale(choice);
						window.history.replaceState(null, '', '/' + choice);
					}}
					class="capitalize btn dark:variant-ghost-primary variant-ringed w-full"
				>
					{langNames[choice]}
				</button>
			{/each}
		</div>
	</div>

	<div class="flex justify-center gap-x-5 my-3 items-center">
		<button
			class="btn variant-outline-primary"
			on:click={() => {
				colorValue = '#d4163c';
				theme = 'crimson';
				root.dataset.theme = 'crimson';
				$colorStore = { color: colorValue, theme: theme };
				root.style.setProperty('--color-primary-500', `212 22 60`);
			}}>{$LL.reset()}</button
		>
	</div>
	<div class="arrow variant-glass-primary" />
</div>

<a class="flex items-center gap-1 links justify-self-start" href={$LL.link('/blog')}>
	<p>Blog</p>
	<Out height="20" width="20" />
</a>

<a
	class="flex items-center rounded-full pulse w-fit justify-self-center"
	href="https://github.com/sarassaura/"
	aria-label="Github"
	bind:this={gitRef}
	on:mouseenter={() => {
		if (play) {
			gitRef.style.setProperty('--_anime', 'pulse 2s ease-in');
			play = false;
			setTimeout(() => {
				gitRef.style.setProperty('--_anime', 'none');
				play = true;
			}, 3000);
		}
	}}
>
	<Github height="28" width="28" style="rounded-full" />
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
