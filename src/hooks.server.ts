import type { Handle } from '@sveltejs/kit';
import { detectLocale } from '$lib/i18n/i18n-util';

export const handle = (async ({ event, resolve }) => {
	const locale = detectLocale(() => [event.params.lang ?? '']);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
}) satisfies Handle;
