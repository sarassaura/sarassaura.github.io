import type { Handle } from '@sveltejs/kit';
import { detectLocale } from '$lib/i18n/i18n-util';
import { sequence } from '@sveltejs/kit/hooks';
import { GITHUB } from '$env/static/private';
import { github } from '$lib';

const projects = await github(GITHUB);

const i18n = (async ({ event, resolve }) => {
	const locale = detectLocale(() => [event.params.lang ?? '']);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
}) satisfies Handle;

const markdown = (async ({ event, resolve }) => {
	event.locals.projects = projects;

	return resolve(event);
}) satisfies Handle;

export const handle = sequence(i18n, markdown);
