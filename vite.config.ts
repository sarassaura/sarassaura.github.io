import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [sveltekit(), imagetools(), purgeCss()]
});
