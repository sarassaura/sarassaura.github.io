<script lang="ts">
	import { section } from '$lib';
	import { fade } from 'svelte/transition';

	let now: string;

	section.subscribe((value) => {
		now = value;
	});
</script>

<div class="section contact md:px-16 px-4" id="contact-me">
	{#if now == 'contact-me'}
		<form on:input|preventDefault|stopPropagation transition:fade={{ duration: 500, delay: 500 }}>
			<label class="label row-start-2">
				<span>Name</span>
				<input class="input" type="text" />
			</label>
			<label class="label row-start-3">
				<span>Email</span>
				<input class="input" type="email" />
			</label>
			<label class="label row-start-4">
				<span>Message</span>
				<textarea class="textarea" rows="5" />
			</label>
			<label class="label row-start-5 flex justify-center">
				<button class="btn variant-filled" type="button">Send</button>
			</label>
		</form>
		<div class="informations" transition:fade={{ duration: 500, delay: 700 }}>
			<p>Sarah Yukino Nakada</p>
			<p>sarahyukinonakada@gmail.com</p>
			<p>(+55) 11 99146-4391</p>
			<p>Brazil, SP/SP</p>
		</div>
	{/if}
</div>
