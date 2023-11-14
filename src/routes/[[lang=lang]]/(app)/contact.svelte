<script lang="ts">
	import axios from 'axios';
	import { z } from 'zod';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import { fade } from 'svelte/transition';
	import { Ripple } from '$lib/functions/ripple';
	import Coil from '$lib/Icons/coil.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';

	let visible: boolean = false;
	let invisible: boolean = false;

	let schema = z.object({
		name: z.string().min(1, { message: $LL.nameMin() }).max(100, { message: $LL.nameMax() }).trim(),
		email: z
			.string()
			.email({ message: $LL.emailValid() })
			.min(5, { message: $LL.emailMin() })
			.max(100, { message: $LL.emailMax() })
			.trim(),
		message: z
			.string()
			.min(1, { message: $LL.messageMin() })
			.max(1500, { message: $LL.messageMax() })
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
			<h3 class="h3">{$LL.thanks()}</h3>
			<p>{$LL.messageSuccess()}</p>
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
			<h3 class="h3">{$LL.sorry()}</h3>
			<p>{$LL.messageError()}</p>
		</div>
	</aside>
{/if}

<div class="section contact md:px-16 px-4 relative shrink-0 gap-8 py-8" id="contact-me">
	<form
		use:form
		class="space-y-4 md:px-0 flex items-center justify-center flex-col relative w-full order-2 md:order-1"
	>
		<p class="h3 py-4">{$LL.sendMe()}</p>
		<label class="label max-w-lg">
			<input class="input" type="text" required placeholder=" " name="name" autocomplete="name" />
			<span>{$LL.name()}</span>
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
			<span>{$LL.email2()}</span>
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
			<span>{$LL.message()}</span>
			{#if $errors.message && $errors.message[0] != null}
				<p class="dark:text-error-300 text-error-700">
					{$errors.message && $errors.message[0]}
				</p>
			{/if}
		</label>
		<button class="btn variant-filled but" disabled={$isSubmitting} on:click={Ripple}
			>{$LL.send()}</button
		>
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
			<p>
				<iconify-icon icon="ic:baseline-place" height="36px" aria-hidden="true" />{$LL.brazil()},
				SP/SP
			</p>
		</div>
	</div>
</div>
