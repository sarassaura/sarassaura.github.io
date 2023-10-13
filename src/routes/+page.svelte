<script lang="ts">
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import Projects from './projects.svelte';
	import Qualifications from './qualifications.svelte';
	import Skills from './skills.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { data: info } = data;
</script>

<div class="content flex items-center flex-col">
	<About />
	<Skills />
	<Projects data={info} />
	<Qualifications />
	<Contact />
</div>
