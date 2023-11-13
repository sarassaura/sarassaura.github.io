import { error } from '@sveltejs/kit';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

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

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	if (!fs.existsSync(`${__dirname}/../../../../markdown/`))
		fs.mkdirSync(`${__dirname}/../../../../markdown/`);

	fs.writeFileSync(`${__dirname}/../../../../markdown/${edges[index].node.name}.md`, mdx);

	return {
		next_link,
		previous_link,
		slug: params.project
	};
}