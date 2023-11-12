import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'cache',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					if (req.url?.endsWith('.woff2')) {
						res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
					}
					next();
				});
			}
		},
		purgeCss()
	]
});
