import axios from 'axios';
import { compile } from 'mdsvex';
import { error } from '@sveltejs/kit';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const data = await axios
		.get(`https://raw.githubusercontent.com/sarassaura/${params.project}/main/README.md`)
		.then(
			async (data) =>
				await compile(data.data, {
					rehypePlugins: [rehypeSlug],
					remarkPlugins: [remarkUnwrapImages]
				})
		)
		.then((data) => data?.code.replaceAll('{@html `', '').replaceAll('`}', ''))
		.catch(() => {
			throw error(404, `Could not find ${params.project}`);
		});

	return {
		data: data,
		slug: params.project
	};
}
