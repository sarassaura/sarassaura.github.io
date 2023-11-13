---
title: First post
description: First post.
date: '2023-10-23'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
	import LL from '$lib/i18n/i18n-svelte';
</script>

<div class="flex w-full justify-around py-4">
	<a class="btn variant-filled px-3 py-3" href={$LL.link("/")} aria-label="Go back">
		<iconify-icon icon="mdi:arrow-left" height="28" width="28" />
		<span class="break">&nbspGo back&nbsp</span>
	</a>
</div>

## Markdown