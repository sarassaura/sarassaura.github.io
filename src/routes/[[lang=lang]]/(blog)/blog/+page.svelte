<script>
	import Back from '$lib/components/back.svelte';
	const images = import.meta.glob('/src/markdown/*.md', { eager: true });

	console.log(images);
</script>

<div class="flex w-full justify-around py-4">
	<Back icon="mdi:arrow-left" link="/" />
</div>

## Markdown
