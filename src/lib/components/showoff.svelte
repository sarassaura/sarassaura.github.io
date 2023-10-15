<script lang="ts">
	import { onMount } from 'svelte';

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

<div class="showoff">
	<ul class="list">
		<li>React</li>
		<li>Next</li>
		<li>Svelte</li>
		<li>Typescript</li>
		<li>GraphQl</li>
		<li>Websockets</li>
		<li>Node</li>
		<li>Python</li>
		<li>Rust</li>
		<li>C</li>
		<li>MySQL</li>
	</ul>
</div>

<div class="showoff">
	<ul class="list">
		<li>Github</li>
		<li>Docker</li>
		<li>MongoDB</li>
		<li>Firebase</li>
		<li>Jest</li>
		<li>Cypress</li>
		<li>Playwright</li>
		<li>Storybook</li>
		<li>Figma</li>
		<li>Tailwind</li>
	</ul>
</div>
