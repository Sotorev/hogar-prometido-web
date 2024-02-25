/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#9ED900',
				'secondary': '#F9A826',
				'tertiary': '#F9A826',
			},
		},
	},
	plugins: [],
}
