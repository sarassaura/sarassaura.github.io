<script lang="ts">
	import { section } from '$lib';
	import { fade } from 'svelte/transition';

	let now: string;

	section.subscribe((value) => {
		now = value;
	});
</script>

<div
	class="section qualifications md:px-16 px-4 flex gap-8 flex-col md:flex-row justify-center items-center"
	id="qualifications"
>
	{#if now == 'qualifications'}
		<div
			class="flex gap-y-2 flex-col justify-center items-center"
			transition:fade={{ duration: 500, delay: 700 }}
		>
			<p class="inline-block">Federal University of ABC</p>
			<p class="h6">Bachelor's degree in Science and Technology</p>
		</div>
		<div
			class="flex gap-y-2 flex-col justify-center items-center"
			transition:fade={{ duration: 500, delay: 700 }}
		>
			<p>Federal University of ABC</p>
			<p class="h6">Bachelor's degree in Computer Science</p>
		</div>
		<div
			class="flex gap-y-2 flex-col justify-center items-center"
			transition:fade={{ duration: 500, delay: 700 }}
		>
			<p>São Mateus Technical School</p>
			<p class="h6">IT technician for the internet</p>
		</div>
	{/if}
</div>
