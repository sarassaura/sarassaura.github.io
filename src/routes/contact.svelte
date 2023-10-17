<script lang="ts">
	import { section } from '$lib';
	import { fade } from 'svelte/transition';

	let now: string;
	let SubmitRef: HTMLButtonElement;

	section.subscribe((value) => {
		now = value;
	});

	function resize() {}
</script>

<div class="section contact md:px-16 px-4" id="contact-me">
	<div class="informations relative" transition:fade={{ duration: 500, delay: 700 }}>
		<p>Sarah Yukino Nakada</p>
		<p>sarahyukinonakada@gmail.com</p>
		<p>(+55) 11 99146-4391</p>
		<p>Brazil, SP/SP</p>
		{#if now !== 'contact-me'}
			<div class="pseudo" transition:fade={{ duration: 500, delay: 500 }} />
		{/if}
	</div>
	<form
		on:input|preventDefault|stopPropagation
		class="space-y-6 px-8 md:px-0 flex items-center justify-center flex-col relative"
		id="form"
	>
		<label class="label row-start-2">
			<input class="input" type="text" required placeholder=" " on:blur={() => resize} />
			<span>Name</span>
		</label>
		<label class="label row-start-3">
			<input class="input" type="email" required placeholder=" " on:blur={() => resize} />
			<span>Email</span>
		</label>
		<label class="label row-start-4">
			<textarea class="textarea" rows="5" required placeholder=" " on:blur={() => resize} />
			<span>Message</span>
		</label>
		<label class="label row-start-5 flex justify-center">
			<button class="btn variant-filled" type="button" bind:this={SubmitRef}>Send</button>
		</label>
		{#if now !== 'contact-me'}
			<div class="pseudo" transition:fade={{ duration: 500, delay: 500 }} />
		{/if}
	</form>
</div>
