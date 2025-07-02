// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JRS Docs',
			favicon: '/favicon.gif',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: [
				'@fontsource/montserrat/400.css',
				'@fontsource/montserrat/600.css',
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Introduction',
					slug: 'index'
				},
				{
					label: 'URP',
					items: [
						{ label: 'Getting Started', slug: 'urp/getting-started' },
						{ label: 'Admin & Finance Menu', slug: 'urp/finance-menu' },
						{ label: 'Reception Menu', slug: 'urp/reception-menu' },
					],
				},
			],
		}),
	],
});
