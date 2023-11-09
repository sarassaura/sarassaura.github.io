<script lang="ts">
	import axios from 'axios';
	import { z } from 'zod';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import { fade } from 'svelte/transition';
	import { Ripple } from '$lib/functions/ripple';
	import Coil from '$lib/Icons/coil.svelte';

	let visible: boolean = false;
	let invisible: boolean = false;

	const schema = z.object({
		name: z
			.string()
			.min(1, { message: 'Name is required' })
			.max(100, { message: 'Name must have less than 100 characters' })
			.trim(),
		email: z
			.string()
			.email({ message: 'Email must be valid' })
			.min(5, { message: 'Email must have more than 5 characters' })
			.max(100, { message: 'Email must have less than 100 characters' })
			.trim(),
		message: z
			.string()
			.min(1, { message: 'Message is required' })
			.max(1500, { message: 'Message must have less than 1500 characters' })
			.trim()
	});

	const { form, errors, reset, isSubmitting } = createForm<z.infer<typeof schema>>({
		onSubmit: (values, { form }) => {
			console.log(form);
			axios({
				method: 'POST',
				url: 'https://formspree.io/f/xzblylrk',
				data: new FormData(form)
			}).then(() => {
				reset();
			});
		},
		onError() {
			invisible = true;
			setTimeout(() => {
				invisible = false;
			}, 8000);
		},
		onSuccess() {
			visible = true;
			setTimeout(() => {
				visible = false;
			}, 2000);
		},
		extend: validator({ schema })
	});
</script>

{#if visible}
	<aside
		class="alert flex flex-row items-center absolute z-[7] bg-gradient-to-br variant-gradient-secondary-primary"
		transition:fade|local={{ duration: 200 }}
	>
		<iconify-icon icon="mingcute:check-fill" width="48" class="mr-2" />
		<div class="alert-message m-0">
			<h3 class="h3 italic">Thanks for contacting us!</h3>
			<p>Message sent successfully</p>
		</div>
	</aside>
{/if}

{#if invisible}
	<aside
		class="alert flex flex-row items-center absolute z-[7] bg-gradient-to-br variant-gradient-error-warning"
		transition:fade|local={{ duration: 200 }}
	>
		<iconify-icon icon="ph:x-bold" width="48" class="mr-2" />
		<div class="alert-message m-0">
			<h3 class="h3 italic">Sorry, something went wrong</h3>
			<p>Try sending me an email at sarahyukinonakada@gmail.com</p>
		</div>
	</aside>
{/if}

<div class="section contact md:px-16 px-4 relative shrink-0 gap-8 py-8">
	<form
		use:form
		id="contact-me"
		class="space-y-4 md:px-0 flex items-center justify-center flex-col relative w-full order-2 md:order-1"
	>
		<p class="h3 py-4">Send me a message</p>
		<label class="label max-w-lg">
			<input class="input" type="text" required placeholder=" " name="name" autocomplete="name" />
			<span>Name</span>
			{#if $errors.name && $errors.name[0] != null}
				<p class="dark:text-error-300 text-error-700">{$errors.name && $errors.name[0]}</p>
			{/if}
		</label>
		<label class="label max-w-lg">
			<input
				class="input"
				type="email"
				required
				placeholder=" "
				name="email"
				autocomplete="email"
			/>
			<span>Email</span>
			{#if $errors.email && $errors.email[0] != null}
				<p class="dark:text-error-300 text-error-700">{$errors.email && $errors.email[0]}</p>
			{/if}
		</label>
		<label class="label max-w-lg">
			<textarea
				class={`textarea mobile-textarea`}
				rows="5"
				required
				placeholder=" "
				name="message"
			/>
			<span>Message</span>
			{#if $errors.message && $errors.message[0] != null}
				<p class="dark:text-error-300 text-error-700">
					{$errors.message && $errors.message[0]}
				</p>
			{/if}
		</label>
		<button class="btn variant-filled but" disabled={$isSubmitting} on:click={Ripple}>Send</button>
	</form>
	<div class="flex items-center justify-center pow order-1 md:order-2">
		<div class="pr-5 sm:pr-8 -mr-[65px] sm:-mr-[77px]">
			<Coil />
		</div>
		<div
			class="informations relative gap-4 justify-center border border-r-none border-tertiary-500 rounded-lg px-8 py-10 pl-16"
		>
			<p class="h3 py-4">Contact Info</p>
			<p>
				<iconify-icon icon="icon-park-outline:edit-name" height="36px" aria-hidden="true" />Sarah
				Yukino Nakada
			</p>
			<p>
				<iconify-icon icon="mdi:github" height="36px" aria-hidden="true" />github.com/sarassaura
			</p>
			<p>
				<iconify-icon icon="mdi:gmail" height="36px" aria-hidden="true" />Gmail: sarahyukinonakada
			</p>
			<p>
				<iconify-icon icon="ic:baseline-phone" height="36px" aria-hidden="true" />+55 11 99146-4391
			</p>
			<p><iconify-icon icon="ic:baseline-place" height="36px" aria-hidden="true" />Brazil, SP/SP</p>
		</div>
	</div>
</div>
