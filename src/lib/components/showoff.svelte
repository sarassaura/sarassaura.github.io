<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		const show = document.querySelectorAll('.showoff');

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			show.forEach((one) => {
				one.setAttribute('data-animated', 'true');
				const list = one.querySelector('.list')!;
				const content = Array.from(list.children);

				content.forEach((item) => {
					const doubled = item.cloneNode(true) as Element;
					doubled.setAttribute('aria-hidden', 'true');
					list.appendChild(doubled);
				});
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
	<ul class="list">
		<li>
			<iconify-icon icon="akar-icons:react-fill" height="36" />
			&nbsp;React
		</li>
		<li>
			<iconify-icon icon="file-icons:nextjs" height="36" fill="white" />
			&nbsp;Next.js
		</li>
		<li>
			<iconify-icon icon="cib:svelte" height="36" />
			&nbsp;Svelte
		</li>
		<li>
			<iconify-icon icon="nonicons:typescript-16" height="36" />
			&nbsp;TypeScript
		</li>
		<li>
			<iconify-icon icon="simple-icons:graphql" height="36" />
			&nbsp;GraphQl
		</li>
		<li>
			<iconify-icon icon="simple-icons:socketdotio" height="36" fill="white" />
			&nbsp;WebSocket
		</li>
		<li>
			<iconify-icon icon="akar-icons:node-fill" height="36" fill="white" />
			&nbsp;Node
		</li>
		<li>
			<iconify-icon icon="teenyicons:python-outline" height="36" fill="white" />
			&nbsp;Python
		</li>
		<li>
			<iconify-icon icon="fa6-brands:rust" height="36" fill="white" />
			&nbsp;Rust
		</li>
		<li>
			<iconify-icon icon="nonicons:c-16" height="36" fill="white" />
		</li>
		<li>
			<iconify-icon icon="devicon-plain:mysql" height="36" fill="white" />
			&nbsp;MySQL
		</li>
	</ul>
</div>

<div
	class="showoff"
	data-direction="left"
	data-speed="fast"
	transition:fade={{ duration: 500, delay: 350 }}
>
	<ul class="list">
		<li>
			<iconify-icon icon="mdi:github" height="36" fill="white" />
			&nbsp;GitHub
		</li>
		<li>
			<iconify-icon icon="cib:docker" height="36" fill="white" />
			&nbsp;Docker
		</li>
		<li>
			<iconify-icon icon="simple-icons:mongodb" height="36" fill="white" />
			&nbsp;MongoDB
		</li>
		<li>
			<iconify-icon icon="mdi:firebase" height="36" fill="white" />
			&nbsp;Firebase
		</li>
		<li>
			<iconify-icon icon="simple-icons:jest" height="36" fill="white" />
			&nbsp;Jest
		</li>
		<li>
			<iconify-icon icon="tabler:brand-cypress" height="36" fill="white" />
			&nbsp;Cypress
		</li>
		<li>
			<iconify-icon icon="simple-icons:playwright" height="36" fill="white" />
			&nbsp;Playwright
		</li>
		<li>
			<iconify-icon icon="cib:storybook" height="36" fill="white" />
			&nbsp;Storybook
		</li>
		<li>
			<iconify-icon icon="teenyicons:figma-outline" height="36" fill="white" />
			&nbsp;Figma
		</li>
		<li>
			<iconify-icon icon="mdi:tailwind" height="36" fill="white" />
			&nbsp;Tailwind
		</li>
	</ul>
</div>

<style>
	li {
		background: none;
	}
	.list {
		padding-top: 0px;
		padding-bottom: 0.5rem;
	}
</style>
