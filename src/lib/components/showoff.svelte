<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import React from '$lib/Icons/react.svelte';
	import Next from '$lib/Icons/next.svelte';
	import Svelte from '$lib/Icons/svelte.svelte';
	import Typescript from '$lib/Icons/typescript.svelte';
	import Graphql from '$lib/Icons/graphql.svelte';
	import Websocket from '$lib/Icons/websocket.svelte';
	import Node from '$lib/Icons/node.svelte';
	import Python from '$lib/Icons/python.svelte';
	import Rust from '$lib/Icons/rust.svelte';
	import C from '$lib/Icons/c.svelte';
	import Mysql from '$lib/Icons/mysql.svelte';
	import Github from '$lib/Icons/github2.svelte';
	import Docker from '$lib/Icons/docker.svelte';
	import Mongodb from '$lib/Icons/mongodb.svelte';
	import Firebase from '$lib/Icons/firebase.svelte';
	import Jest from '$lib/Icons/jest.svelte';
	import Cypress from '$lib/Icons/cypress.svelte';
	import Playwright from '$lib/Icons/playwright.svelte';
	import Storybook from '$lib/Icons/storybook.svelte';
	import Figma from '$lib/Icons/figma.svelte';
	import Tailwind from '$lib/Icons/tailwind.svelte';

	onMount(() => {
		const show = document.querySelectorAll('.showoff');

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			show.forEach((one) => {
				// const list = one.querySelector('.list')!;
				// const content = Array.from(list.children);

				// content.forEach((item) => {
				// 	const doubled = item.cloneNode(true) as Element;
				// 	doubled.setAttribute('aria-hidden', 'true');
				// 	list.appendChild(doubled);
				// });

				one.setAttribute('data-animated', 'true');
			});
		}
	});

	let skills = [
		{
			name: '\xa0React',
			icon: React
		},
		{
			name: '\xa0Next.js',
			icon: Next
		},
		{
			name: '\xa0Svelte',
			icon: Svelte
		},
		{
			name: '\xa0TypeScript',
			icon: Typescript
		},
		{
			name: '\xa0GraphQl',
			icon: Graphql
		},
		{
			name: '\xa0WebSocket',
			icon: Websocket
		},
		{
			name: '\xa0Node',
			icon: Node
		},
		{
			name: '\xa0Python',
			icon: Python
		},
		{
			name: '\xa0Rust',
			icon: Rust
		},
		{
			name: '',
			icon: C
		},
		{
			name: '\xa0MySQL',
			icon: Mysql
		}
	];

	let skills2 = [
		{
			name: '\xa0GitHub',
			icon: Github
		},
		{
			name: '\xa0Docker',
			icon: Docker
		},
		{
			name: '\xa0MongoDB',
			icon: Mongodb
		},
		{
			name: '\xa0Firebase',
			icon: Firebase
		},
		{
			name: '\xa0Jest',
			icon: Jest
		},
		{
			name: '\xa0Cypress',
			icon: Cypress
		},
		{
			name: '\xa0Playwright',
			icon: Playwright
		},
		{
			name: '\xa0Storybook',
			icon: Storybook
		},
		{
			name: '\xa0Figma',
			icon: Figma
		},
		{
			name: '\xa0Tailwind',
			icon: Tailwind
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
				<svelte:component this={skill.icon} height="36" width="36" />
				{skill.name}
			</li>
		{/each}
		{#each skills as skill}
			<li aria-hidden="true">
				<svelte:component this={skill.icon} height="36" width="36" />
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
				<svelte:component this={skill.icon} height="36" width="36" />
				{skill.name}
			</li>
		{/each}
		{#each skills2 as skill}
			<li aria-hidden="true">
				<svelte:component this={skill.icon} height="36" width="36" />
				{skill.name}
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
