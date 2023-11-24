import 'dotenv/config';
import github from './github';
import markdown from './markdown';
import cloudinary from './cloudinary';

const projects = await github();
markdown(projects.viewer.pinnedItems.edges);
cloudinary(projects.viewer.pinnedItems.edges);
