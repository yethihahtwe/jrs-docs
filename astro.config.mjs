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
				{
					label: 'UEP',
					items: [
						{ label: 'Getting Started', slug: 'uep/getting-started' },
						{
							label: 'Roles',
							items: [
								{ label: 'Teachers', slug: 'uep/roles/teachers' },
								{ label: 'Project Assistant', slug: 'uep/roles/project-assistant' },
								{ label: 'Education Officer', slug: 'uep/roles/education-officer' },
								{ label: 'Project Officer', slug: 'uep/roles/project-officer' },
								{ label: 'Project Director', slug: 'uep/roles/project-director' },
								{ label: 'Admin & Finance', slug: 'uep/roles/admin-finance' },
							],
						},
						{
							label: 'Menus',
							items: [
								{ label: 'Register & Inquiry', slug: 'uep/menus/register-inquiry' },
								{ label: 'Admissions', slug: 'uep/menus/admissions' },
								{ label: 'Students', slug: 'uep/menus/students' },
								{ label: 'Volunteers', slug: 'uep/menus/volunteers' },
								{ label: 'Activities', slug: 'uep/menus/activities' },
								{ label: 'Finance', slug: 'uep/menus/finance' },
							],
						},
						{
							label: 'Workflows',
							items: [
								{ label: 'Semester Setup', slug: 'uep/workflows/semester-setup' },
								{ label: 'Allowance Process', slug: 'uep/workflows/allowance-process' },
							],
						},
					],
				},
			],
		}),
	],
});
