<script lang="ts">
	// import axios from 'axios';
	import { z } from 'zod';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';

	const schema = z.object({
		name: z.string().min(1).max(100).trim(),
		email: z.string().email().min(5).max(100).trim(),
		message: z.string().min(1).max(1500).trim()
	});

	const { form, errors } = createForm<z.infer<typeof schema>>({
		onSubmit: (values) => {
			console.log(values);
		},
		extend: validator({ schema })
	});

	let disabled = false;
</script>

<div class="section contact md:px-16 px-4 relative" id="contact-me">
	<form use:form class="space-y-6 px-8 md:px-0 flex items-center justify-center flex-col relative">
		<label class="label">
			<input class="input" type="text" required placeholder=" " name="name" />
			<span>Name</span>
			{#if $errors.name && $errors.name[0] != null}
				<p class="text-error-400">{$errors.name && $errors.name[0]}</p>
			{/if}
		</label>
		<label class="label">
			<input class="input" type="email" required placeholder=" " name="email" />
			<span>Email</span>
			{#if $errors.email && $errors.email[0] != null}
				<p class="text-error-400">{$errors.email && $errors.email[0]}</p>
			{/if}
		</label>
		<label class="label">
			<textarea class="textarea" rows="5" required placeholder=" " name="message" />
			<span>Message</span>
			{#if $errors.message && $errors.message[0] != null}
				<p class="text-error-400">{$errors.message && $errors.message[0]}</p>
			{/if}
		</label>
		<button class="btn variant-filled" {disabled}>Send</button>
	</form>
	<div class="informations relative">
		<p>Sarah Yukino Nakada</p>
		<p>sarahyukinonakada@gmail.com</p>
		<p>(+55) 11 99146-4391</p>
		<p>Brazil, SP/SP</p>
	</div>
</div>
