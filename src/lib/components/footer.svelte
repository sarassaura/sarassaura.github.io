<script lang="ts">
	import Logo from '$lib/Icons/logo.svelte';
	import { locale, LL } from '$lib/i18n/i18n-svelte';

	let logoRef: HTMLElement;
	let play = true;

	const links = ['about', 'skills', 'projects', 'contact-me'];
</script>

<div class="footer">
	<div class="footer--links flex flex-col gap-y-4 card-hover">
		<p class="h6 opacity-75">Links</p>
		{#each links as link, id}
			<button
				class="capitalize"
				on:click={() => {
					document.getElementById(link)?.scrollIntoView();
					window.history.replaceState(null, '', `${$locale}#${link}`);
				}}
			>
				{Object.values($LL.tabs)[id]()}
			</button>
		{/each}
	</div>
	<div class="footer--testimonials card-hover">
		<p class="text-lg">Gabrielle Oliveira</p>
		<p class="italic">
			"{$LL.testimonials()}"
		</p>
	</div>
	<a
		class="footer--whatsapp btn rounded-container-token"
		href="https://wa.me/5511991464391"
		aria-label="Whatsapp"
	>
		<iconify-icon icon="ic:baseline-whatsapp" aria-hidden="true" height="42" />
	</a>
	<div
		class="footer--logo logo card-hover"
		bind:this={logoRef}
		role="img"
		on:mouseenter={() => {
			if (play) {
				logoRef.style.setProperty('--_anime', 'sign 2.5s linear');
				play = false;
				setTimeout(() => {
					logoRef.style.setProperty('--_anime', 'none');
					play = true;
				}, 2500);
			}
		}}
	>
		<Logo height="42px" width="42px" />
	</div>
	<button
		class="h-full w-full flex justify-center items-center footer--back btn rounded-container-token"
		on:click={() => {
			document.querySelector('#page')?.scrollTo(0, 0);
			window.history.replaceState(null, '', `${$locale}`);
			let first = document.querySelector('[tabindex = "-1"]');
			if (first instanceof HTMLElement) {
				first.focus();
			}
		}}
		aria-label={$LL.top()}
	>
		<div class="circular animate-bounce my-4">
			<iconify-icon
				icon="system-uicons:chevron-up-circle"
				height="52"
				aria-hidden="true"
				class="circular-icon"
			/>
		</div>
	</button>
	<a class="footer--cookie btn rounded-container-token py-6" href={$LL.link('/cookie')}
		>{$LL.cookie()}</a
	>
	<a class="footer--privacy btn rounded-container-token py-6" href={$LL.link('/privacy')}
		>{$LL.privacy()}</a
	>
	<div class="footer--copyright card-hover">{$LL.copyright()}</div>
</div>
