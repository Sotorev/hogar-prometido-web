/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#9ED900',
				'secondary': '#333',
				'tertiary': '#f4f4f4',
				'quaternary': '#f7faf0',
				'accent': '#FFD700',
				'dark-primary': '#8CB22E',
			},
		},
	},
	plugins: [],
}
