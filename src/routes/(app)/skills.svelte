<script lang="ts">
	import { ShowOff } from '$lib';
	import Html from '$lib/Icons/html.svelte';
	import Design from '$lib/Icons/design.svelte';
	import Node from '$lib/Icons/node.svelte';
</script>

<div
	class="section skills md:px-16 px-4 flex flex-col items-center overflow-hidden shrink-0"
	id="skills"
>
	<div>
		<ShowOff />
	</div>
	<div class="special">
		<div class="module">
			<header class="card-header">
				<Html height="52" width="52" />
			</header>
			<section class="p-4">
				<p class="h5">Frontend</p>
			</section>
			<p>
				I'm a professional <span class="italic">JavaScript</span> developer with expertise across various
				frameworks, libraries, and services, including React. I build performing, accessible and seo
				friendly websites who prioritizes user experience.
			</p>
		</div>
		<div class="module">
			<header class="card-header">
				<Design height="52" width="52" />
			</header>
			<section class="p-4">
				<p class="h5">Design</p>
			</section>
			<p>Sketch, brainstorm, user flow, sitemaps, wireframe, prototyping.</p>
		</div>
		<div class="module">
			<header class="card-header">
				<Node height="52" width="52" />
			</header>
			<section class="p-4">
				<p class="h5">Backend</p>
			</section>
			<p>My</p>
		</div>
	</div>
</div>
