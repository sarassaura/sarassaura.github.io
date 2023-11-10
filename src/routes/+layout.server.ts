export const prerender = true;

import { GITHUB } from '$env/static/private';
import { request, gql } from 'graphql-request';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

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

	const dev = process.argv.includes('dev');

	if (!dev) {
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = dirname(__filename);
		fs.writeFileSync(`${__dirname}/../../../client/file.txt`, 'Hello Motto');
	}

	return {
		projects,
		url: url.pathname
	};
}
