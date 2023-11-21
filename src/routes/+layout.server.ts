export const prerender = true;

import { GITHUB } from '$env/static/private';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { github } from '$lib';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const projects = await github(GITHUB);

	const edges = projects.viewer.pinnedItems.edges;

	const potato: string = url.pathname;

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	if (!fs.existsSync(`${__dirname}/../markdown/`)) fs.mkdirSync(`${__dirname}/../markdown/`);

	edges.forEach((readme) => {
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.md`, readme.node.en.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.es.md`, readme.node.es.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.pt-BR.md`, readme.node.br.text);
	});

	return {
		projects,
		url: potato
	};
}
