<script lang="ts">
	import { ShowOff } from '$lib';
</script>

<div class="section skills md:px-16 px-4 flex flex-col items-center overflow-hidden" id="skills">
	<div class="w-full flex flex-col items-center justify-center">
		<ShowOff />
	</div>
	<div class="know grid md:gap-x-6 gap-y-4 shrink-none py-4 w-full h-full justify-center">
		<div class="flex flex-col card card-hover variant-ringed-primary p-4">
			<header class="card-header">Frontend</header>
			<section class="p-4 grow">(content)</section>
			<footer class="card-footer">(footer)</footer>
		</div>
		<div class="flex flex-col card card-hover variant-ringed-primary p-4">
			<header class="card-header">Backend</header>
			<section class="p-4 grow">(content)</section>
			<footer class="card-footer">(footer)</footer>
		</div>
		<div class="flex flex-col card card-hover variant-ringed-primary p-4">
			<header class="card-header">Design</header>
			<section class="p-4 grow">(content)</section>
			<footer class="card-footer">(footer)</footer>
		</div>
	</div>
</div>
