import { GITHUB } from '$env/static/private';
import { request, gql } from 'graphql-request';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const document = gql`
		{
			viewer {
				pinnedItems(first: 6) {
					totalCount
					edges {
						node {
							... on Repository {
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

	return {
		projects
	};
}
