import 'dotenv/config';
import github from './github';
import markdown from './markdown';

const projects = await github();
markdown(projects.viewer.pinnedItems.edges);
