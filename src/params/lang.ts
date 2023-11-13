import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return /^es|en|br$/.test(param);
}) satisfies ParamMatcher;
