<script lang="ts">
	import { onMount } from 'svelte';
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import Projects from './projects.svelte';
	import Qualifications from './qualifications.svelte';
	import Skills from './skills.svelte';
	import { change, change_id } from '$lib';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data: {
		data: {
			viewer: {
				pinnedItems: {
					totalCount: number;
					edges: Array<{
						node: {
							name: string;
							description: string;
							openGraphImageUrl: string;
							createdAt: string;
							homepageUrl: string;
							repositoryTopics: { totalCount: number; nodes: Array<{ topic: { name: string } }> };
						};
					}>;
				};
			};
		};
	};

	const links = ['about', 'skills', 'projects', 'qualifications', 'contact-me'];
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

<div class="content flex items-center flex-col">
	<About />
	<Skills />
	<Projects {data} />
	<Qualifications />
	<Contact />
</div>
