<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let colorValue: string;
	let root: HTMLBodyElement;

	onMount(() => {
		root = document.getElementsByTagName('body')[0];
		colorValue = window.localStorage.getItem('color') || '#0EA5E9';
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

<div class="card p-4 variant-glass-tertiary rounded-md" data-popup="config">
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
					window.localStorage.setItem('color', colorValue);
				}}
			/>
		</div>
	</div>
	<div class="flex justify-center gap-x-5 my-3 items-center">
		<button
			class="btn variant-outline-tertiary"
			on:click={() => {
				colorValue = '#0EA5E9';
				window.localStorage.setItem('color', colorValue);
				root.style.setProperty('--color-tertiary-500', `14 165 233`);
			}}>Reset</button
		>
	</div>
	<div class="arrow variant-glass-tertiary" />
</div>

<a class="flex items-center gap-1" href="/blog">
	<p>Blog</p>
	<iconify-icon icon="ph:arrow-square-out-bold" height="20" />
</a>

<a class="flex items-center gap-1" href="https://github.com/sarassaura/">
	<iconify-icon icon="mdi:github" height="28" />
</a>

<iconify-icon
	icon="bi:gear-fill"
	height="24"
	fill="white"
	aria-label="config"
	class="cursor-pointer"
	use:popup={{
		event: 'click',
		target: 'config',
		placement: 'bottom'
	}}
/>
