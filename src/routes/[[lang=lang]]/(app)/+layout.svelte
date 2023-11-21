<script lang="ts">
	import { Navbar, Menu } from '$lib';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { change, change_id } from '$lib';
	import { page } from '$app/stores';
	import { locale } from '$lib/i18n/i18n-svelte';

	let ref: HTMLDivElement;

	initializeStores();

	// onMount(() => {
	// 	// let chrome = document.querySelector('textarea');
	// 	if (navigator.userAgent.indexOf('Chrome') != -1) {
	// 		// chrome?.setAttribute('--_font_size', '0.5625rem');
	// 		// chrome?.setAttribute('--_line_height', '0.75rem');
	// 	}
	// 	if (navigator.userAgent.indexOf('Firefox') != -1) {
	// 		// This is Firefox
	// 	}
	// });

	const links = ['about', 'skills', 'projects', 'contact-me'];
	let TabList: HTMLElement | null;
	let PageRef: Array<HTMLElement>;

	onMount(() => {
		TabList = document.querySelector('.tab-list');
		PageRef = document.querySelectorAll('.section') as unknown as Array<HTMLElement>;

		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						change(links.indexOf(entry.target.id), TabList);
						change_id(entry.target.id);
						let hash = links[links.indexOf(entry.target.id)];
						const url = $page.url;
						url.hash = hash;
						window.history.replaceState(null, '', `${$locale}#${hash}`);
					}
				});
			},
			{ threshold: 0.3 }
		);
		PageRef.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			PageRef.forEach((element) => {
				observer.unobserve(element);
			});
			observer.disconnect();
		};
	});

	onMount(() => {
		let page = document.querySelector('#page') as HTMLDivElement;
		page.tabIndex = -1;
	});
</script>

<Drawer class="lg:hidden z-[8]" zIndex="">
	<Menu />
</Drawer>

<AppShell class="h-full" slotPageFooter="flex justify-center py-5" slotHeader="relative z-[8]">
	<svelte:fragment slot="header">
		<div class="skip-navigation" bind:this={ref}>
			<button
				on:click={() => {
					let mainContent = document.getElementById('main-content');
					mainContent?.scrollIntoView();
					window.history.replaceState(null, '', `${$locale}#main-content`);
					if (document.activeElement instanceof HTMLElement) {
						document.activeElement.blur();
					}
					document.getElementById('resume')?.focus();
				}}>Skip navigation</button
			>
		</div>
		<Navbar />
	</svelte:fragment>
	<slot tabindex="-1" />
</AppShell>
