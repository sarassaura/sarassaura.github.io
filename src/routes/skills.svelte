<script lang="ts">
	import { ShowOff } from '$lib';
	import { section } from '$lib';
	import { fade } from 'svelte/transition';

	let now: string;

	section.subscribe((value) => {
		now = value;
	});
</script>

<div class="section skills md:px-16 px-4 flex flex-col items-center justify-center" id="skills">
	{#if now == 'skills'}
		<ShowOff />
		<div class="flex flex-row gap-x-4" transition:fade={{ duration: 500, delay: 500 }}>
			<div>Frontend</div>
			<div>Backend</div>
			<div>Design</div>
		</div>
	{/if}
</div>
