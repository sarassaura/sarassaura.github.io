import { error } from '@sveltejs/kit';

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

	return {
		next_link,
		previous_link,
		slug: params.project
	};
}
