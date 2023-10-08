<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const links = ['about', 'skills', 'projects', 'services', 'contact-me'];
	let TabList: HTMLElement;

	onMount(() => {
		TabList = document.querySelector('.tab-list')!;
		unchange();
	});

	function unchange() {
		links.forEach((element, id) => {
			'#' + element == $page.url.hash && change(id);
		});
	}

	function change(id: number) {
		const offsetLeft = TabList.querySelectorAll('a')[id].offsetLeft;
		const width = TabList.querySelectorAll('a')[id].offsetWidth / TabList.offsetWidth;
		TabList.style.setProperty('--_left', offsetLeft + 'px');
		TabList.style.setProperty('--_width', width.toString());
	}
</script>

<TabGroup border="border-none">
	{#each links as link, id}
		<TabAnchor
			name={`tab${id + 1}`}
			href={`#${link}`}
			class="uppercase"
			on:mouseover={() => change(id)}
			on:mouseleave={unchange}
			>{link.replace('-', ' ')}
		</TabAnchor>
	{/each}
</TabGroup>
