<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		const show = document.querySelectorAll('.showoff');

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			show.forEach((one) => {
				one.setAttribute('data-animated', 'true');
			});
		}
	});

	let skills = [
		{
			name: '\xa0React',
			icon: 'akar-icons:react-fill'
		},
		{
			name: '\xa0Next.js',
			icon: 'file-icons:nextjs'
		},
		{
			name: '\xa0Svelte',
			icon: 'cib:svelte'
		},
		{
			name: '\xa0TypeScript',
			icon: 'nonicons:typescript-16'
		},
		{
			name: '\xa0GraphQl',
			icon: 'simple-icons:graphql'
		},
		{
			name: '\xa0WebSocket',
			icon: 'simple-icons:socketdotio'
		},
		{
			name: '\xa0Node',
			icon: 'akar-icons:node-fill'
		},
		{
			name: '\xa0Python',
			icon: 'teenyicons:python-outline'
		},
		{
			name: '\xa0MySQL',
			icon: 'devicon-plain:mysql'
		}
	];

	let skills2 = [
		{
			name: '\xa0GitHub',
			icon: 'mdi:github'
		},
		{
			name: '\xa0Docker',
			icon: 'cib:docker'
		},
		{
			name: '\xa0MongoDB',
			icon: 'simple-icons:mongodb'
		},
		{
			name: '\xa0Firebase',
			icon: 'mdi:firebase'
		},
		{
			name: '\xa0Jest',
			icon: 'simple-icons:jest'
		},
		{
			name: '\xa0Storybook',
			icon: 'cib:storybook'
		},
		{
			name: '\xa0Figma',
			icon: 'teenyicons:figma-outline'
		},
		{
			name: '\xa0Tailwind',
			icon: 'mdi:tailwind'
		},
		{
			name: '\xa0Redux',
			icon: 'akar-icons:redux-fill'
		}
	];
</script>

<div
	class="showoff"
	data-direction="left"
	data-speed="fast"
	transition:fade={{ duration: 500, delay: 250 }}
>
	<ul class="list">
		{#each skills as skill}
			<li>
				<div class=" h-[36px] w-[36px] overflow-hidden">
					<iconify-icon icon={skill.icon} aria-hidden="true" height="36" />
				</div>
				{skill.name}
			</li>
		{/each}
		{#each skills as skill}
			<li aria-hidden="true">
				<div class="h-[36px] w-[36px] overflow-hidden">
					<iconify-icon icon={skill.icon} aria-hidden="true" height="36" />
				</div>
				{skill.name}
			</li>
		{/each}
	</ul>
</div>

<div
	class="showoff"
	data-direction="left"
	data-speed="fast"
	transition:fade={{ duration: 500, delay: 350 }}
>
	<ul class="list">
		{#each skills2 as skill}
			<li>
				<div class="h-[36px] w-[36px] overflow-hidden">
					<iconify-icon icon={skill.icon} aria-hidden="true" height="36" />
				</div>
				{skill.name}
			</li>
		{/each}
		{#each skills2 as skill}
			<li aria-hidden="true">
				<div class="h-[36px] w-[36px] overflow-hidden">
					<iconify-icon icon={skill.icon} aria-hidden="true" height="36" />
				</div>
				{skill.name}
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
