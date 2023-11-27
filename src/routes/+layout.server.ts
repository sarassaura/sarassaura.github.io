export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, locals }) {
	const projects: {
		viewer: {
			pinnedItems: {
				totalCount: number;
				edges: {
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
						repositoryTopics: {
							totalCount: number;
							nodes: {
								topic: {
									name: string;
								};
							}[];
						};
					};
				}[];
			};
		};
	} = locals.projects;
	const potato: string = url.pathname;

	return {
		projects,
		url: potato
	};
}
