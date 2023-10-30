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
				<p class="h6">Frontend</p>
			</section>
		</div>
		<div class="module">
			<header class="card-header">
				<Design height="52" width="52" />
			</header>
			<section class="p-4">
				<p class="h6">Design</p>
			</section>
		</div>
		<div class="module">
			<header class="card-header">
				<Node height="52" width="52" />
			</header>
			<section class="p-4">
				<p class="h6">Backend</p>
			</section>
		</div>
	</div>
</div>
