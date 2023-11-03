import axios from 'axios';
import { compile } from 'mdsvex';
import { error } from '@sveltejs/kit';
import rehypeSlug from 'rehype-slug';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const data = await axios
		.get(`https://raw.githubusercontent.com/sarassaura/${params.project}/main/README.md`)
		.then(async (data) => await compile(data.data, { rehypePlugins: [rehypeSlug] }))
		.catch(() => {
			throw error(404, `Could not find ${params.project}`);
		});
	return {
		data: data?.code
	};
}
