export const prerender = true;

import { GITHUB } from '$env/static/private';
import { request, gql } from 'graphql-request';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import sharp from 'sharp';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const document = gql`
		{
			viewer {
				pinnedItems(first: 6) {
					totalCount
					edges {
						node {
							... on Repository {
								object(expression: "main:README.md") {
									... on Blob {
										text
									}
								}
								name
								description
								openGraphImageUrl
								createdAt
								homepageUrl
								repositoryTopics(first: 6) {
									totalCount
									nodes {
										topic {
											name
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`;

	const projects: {
		viewer: {
			pinnedItems: {
				totalCount: number;
				edges: Array<{
					node: {
						object: {
							text: string;
						};
						name: string;
						description: string;
						openGraphImageUrl: string;
						createdAt: string;
						homepageUrl: string;
						repositoryTopics: { totalCount: number; nodes: Array<{ topic: { name: string } }> };
					};
				}>;
			};
		};
	} = await request(
		'https://api.github.com/graphql',
		document,
		{},
		{ authorization: `Bearer ${GITHUB}` }
	);

	// const dev = process.argv.includes('dev');

	// async function download(url: string, filename: string) {
	// 	const response = await fetch(url);
	// 	const buffer = Buffer.from(await response.arrayBuffer());
	// 	toWebp(buffer, filename);
	// }

	// function toWebp(buffer: Buffer, filename: string) {
	// 	sharp(buffer)
	// 		.resize(610, 305, { fit: 'fill' })
	// 		.webp({ effort: 6, quality: 75 })
	// 		.toFile(filename);
	// }

	// if (!dev) {
	// 	const __filename = fileURLToPath(import.meta.url);
	// 	const __dirname = dirname(__filename);

	// 	projects.viewer.pinnedItems.edges.forEach((edge) => {
	// 		download(edge.node.openGraphImageUrl, `${__dirname}/../../../client/${edge.node.name}.webp`);
	// 	});
	// }

	return {
		projects,
		url: url.pathname
	};
}
