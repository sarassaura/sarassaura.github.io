<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { change_id } from '$lib/store/section';

	const links = ['about', 'skills', 'projects', 'qualifications', 'contact-me'];
	let TabList: HTMLElement;
	let PageRef;

	onMount(() => {
		TabList = document.querySelector('.tab-list')!;
		PageRef = document.querySelectorAll('.section');

		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						change(links.indexOf(entry.target.id));
						change_id(entry.target.id);
						const url = $page.url;
						url.hash = links[links.indexOf(entry.target.id)];
					}
				});
			},
			{ threshold: 0.2 }
		);
		PageRef.forEach((element) => {
			observer.observe(element);
		});
	});

	function unchange() {
		links.forEach((element, id) => {
			'#' + element == $page.url.hash && change(id);
		});
		$page.url.hash == '' && change(0);
	}

	function change(id: number) {
		const offsetLeft = TabList.querySelectorAll('a')[id]?.offsetLeft;
		const width = TabList.querySelectorAll('a')[id]?.offsetWidth / TabList.offsetWidth;
		TabList.style.setProperty('--_left', offsetLeft + 'px');
		TabList.style.setProperty('--_width', width.toString());
	}
</script>

<TabGroup border="border-none" class="hidden lg:flex">
	{#each links as link, id}
		<TabAnchor
			name={`tab${id + 1}`}
			href={`#${link}`}
			class="capitalize"
			on:mouseover={() => change(id)}
			on:mouseleave={unchange}
			>{link.replace('-', ' ')}
		</TabAnchor>
	{/each}
</TabGroup>
