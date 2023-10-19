<div class="container">
	<div class="flex w-full justify-around py-4">
		<a class="btn variant-filled px-3 py-3" href="/">
			<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
			<span class="break">&nbspGo back</span>
		</a>
		<select class="select">
			<option value="1">pt-BR</option>
			<option value="2">EN</option>
		</select>
		<a class="btn variant-filled" href="/resume.pdf" download="sarah_nakada">
			<span class="break">Download&nbsp</span>PDF
			<iconify-icon icon="material-symbols:download-sharp" height="28" />
		</a>
	</div>
	<div class="wrapper">
		<img src="resume1.webp" alt="resume" />
	</div>
</div>

<style>
	.select {
		width: fit-content;
	}
	.container {
		display: contents;
		align-self: center;
		align-content: center;
	}
	.wrapper {
		width: 100%;
		height: calc(100% - 80px);
		padding: 1rem 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
