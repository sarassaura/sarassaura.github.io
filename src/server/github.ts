import { request, gql } from 'graphql-request';

export interface Projects {
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
}

export default async function github() {
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

	const projects: Projects = await request(
		'https://api.github.com/graphql',
		document,
		{},
		{ authorization: `Bearer ${process.env.GITHUB}` }
	);

	return projects;
}
