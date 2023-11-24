import 'dotenv/config';
import github from './github';
import markdown from './markdown';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (!fs.existsSync(`${__dirname}/../markdown/`)) {
	fs.mkdirSync(`${__dirname}/../markdown/`);

	const projects = await github();

	markdown(projects.viewer.pinnedItems.edges);
}
