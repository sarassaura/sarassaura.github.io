<script lang="ts">
	export let style: string;
</script>

<svg class={'hamburguer ' + style} viewBox="0 0 100 100" aria-label="hamburguer icon">
	<rect class="line top" width="80" height="10" x="10" y="25" rx="5" />
	<rect class="line middle" width="80" height="10" x="10" y="45" rx="5" />
	<rect class="line bottom" width="80" height="10" x="10" y="65" rx="5" />
</svg>
