import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return /^es|pt-BR|en$/.test(param);
}) satisfies ParamMatcher;
