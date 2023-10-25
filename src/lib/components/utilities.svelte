<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';

	let colorValue: string = '#0EA5E9';
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
					let root = document.getElementsByTagName('body')[0];
					const color = colorValue;
					const r = parseInt(color.slice(1, 3), 16);
					const g = parseInt(color.slice(3, 5), 16);
					const b = parseInt(color.slice(5, 7), 16);

					root.style.setProperty('--color-tertiary-500', `${r} ${g} ${b}`);
				}}
			/>
		</div>
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
