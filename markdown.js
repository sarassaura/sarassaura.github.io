import 'dotenv/config';
import { request, gql } from 'graphql-request';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

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

const projects = await request(
	'https://api.github.com/graphql',
	document,
	{},
	{ authorization: `Bearer ${process.env.GITHUB}` }
);

const edges = projects.viewer.pinnedItems.edges;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (!fs.existsSync(`${__dirname}/src/markdown/`)) fs.mkdirSync(`${__dirname}/src/markdown/`);

edges.forEach((readme) => {
	fs.writeFileSync(`${__dirname}/src/markdown/${readme.node.name}.md`, readme.node.en.text);
	fs.writeFileSync(`${__dirname}/src/markdown/${readme.node.name}.es.md`, readme.node.es.text);
	fs.writeFileSync(`${__dirname}/src/markdown/${readme.node.name}.pt-BR.md`, readme.node.br.text);
});
