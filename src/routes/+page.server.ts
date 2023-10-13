/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data: string[] = ['a', 'b'];
	return {
		data
	};
}
