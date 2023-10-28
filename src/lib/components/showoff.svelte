<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { section } from '$lib/store/section';
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
	import Github from '$lib/Icons/github.svelte';
	import Docker from '$lib/Icons/docker.svelte';
	import Mongodb from '$lib/Icons/mongodb.svelte';
	import Firebase from '$lib/Icons/firebase.svelte';
	import Jest from '$lib/Icons/jest.svelte';
	import Cypress from '$lib/Icons/cypress.svelte';
	import Playwright from '$lib/Icons/playwright.svelte';
	import Storybook from '$lib/Icons/storybook.svelte';
	import Figma from '$lib/Icons/figma.svelte';
	import Tailwind from '$lib/Icons/tailwind.svelte';

	let here: string;

	section.subscribe((value) => {
		here = value;
	});

	onMount(() => {
		const show = document.querySelectorAll('.showoff');

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			show.forEach((one) => {
				const list = one.querySelector('.list')!;
				const content = Array.from(list.children);

				content.forEach((item) => {
					const doubled = item.cloneNode(true) as Element;
					doubled.setAttribute('aria-hidden', 'true');
					list.appendChild(doubled);
				});

				one.setAttribute('data-animated', 'true');
			});
		}
	});
</script>

<div
	class="showoff"
	data-direction="left"
	data-speed="fast"
	transition:fade={{ duration: 500, delay: 250 }}
>
	<ul class={`list ${here == 'skills' && 'potato'}`}>
		<li>
			<React height="36" width="36" />
			&nbsp;React
		</li>
		<li>
			<Next height="36" width="36" />
			&nbsp;Next.js
		</li>
		<li>
			<Svelte height="36" width="36" />
			&nbsp;Svelte
		</li>
		<li>
			<Typescript height="36" width="36" />
			&nbsp;TypeScript
		</li>
		<li>
			<Graphql height="36" width="36" />
			&nbsp;GraphQl
		</li>
		<li>
			<Websocket height="36" width="36" />
			&nbsp;WebSocket
		</li>
		<li>
			<Node height="36" width="36" />
			&nbsp;Node
		</li>
		<li>
			<Python height="36" width="36" />
			&nbsp;Python
		</li>
		<li>
			<Rust height="36" width="36" />
			&nbsp;Rust
		</li>
		<li>
			<C height="36" width="36" />
		</li>
		<li>
			<Mysql height="36" width="36" />
			&nbsp;MySQL
		</li>
	</ul>
</div>

<div class="card p-4 w-72 shadow-xl" data-popup="0">
	<div><p>Demo Content</p></div>
	<div class="arrow bg-surface-100-800-token" />
</div>

<div
	class="showoff"
	data-direction="left"
	data-speed="fast"
	transition:fade={{ duration: 500, delay: 350 }}
>
	<ul class={`list ${here == 'skills' && 'potato'}`}>
		<li>
			<Github height="36" width="36" style="" />
			&nbsp;GitHub
		</li>
		<li>
			<Docker height="36" width="36" />
			&nbsp;Docker
		</li>
		<li>
			<Mongodb height="36" width="36" />
			&nbsp;MongoDB
		</li>
		<li>
			<Firebase height="36" width="36" />
			&nbsp;Firebase
		</li>
		<li>
			<Jest height="36" width="36" />
			&nbsp;Jest
		</li>
		<li>
			<Cypress height="36" width="36" />
			&nbsp;Cypress
		</li>
		<li>
			<Playwright height="36" width="36" />
			&nbsp;Playwright
		</li>
		<li>
			<Storybook height="36" width="36" />
			&nbsp;Storybook
		</li>
		<li>
			<Figma height="36" width="36" />
			&nbsp;Figma
		</li>
		<li>
			<Tailwind height="36" width="36" />
			&nbsp;Tailwind
		</li>
	</ul>
</div>

<style>
	.potato {
		-webkit-animation-play-state: running !important;
		-moz-animation-play-state: running !important;
		-o-animation-play-state: running !important;
		animation-play-state: running !important;
	}
</style>
