import type { Projects } from './github';
import { v2 as cloud } from 'cloudinary';

export default function cloudinary(edges: Projects['viewer']['pinnedItems']['edges']) {
	edges.forEach(async (projects) => {
		cloud.config({
			cloud_name: process.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET,
			secure: true
		});

		cloud.uploader.upload(
			projects.node.openGraphImageUrl,
			{ public_id: 'portfolio/' + projects.node.name + '/preview' },
			function (error, result) {
				if (error) {
					console.log(error);
				}
				console.log(result);
			}
		);
	});
}
