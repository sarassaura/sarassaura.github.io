import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import type { Projects } from './github';
import { v2 as cloud } from 'cloudinary';

cloud.config({
	cloud_name: process.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true
});

export default function markdown(edges: Projects['viewer']['pinnedItems']['edges']) {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	edges.forEach((readme) => {
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.md`, readme.node.en.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.es.md`, readme.node.es.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.pt-BR.md`, readme.node.br.text);

		const images = [...readme.node.en.text.matchAll(/^!\[(.+)\]\((.+)\?raw=true\)/gm)];
		const videos = [...readme.node.en.text.matchAll(/^(https:\/\/github\.com.+$)/gm)];

		images.forEach((image) => {
			const name = image[1];
			const url = image[2];
			cloud.uploader.upload(
				`https://raw.githubusercontent.com/sarassaura/${readme.node.name}/main${url}`,
				{ public_id: 'portfolio/' + readme.node.name + '/' + name },
				function (error, result) {
					if (error) {
						console.log(error);
					}
					console.log(result);
				}
			);
		});

		videos.forEach((video) => {
			cloud.uploader.upload(
				video[1],
				{
					resource_type: 'video',
					public_id: 'portfolio/' + readme.node.name + '/video-' + path.basename(video[1])
				},
				function (error, result) {
					if (error) {
						console.log(error);
					}
					console.log(result);
				}
			);
		});
	});
}
