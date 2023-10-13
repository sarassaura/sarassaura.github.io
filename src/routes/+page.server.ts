import { GITHUB } from '$env/static/private';
import { request, gql } from 'graphql-request'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const document = gql`
		{
			viewer {
			pinnedItems(first:6) {
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
	`

	const data = await request('https://api.github.com/graphql', document,{},{authorization: `Bearer ${GITHUB}`,});

	return {
		data
	};
}
