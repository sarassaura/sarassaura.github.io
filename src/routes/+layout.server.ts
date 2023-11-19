export const prerender = true;

import { GITHUB } from '$env/static/private';
import { request, gql } from 'graphql-request';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

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
								en: object(expression: "main:README.md") {
									... on Blob {
										text
									}
								}
								es: object(expression: "main:README.es.md") {
									... on Blob {
										text
									}
								}
								br: object(expression: "main:README.pt-BR.md") {
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
						en: {
							text: string;
						};
						es: {
							text: string;
						};
						br: {
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

	const edges = projects.viewer.pinnedItems.edges;

	const potato: string = url.pathname;

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	if (!fs.existsSync(`${__dirname}/../markdown/`)) fs.mkdirSync(`${__dirname}/../markdown/`);

	edges.forEach((readme) => {
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.md`, readme.node.en.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.es.md`, readme.node.es.text);
		fs.writeFileSync(`${__dirname}/../markdown/${readme.node.name}.pt-BR.md`, readme.node.br.text);
	});

	return {
		projects,
		url: potato
	};
}
