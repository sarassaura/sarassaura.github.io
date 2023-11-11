import { compile } from 'mdsvex';
import { error } from '@sveltejs/kit';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
	const {
		projects: {
			viewer: {
				pinnedItems: { edges }
			}
		}
	} = await parent();

	const index = edges.findIndex((el) => el.node.name == params.project);

	if (index == -1) {
		throw error(404, `Could not find ${params.project}`);
	}

	const next = (index + 1) % edges.length;
	let previous = (index - 1) % edges.length;
	previous = previous < 0 ? edges.length - 1 : previous;

	const next_link = edges[next].node.name;
	const previous_link = edges[previous].node.name;

	const mdx = edges[index].node.object.text;

	const project = await compile(mdx, {
		// layout: { _: '/src/mdsvex.svelte' },
		rehypePlugins: [rehypeSlug],
		remarkPlugins: [remarkUnwrapImages]
	});

	const data = project?.code.replaceAll('{@html `', '').replaceAll('`}', '');

	return {
		data,
		next_link,
		previous_link
	};
}
