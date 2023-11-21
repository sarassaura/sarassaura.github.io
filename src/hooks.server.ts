import type { Handle } from '@sveltejs/kit';
import { detectLocale } from '$lib/i18n/i18n-util';
import { sequence } from '@sveltejs/kit/hooks';

const i18n = (async ({ event, resolve }) => {
	const locale = detectLocale(() => [event.params.lang ?? '']);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
}) satisfies Handle;

const github = (async ({ event, resolve }) => {
	console.log(event.url.pathname);
	return resolve(event);
}) satisfies Handle;

export const handle = sequence(i18n, github);
