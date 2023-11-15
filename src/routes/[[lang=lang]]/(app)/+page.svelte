<script lang="ts">
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import Projects from './projects.svelte';
	import Skills from './skills.svelte';
	import { Footer } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
	let { projects } = data;
</script>

<div class="content h-full flex items-center flex-col">
	<About />
	<Skills />
	<Projects data={projects} />
	<Contact />
	<Footer />
</div>
