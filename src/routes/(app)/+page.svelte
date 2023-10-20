<script lang="ts">
	import { onMount } from 'svelte';
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import Projects from './projects.svelte';
	import Skills from './skills.svelte';
	import { Footer, change, change_id } from '$lib';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	let { projects } = data;

	const links = ['about', 'skills', 'projects', 'contact-me'];
	let TabList: HTMLElement | null;
	let PageRef;

	onMount(() => {
		TabList = document.querySelector('.tab-list');
		PageRef = document.querySelectorAll('.section');

		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						change(links.indexOf(entry.target.id), TabList);
						change_id(entry.target.id);
						console.log(entry.target.id);
						const url = $page.url;
						url.hash = links[links.indexOf(entry.target.id)];
					}
				});
			},
			{ threshold: 0.3 }
		);
		PageRef.forEach((element) => {
			observer.observe(element);
		});
	});
</script>

<div class="content h-full flex items-center flex-col">
	<About />
	<Skills />
	<Projects data={projects} />
	<Contact />
	<Footer />
</div>
