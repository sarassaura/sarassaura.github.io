<script lang="ts">
	import { ShowOff } from '$lib';
	import Html from '$lib/Icons/html.svelte';
	import Design from '$lib/Icons/design.svelte';
	import { LL, locale } from '$lib/i18n/i18n-svelte';
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
			<p lang={$locale}>
				{$LL.frontendOne()}<span class="italic">JavaScript</span>{$LL.frontendTwo()}
			</p>
		</div>
		<div class="module">
			<header class="card-header">
				<Design height="52" width="52" />
			</header>
			<section class="p-4">
				<p class="h5">Design</p>
			</section>
			<p lang={$locale}>
				{$LL.design()}
			</p>
		</div>
		<div class="module">
			<header class="card-header">
				<iconify-icon icon="akar-icons:node-fill" height="52" width="52" aria-hidden="true" />
			</header>
			<section class="p-4">
				<p class="h5">Backend</p>
			</section>
			<p lang={$locale}>
				{$LL.backend()}
			</p>
		</div>
	</div>
</div>
