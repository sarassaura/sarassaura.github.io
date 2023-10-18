<script lang="ts">
</script>

<div class="section contact md:px-16 px-4 relative" id="contact-me">
	<form
		on:input|preventDefault|stopPropagation
		class="space-y-6 px-8 md:px-0 flex items-center justify-center flex-col relative"
		id="form"
	>
		<label class="label">
			<input class="input" type="text" required placeholder=" " />
			<span>Name</span>
		</label>
		<label class="label">
			<input class="input" type="email" required placeholder=" " />
			<span>Email</span>
		</label>
		<label class="label">
			<textarea class="textarea" rows="5" required placeholder=" " />
			<span>Message</span>
		</label>
		<label class="label flex justify-center">
			<button class="btn variant-filled" type="button">Send</button>
		</label>
	</form>
	<div class="informations relative">
		<p>Sarah Yukino Nakada</p>
		<p>sarahyukinonakada@gmail.com</p>
		<p>(+55) 11 99146-4391</p>
		<p>Brazil, SP/SP</p>
	</div>
</div>
