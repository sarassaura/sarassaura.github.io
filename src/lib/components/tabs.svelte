<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<TabGroup>
	<TabAnchor
		name="tab1"
		href="#sobre"
		selected={$page.url.hash === '#sobre' || $page.url.hash === '/'}>Sobre</TabAnchor
	>
	<TabAnchor name="tab2" href="#projetos" selected={$page.url.hash === '#projetos'}
		>Projetos</TabAnchor
	>
	<TabAnchor name="tab3" href="#servicos" selected={$page.url.hash === '#servicos'}
		>Serviços</TabAnchor
	>
	<TabAnchor name="tab3" href="#contato" selected={$page.url.hash === '#contato'}>Contato</TabAnchor
	>
</TabGroup>
