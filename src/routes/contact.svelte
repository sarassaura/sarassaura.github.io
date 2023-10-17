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
		<form
			on:input|preventDefault|stopPropagation
			transition:fade={{ duration: 500, delay: 500 }}
			class="space-y-6 px-8 md:px-0 flex items-center justify-center flex-col"
		>
			<label class="label row-start-2">
				<input class="input" type="text" required />
				<span>Name</span>
			</label>
			<label class="label row-start-3">
				<input class="input" type="email" required />
				<span>Email</span>
			</label>
			<label class="label row-start-4">
				<textarea class="textarea" rows="5" required />
				<span>Message</span>
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
