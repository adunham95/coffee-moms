import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex'; // 👈 import mdsvex
import mdsvexConfig from './mdsvex.config.js'; // 👈import our mdsvex config

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({
			edge: true,
		}),
		alias: {
			$lib: resolve('./src/lib'),
			$types: resolve('./src/types/'),
			$components: resolve('./src/components/'),
			$helpers: resolve('./src/helpers/'),
			$const: resolve('./src/const/'),
		},
	},
};

export default config;
