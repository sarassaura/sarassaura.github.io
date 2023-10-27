<script>
	import { error } from '@sveltejs/kit';

	/** @type {import('./$types').PageData} */
	export let data;

	const result = data.projects.viewer.pinnedItems.edges.find(
		(project) => project.node.name == data.slug
	);

	if (result == undefined) {
		throw error(404, `Could not find ${data.slug}`);
	}
</script>

<p>{result?.node.object.text}</p>
