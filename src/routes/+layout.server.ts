export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, locals }) {
	const projects = locals.projects;
	const potato: string = url.pathname;

	return {
		projects,
		url: potato
	};
}
