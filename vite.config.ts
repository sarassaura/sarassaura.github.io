import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vite';
import Webp from './vite-plugin-webp';

export default defineConfig({
	plugins: [sveltekit(), Webp(), purgeCss()]
});
