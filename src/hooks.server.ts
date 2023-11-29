import 'dotenv/config';
import type { Handle } from '@sveltejs/kit';
import { detectLocale } from '$lib/i18n/i18n-util';
import { sequence } from '@sveltejs/kit/hooks';
import { github } from '$lib';

const credentials: string = process.env.GITHUB as string;

const projects = await github(credentials);

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
