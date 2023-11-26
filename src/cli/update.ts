import 'dotenv/config';
import github from './github';
import markdown from './markdown';
import cloudinary from './cloudinary';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = await yargs(hideBin(process.argv)).argv;
const projects = await github();

if (argv['all']) {
	markdown(projects.viewer.pinnedItems.edges);
	cloudinary(projects.viewer.pinnedItems.edges);
}
if (argv['markdown']) {
	markdown(projects.viewer.pinnedItems.edges);
}
if (argv['projects']) {
	cloudinary(projects.viewer.pinnedItems.edges);
}
