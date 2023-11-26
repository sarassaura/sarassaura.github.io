import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import type { Projects } from './github';

export default function markdown(edges: Projects['viewer']['pinnedItems']['edges']) {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	edges.forEach((readme) => {
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.md`, readme.node.en.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.es.md`, readme.node.es.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.pt-BR.md`, readme.node.br.text);
	});
}
