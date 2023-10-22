<script lang="ts">
	import { ShowOff } from '$lib';
</script>

<div class="section skills md:px-16 px-4 flex flex-col items-center overflow-hidden" id="skills">
	<div class="show-wrapper">
		<ShowOff />
	</div>
	<div class="know grid md:gap-x-6 gap-y-4 shrink-none py-16 w-full h-full justify-center">
		<div class="flex flex-col card card-hover variant-ringed-tertiary p-28">
			<header class="card-header">
				<iconify-icon icon="mdi:code" height="52" />
			</header>
			<section class="p-4 grow">
				<p class="h6">Frontend</p>
			</section>
		</div>
		<div class="flex flex-col card card-hover variant-ringed-tertiary p-28">
			<header class="card-header">
				<iconify-icon icon="material-symbols:draw-outline" height="52" />
			</header>
			<section class="p-4 grow">
				<p class="h6">Design</p>
			</section>
		</div>
		<div class="flex flex-col card card-hover variant-ringed-tertiary p-28">
			<header class="card-header">
				<iconify-icon icon="grommet-icons:node" height="52" />
			</header>
			<section class="p-4 grow">
				<p class="h6">Backend</p>
			</section>
		</div>
	</div>
</div>
