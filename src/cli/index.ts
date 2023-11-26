import 'dotenv/config';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import github from './github';
import markdown from './markdown';
import cloudinary from './cloudinary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (!fs.existsSync(`${__dirname}/../markdown/`)) {
	fs.mkdirSync(`${__dirname}/../markdown/`);

	const projects = await github();

	markdown(projects.viewer.pinnedItems.edges);
	cloudinary(projects.viewer.pinnedItems.edges);
}
